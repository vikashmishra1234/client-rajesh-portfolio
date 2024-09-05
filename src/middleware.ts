"use server"
import { NextRequest, NextResponse } from 'next/server';
// import jwt from 'jsonwebtoken';

export async function middleware(req: NextRequest) {
    const token:any = req.cookies.get('token'); 
    console.log("helo")
    if (!token) {
        return NextResponse.redirect(new URL('/', req.url)); 
    }

    try {
        // jwt.verify(token, "vikash");
        return NextResponse.next(); 
    } catch (error) {
        console.log('Token verification failed:', error);
        return NextResponse.redirect(new URL('/login', req.url));
    }
}

export const config = {
    matcher: ['/addnotes'],
};
