import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link className='border-2 border-black p-2 rounded-md hover:bg-gray-400 hover:text-white' href="/login"> Login </Link>
    </main>
  )
}
