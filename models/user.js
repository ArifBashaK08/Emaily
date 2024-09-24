const { Schema, model } = require("mongoose")

const userSchema = new Schema({
    googleId: { type: String, unique: true },
    credits: { type: Number, default: 0 },
}, { timestamps: true })

const UserModel = model("users", userSchema)
