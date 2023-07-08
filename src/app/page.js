'use client'
import GameList from './components/Home/GameList'
import Hero from './components/Home/Hero'
import Search from './components/Home/Search'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import app from './shared/FirebaseConfig'
import Posts from './components/Home/Posts'

export default function Home() {
  const db = getFirestore(app)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts()
  }, [])

  const getPosts = async () => {
    const querySnapshot = await getDocs(collection(db, 'posts'))
    querySnapshot.forEach((doc) => {
      console.log(doc.id, ' => ', doc.data())
      setPosts((posts) => [...posts, doc.data()])
    })
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Hero />
      <Search />
      <GameList />
      {posts ? <Posts posts={posts} /> : null}
    </main>
  )
}
