const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "email is requred for creating a user"],
        trim: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "invalid email address"],
        unique: [true, "email already exists."],
        lowercase: true,

    },
    name:{
        type:String,
        required:[true,"name is required for creating a user"],
        
    },
    password:{
        type:String,
        required:[true,"password is required for creating a user"],
        minlength:[6, "password must be content more than 6 charators"],
        select:false
    },

},
{
    timestamps:true
})


userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        return next()
    }

    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash
    return next()
     
})

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
    
}
const userModel = mongoose.model("user",userSchema)

module.exports = userModel