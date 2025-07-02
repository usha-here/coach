"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";


            //runs on server
            // API1
export async function updateUser(data) {
    //first check if user is logged in or not
    const { userId } = await auth();            //get user id 
    if(!userId) throw new Error("User not authorised");  //check if userid exists else throw error

    //now check if user is inside our database or not
    const user = await db.user.findUnique({ where: { clerkUserId: userId } });
    if (!user) throw new Error("User not found");

    //try catch used to create a connection with the database
    try{
        //find if the industry exists in the database
        // if industry does not exist, create it with default values -will replace it with Ai later
        //update the user
        //so here we are performing three Api calls in one function which is not a good practice
        //therefore in prisma we have a feature called transaction which allows us to perform multiple operations in one go

        const result = await db.$transaction(async (tx) => {
            //find if the industry exists in the database
            let industryInsight = await tx.industryInsight.findUnique({
                where: { industry: data.industry },
            });

            //if industry does not exist, create it with default values
            if (!industryInsight) {
                industryInsight= await tx.industryInsight.create({
                    data: {
                        industry: data.industry,
                        salaryRanges:[], //default empty array, will replace with AI later
                        growthRate : 0,    //default
                        demandLevel: "Medium" , 
                        topSkills: [],  // Most in-demand skills
                        marketOutlook: "Neutral",    // "Positive", "Neutral", "Negative"
                        keyTrends:[],  // Array of current industry trends
                        recommendedSkills:[],  // Skills recommended for the industry
                        nextUpdate: new Date(Date.now()+7*24*60*60*1000),  // Scheduled update time
                    },
                });
                } 
            //update the user
            const updatedUser = await tx.user.update({
                //find user by id
                where: { 
                    id: user.id ,
                },
                //return data to be updated
                data: {
                    industry: data.industry,
                    experience: data.experience,
                    bio: data.bio,
                    skills: data.skills,
                },
            });
            return {updatedUser, industryInsight};
            
        },{      
            timeout: 10000, //10000=10sec  default :5000(5sec)
        });
        return result.updatedUser; //return the updated user
    }

    catch (error) {
    
        console.error("Error updating user:", error.message);
        throw new Error("Failed to update user");
    }
}
//now get onboarding status          API2
export async function getOnboardingStatus() {
    try{
    const { userId } = await auth();             
  if (!userId) throw new Error("User not found");
    const user = await db.user.findUnique({
      where: {
        clerkUserId: userId,
      },
      select: {
        industryId: true,
      },
    });
     if (!user) throw new Error("User not found");
    return {
      isOnboarded: !!user?.industryId,
    };
  } catch (error) {
    console.error("Error checking onboarding status:", error);
    throw new Error("Failed to check onboarding status");
  }
}
