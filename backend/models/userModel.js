import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        reqired: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        reqired: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    }

}, {
    timestamps: true
});

const User = mongoose.model("User", userSchema);

export default User;