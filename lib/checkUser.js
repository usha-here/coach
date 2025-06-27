import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";

export const checkUser = async () => {       
  const user = await currentUser();
// to check if the user is logged in
  if (!user) {       //if no user is logged in return null
    return null;      
  }
  // to query the user from the database we use try catch block
  try {
    const loggedInUser = await db.user.findUnique({    //checking if the user is already in the database
      where: {
        clerkUserId: user.id,
      },
    });

    if (loggedInUser) {
      return loggedInUser;
    }
    // If the user is not found in the database, create a new user record
    const name = `${user.firstName} ${user.lastName}`;

    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        name,
        imageUrl: user.imageUrl,
        email: user.emailAddresses[0].emailAddress,
      },
    });
    return newUser;

  } 
  catch (error) {
    console.log(error.message);
  }
};