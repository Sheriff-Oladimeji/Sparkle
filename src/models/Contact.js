import mongoose from "mongoose";
const { Schema } = mongoose;

const contactSchema = new Schema(
  {
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
  },
  {
    timestamps: true,
  }
);
let Contact 

try {
   Contact   =  mongoose.model("Contact");
}
catch{
  Contact =  mongoose.model("Contact", contactSchema);
  }

export default Contact;
