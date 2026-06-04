"use client"

import { createAuthClient } from "better-auth/client";

const authClient = createAuthClient();

export const signIn = async () => {
    await authClient.signIn.social({
        provider: "google",
        callbackURL: "/dashboard",
        errorCallbackURL: "/signin"
    })
}

export const { signOut, useSession } = authClient;

