import Post from '../../../models/Post'
import handler from '../../../middlewares/handler'
import auth from '../../../middlewares/auth'

export default handler.use(auth)
.post("/api/post/crud",async (req, res) => {
    const {userId, body} = req
    const {title, description} = body
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
.get("/api/post/crud",async (req, res) => {
    const {userId} = req
    if(!userId) throw new Error('faltaron datos')
    const data = await Post.find({userId}).exec()
    if(!data) throw new Error('no se pudo ingresar a la bdd')
    res.json({success: true, data})
})
.put("/api/post/crud",async (req, res) => {
    const {userId, body} = req
    const {postId, title, description} = body
    if(!userId || !postId || !title || !description) throw new Error('faltaron datos')
    const post = await Post.findOne({_id: postId, userId})
    if(!post) throw new Error('no se pudo ingresar a la bdd')
    post.title = title
    post.description = description
    await post.save()
    res.json({success: true})
})
.delete("/api/post/crud",async (req, res) => {
    const {userId, body} = req
    const {postId} = body
    if(!postId || !userId) throw new Error('faltaron datos')
    return Post.deleteOne({ _id: postId, userId }).then(function(){
        res.json({success: true})
    }).catch(function(error){
        throw new Error("no se ha encontrado el post")
    });
})