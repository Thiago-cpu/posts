import nextConnect from "next-connect";
import db from "./db";

export default nextConnect({
    onError(error, req, res){
        res.status(300).json({success: false, data: error.message})
    },
    onNoMatch(req, res){
        res.status(405).json({error: `${req.method} caca`})
    },
    attachParams: true,
}).use(db)