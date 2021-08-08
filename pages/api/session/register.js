import User from '../../../models/User'
import handler from '../../../middlewares/handler'
import bcrypt from 'bcrypt'
export default handler.post("/api/session/register",async (req, res) => {
    const {username, password} = req.body
    if(!username || !password) throw new Error
    const issetUser = await User.findOne({username})
    if (issetUser) throw new Error
    bcrypt.hash(password, 10).then(function(hash) {
        User.create({
            username,
            "password": hash
        })
        .then(data => {
            if(data) return res.json({success: true})
            throw new Error("registererror")
        })
        .catch(e =>{
            throw new Error(e)
        })
    });

})