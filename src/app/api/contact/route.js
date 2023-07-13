import Contact from "@/models/Contact";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { name, email, subject, message } = await request.json();
  await connectDB();
  const newContact = new Contact({
    name,
    email,
    subject,
    message,
  });
  try {
    await newContact.save();
    return new NextResponse("Information has been saved", {
      status: 201,
    });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
};


