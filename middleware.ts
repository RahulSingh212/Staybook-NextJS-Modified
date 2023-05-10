import { NextRequest, NextResponse } from "next/server";
import Router from "next/router";
import { USER_ACCESS_TOKEN } from "./lib/helper";

export function middleware(req: NextRequest, res: NextResponse) {
  const response = NextResponse.next();
  const userAccessToken = req.cookies.get(USER_ACCESS_TOKEN);

  console.log(req.url);
  // console.log(userAccessToken);
  if (req.nextUrl.pathname.startsWith("/login") && userAccessToken) {
    return NextResponse.redirect(new URL("/profile", req.url));
  } else if (req.nextUrl.pathname.startsWith("/profile/") && !userAccessToken) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  //   console.log("Request: ", req.nextUrl.pathname);
  //   const cookie = req.cookies.get("user-access-token");
  //   console.log("Cookie: ", cookie);
  //   const cookieValue = req.cookies.get("user-auth-cookie")?.valueOf();
  //   const allCookies = req.cookies;
  //   const isCookieExists = req.cookies.has("user-auth-cookie");
  //   const deleteCookie = req.cookies.delete("user-auth-cookie");

  /////////////////////////////////////////
  //   if (req.cookies.has("user-auth-cookie")) {
  //     const url = req.nextUrl.clone();
  //     url.pathname = "/profile/user";
  //     return NextResponse.rewrite(url);
  //   }

  // if (req.cookies.has("user-auth-cookie")) {
  //     return NextResponse.rewrite(new URL('/profile/user', req.nextUrl));
  // }

  return response;
}

export const config = {
  matcher: ["/", "/login", "/profile", "/profile/my-bookings", "/profile/personal-info"],
};
