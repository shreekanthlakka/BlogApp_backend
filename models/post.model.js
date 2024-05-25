import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        title: { type: String },
        content: { type: String },
        authorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        // commentId: [
        //     {
        //         type: mongoose.Schema.Types.ObjectId,
        //         ref: "Comment",
        //     },
        // ],
        tagId: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Tag",
            },
        ],
        featuredImage: [
            {
                url: String,
                public_id: String,
            },
        ],
    },
    { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
