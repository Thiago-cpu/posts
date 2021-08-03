import handler from "../../../middlewares/handler";
import cookie from 'cookie'
export default handler.post("/api/session/logout",async (req, res) => {
    res.setHeader('Set-Cookie', cookie.serialize('jwt', "",{
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: 'strict',
        expires: new Date(0),
        path: '/'
    }))
    res.json({success:true})
})