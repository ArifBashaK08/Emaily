const { Schema, model } = require("mongoose")

const userSchema = new Schema({
    googleId: { type: String, unique: true },
}, { timestamps: true })

const UserModel = model("users", userSchema)
