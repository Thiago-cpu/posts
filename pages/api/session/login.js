import User from '../../../models/User'
import handler from '../../../middlewares/handler'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import cookie from 'cookie'

export default handler.post("/api/session/login",async (req, res) => {
    const {username, password} = req.body
    if(!username || !password) throw new Error
    const Usuario = await User.findOne({username})
    if (!Usuario) throw new Error
    bcrypt.compare(password, Usuario.password)
    .then(function(result) {

        if(!result) throw new Error
        const session = {id: Usuario._id, username: Usuario.username}
        const token = jwt.sign(session, process.env.TOKEN_SECRET, {expiresIn: '8h'})
        res.setHeader('Set-Cookie', cookie.serialize('jwt', token,{
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: 'strict',
            maxAge: 60*60*8,
            path: '/'
        }))
        return res.json({success: true, id: Usuario._id,})
    })
    .catch(e => {
        console.error(e)
        res.status(300).json({success: false})
    })
})