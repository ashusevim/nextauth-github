"use client"

import { useSession, signIn, signOut } from "next-auth/react"

export default function LoginButton() {
    const { data: session } = useSession()

    if (session) {
        // if the user is signed in
        return (
            <>
                <p>Signed in as {session.user?.email && session.user?.name}</p>
                <button onClick={() => signOut()}>sign Out</button>
            </>
        )
    }

    // if the user is not signed in
    return (
        <>
            <p>Not signed in</p>
            <button onClick={() => signIn("github")}>Sign in with .0.                                      9                                                                                                                                                                            </button>
        </>
    )
}