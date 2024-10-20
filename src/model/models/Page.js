import mongoose from "mongoose";

const pageScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    content: {
        type: String
    }
});

const Page = mongoose.model('Page', pageScheme);

export default Page;