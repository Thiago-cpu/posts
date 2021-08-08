import Post from '../../../models/Post'
import handler from '../../../middlewares/handler'
import auth from '../../../middlewares/auth'

export default handler.use(auth).post("/api/post/createPost",async (req, res) => {
    const {title, description, userId} = req.body
    if(!title || !description || !userId) throw new Error('faltaron datos')
    const data = await Post.create({
        title,
        description,
        likes: 0,
        userId,
    })
    if(!data) throw new Error('no se pudo ingresar a la bdd')

    res.json({success: true})
})