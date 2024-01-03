// "use client"

import { NextResponse } from "next/server";
export default function MiddleWare(request) {
    console.log('midffffdleware');
    // if (request.nextUrl.pathname != '/login') {
    return NextResponse.redirect(new URL("/login", request.url))
    // }
}

export const config = {
    matcher: ["/about/:path*", "/studentlist/:path*",]
}