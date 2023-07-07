'use client'
import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  const { data: session } = useSession()
  console.log('session', session)
  return (
    <header className="flex justify-between p-4">
      <Image src="/next.svg" alt="logo" width={50} height={50} />
      <div className="flex gap-4">
        <button className="bg-black py-1 px-4 text-white rounded-full">
          Create Post
        </button>
        {!session ? (
          <button
            className=" py-1 px-4 rounded-full border"
            onClick={() => signIn()}
          >
            Sign In
          </button>
        ) : (
          <button
            className=" py-1 px-4 rounded-full border"
            onClick={() => signOut()}
          >
            Sign Out
          </button>
        )}

        {session ? (
          <Image
            src={session?.user?.image}
            className="rounded-full"
            alt="user img"
            width={40}
            height={40}
          />
        ) : null}
      </div>
    </header>
  )
}

export default Header
