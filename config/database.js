const mongoose = require("mongoose")

mongoose.connect(`mongodb://0.0.0.0:27017/${process.env.DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error:"))
db.once("open", () => {
    console.log("connected to", db.client.s.url)
})
