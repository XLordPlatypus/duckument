import mongoose from "mongoose";

const workspaceScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    pageIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Page'
    }]
});

const Workspace = mongoose.model('Workspace', workspaceScheme);

export default Workspace;