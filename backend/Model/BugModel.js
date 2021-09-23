import mongoose from 'mongoose'

const BugSchema = mongoose.Schema({
    name : String,
    version : String,
    priority : String,
    steps : String,
    details : String,
    creator : String,
    assigned : String,
    isResolved : {
        type : Boolean,
        default : false,
    },
    createdOn : {
        type : Date,
        default : new Date(),
    }
})

const Bug = mongoose.model('Bug', BugSchema)
export default Bug