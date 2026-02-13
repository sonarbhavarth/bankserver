const  mangoose = require("mongoose")

const accountSchema = new mangoose.Schema({
    user:{
        type: mangoose.Schema.Types.ObjectId,
        ref: "user",
        required: [true, "account must be associted with user"],
        index: true
    },
    status:{
        type: String,
        enum:{
            values:["active", "frozen", "suspended"],
            message:"status must be active, frozen or suspended",
            default:"active"

        }

    },
    currency: {
        type: String,
        required: [true, "currency is required for creating an account"],
        default:"INR"
    },
    }
)

accountSchema.index({user:1, status: 1})


const accountModel = mangoose.model("account", accountSchema)

module.exports = accountModel