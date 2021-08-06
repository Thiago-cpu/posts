import nextConnect from "next-connect";
import db from "./db";

export default nextConnect({
    onError(error, req, res){
        res.status(401).json({success: false})
    },
    onNoMatch(req, res){
        res.status(405).json({error: `${req.method} caca`})
    },
    attachParams: true,
}).use(db)