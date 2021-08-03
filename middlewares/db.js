
import dbConnect from "../utils/mongodb";

export default async function db(req, res, next){
    await dbConnect()
    next()
}