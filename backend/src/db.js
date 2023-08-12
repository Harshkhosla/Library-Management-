const { connect } = require("mongoose")
const  DB_URI= "mongodb+srv://harsh:Harsh9945khosla@cluster0.osfevs6.mongodb.net/test"
DB_NAME="lms"
const connectDb = async () => {
  return connect(DB_URI, { dbName: DB_NAME })
}

module.exports = { connectDb }
