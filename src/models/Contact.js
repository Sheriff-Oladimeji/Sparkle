import mongoose from "mongoose";
import { Schema } from "mongoose";

const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  subject: {
    type: String,
    required: true,
  },

  message: {
    type: String,
    required: true,
  },
});
let Contact = mongoose.model("Contact", contactSchema)

export default  Contact
