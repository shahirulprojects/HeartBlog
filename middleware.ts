import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// createRouteMatcher allows us to match specific routes that we want to make public or private
// protected routes usually means that we need to login to go there
const protectedRoutes = createRouteMatcher(["/create-post"]);

// passing in the auth and the request
export default clerkMiddleware((auth, req) => {
  // if the request is directing to the protected routes, we will protect it
  if (protectedRoutes(req)) auth().protect();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
