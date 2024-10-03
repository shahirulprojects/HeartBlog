import { Schema, models, model, Document } from "mongoose";

// TypeScript interface so that we always know which fields we have (TypeScript format)
export interface IPost extends Document {
  title: string;
  content: string;
  views: number;
  author: Schema.Types.ObjectId; // reference to the User model
  createdAt: Date;
}

// schema or template (it is basically changing the TypeScript format to the Mongoose format)
const PostSchema = new Schema({
  // do pay attention to the bracket [] as it means that it will be an array
  title: { type: String, required: true }, // title is required
  content: { type: String, required: true },
  views: { type: Number, default: 0 }, // set the initial value of the views to 0
  author: { type: Schema.Types.ObjectId, ref: "User", required: true }, // reference to the User model
  createdAt: { type: Date, default: Date.now },
});

// turning the schema into a model
const Post = models.Post || model("Post", PostSchema); // check if the model exist and if not it will create a Post model based on the PostSchema

export default Post; // export the model
