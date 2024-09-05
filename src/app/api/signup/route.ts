import { dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import User from "@/models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request: Request) {
    try {
        await dbConnect(); // Ensure database connection

        const body = await request.json();
        const { email, password } = body;

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ message: "User already exists" }, { status: 400 });
        }

        // Create and save a new user
        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();

        // Generate a JWT token
        const token = jwt.sign({ email: newUser.email },"vikash", {
            expiresIn: '1h', // Token expiration time
        });

       
        return NextResponse.json({ token, message: "User registered successfully" });
    } catch (error: any) {
        console.log('Error:', error.message);
        return NextResponse.json({
            success: false,
            error: "Something went wrong",
        });
    }
}
