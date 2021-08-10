import Post from '../../../models/Post'
import handler from '../../../middlewares/handler'
export default handler
.get("/api/post/getAll",async (req, res) => {
    const data = await Post.find({}).exec()
    if(!data) throw new Error('no se pudo ingresar a la bdd')
    res.json({success: true, data})
})