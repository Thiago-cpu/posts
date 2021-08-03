import User from '../../../models/User'
import handler from '../../../middlewares/handler'
export default handler.post("/api/session/verifyUser",async (req, res) => {
    const {username} = req.body
    if(!username) throw new Error
    const issetUser = await User.findOne({username})
    if (issetUser) throw new Error
    return res.json({success: true})
})