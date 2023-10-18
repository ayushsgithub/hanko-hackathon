import React from 'react'
import { LogoutBtn } from '../components/hanko/Logout'
import Link from 'next/link'

const page = () => {
  return (
    <div>
        <h1>Test Page</h1>
        <div className='bg-blue-600 w-fit mx-auto p-2 rounded-lg'>
            <LogoutBtn />
        </div>
            <Link
            className='bg-green-600 w-fit mx-auto p-2 rounded-lg flex'
            href="dashboard">Go to Profile</Link>

    </div>
  )
}

export default page