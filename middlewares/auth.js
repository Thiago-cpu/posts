import jwt from 'jsonwebtoken'
export default async function auth(req, res, next){ 
    const auth = req.cookies.jwt
    if (!auth) throw new Error("no estas autenticado")
    jwt.verify(auth,process.env.TOKEN_SECRET, async function (err, decode){
        req.body.userId = decode.id
        if(!err && decode) return next()
        throw new Error("no estas autenticado")
    })
}