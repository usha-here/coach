"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import Error from "next/error";

            //runs on server
export async function updateUser(data) {
    //first check if user is logged in or not
    const { userId } = await auth();            //get user id 
    if(!userId) throw new Error("User not authorised");  //check if userid exists else throw error

    //now check if user is inside our database or not
    const user = await db.user.findUnique({ where: { clerkUserId: userId } });
    if (!user) throw new Error("User not found");

    //try catch used to create a connection with the database
    try{

    }
    catch (error) {

    }
}