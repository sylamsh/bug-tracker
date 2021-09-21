require('dotenv').config()
const 
    express  = require('express'),
    cors     = require('cors'),
    mongoose = require('mongoose'),
    app      = express();

const PORT = process.env.PORT || 5000
mongoose.connect("mongodb://localhost/blog_app");

app.use(express.urlencoded({extended:true}))
app.use(cors())

app.listen(PORT, () => {
    console.log("server started at..." + PORT)
})