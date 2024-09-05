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

        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ message: "Invalid email or password" }, { status: 400 });
        }

        // Compare the provided password with the hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return NextResponse.json({ message: "Invalid email or password" }, { status: 400 });
        }

        // Generate a JWT token
        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET!, {
            expiresIn: '1h', // Token expiration time
        });

        // Send the token back to the client
        return NextResponse.json({ token, message: "Login successful" });
    } catch (error: any) {
        console.log('Error:', error.message);
        return NextResponse.json({
            success: false,
            error: "Something went wrong",
        });
    }
}
