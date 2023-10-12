
import NextAuth from "next-auth";

import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@/db/database.config";




const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId:
                "936095275055-dplhj5u9cbfecs29h2o7eg2akf92q4n1.apps.googleusercontent.com",
            clientSecret: "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",
        }),
        GithubProvider({
            clientId: "5cd9f82a03464c7d5f79",
            clientSecret: "94f6a19bf0b7ba717e99b1cc3c9130811d060ea3",
        }),
    ],

    callbacks: {
        session({ session, user }) {
            return session
        },

        async signIn({ profile, credentials, user, account }) {

            try {
                const databaseUser = await prisma.user.findFirst({
                    where: {
                        email: user.email!
                    }
                })
                if (databaseUser) {
                    console.log(databaseUser)
                    return true
                }

                await prisma.user.create({
                    data: {
                        email: user.email!,
                        username: user.name!,
                        pp: user.image!,

                    }
                })
                return true
            } catch (error) {
                console.log(error)
                return false
            }
        }
        , async redirect({ url, baseUrl }) {
            return baseUrl
        }
    },
});

export { handler as GET, handler as POST };
