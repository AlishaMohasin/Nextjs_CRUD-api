import {connect} from "mongoose"

const dbconnect = async () => {

    await connect("mongodb://localhost:27017/crud")
    console.log("database connected")
    
}
module.exports = dbconnect;