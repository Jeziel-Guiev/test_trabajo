const modelUser = require('../models/Users');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const login = {
    signin: async(req, res) => {
        try {
            const find_user = await modelUser.findOne({ email: req.body.email });
            if(!find_user){
                res.status(401).send({'message':'Usuario no encontrado'});
            }else{
               var validPassword = await bcrypt.compare(req.body.password, find_user.password);
               if(!validPassword){
                res.status(401).send({'message':'Paaword incorrecto'});
               }else{           
                var token= jwt.sign({
                    name:find_user.name,
                    id:find_user._id,
                    pm:find_user.password_mqtt,
                }, 'jeziel-guiev');           
                res.status(200).json(token);
               }
            }
        } catch (error) {
            res.status(401).json({'message':'Error al iniciar sesion'});
        }
    },
    signup: async (req, res) => {
       try {
            var salt= await bcrypt.genSalt(10);
            var password= await bcrypt.hash(req.body.password,salt);
            const new_user = new modelUser({
                name: req.body.name,
                email: req.body.email,
                password: password,
                password_mqtt: "jezielguiev",
            })
            await new_user.save((err, user) => {
                if(!user)  res.json({ message : "usuario repetido"});
                res.json(user)
            })
       } catch (error) {
           res.json({ message : "error al crear usuario"});
       }
    }
}
module.exports = login;