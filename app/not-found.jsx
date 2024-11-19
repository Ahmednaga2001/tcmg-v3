"use client";
import { useRouter } from 'next/navigation'
 
export default function NotFound() {
  const router = useRouter()
  const handle = () => {
    router.push('/')
  }
  return (
  <section className='notFound' onClick={handle}>
   
  </section>
  )
}