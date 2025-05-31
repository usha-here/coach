import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([      // give all the routes
  "/dashboard(.*)",  //(.*) used because anything that comes after it(dashboard,resume etc) is itself a private route
  '/resume(.*)',
  '/interview(.*)',
  '/ai-cover-letter(.*)',
  '/onboarding(.*)',
]); 
export default clerkMiddleware(async(auth,req)=>{         //callback
  const {userId}=await auth();                    // gives the logged in user id 
  if(!userId && isProtectedRoute(req)){       // if the user is not logged in and is protectedroute you will return req
    const {redirectToSignIn}=await auth(); 
    return redirectToSignIn();
  }
  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
