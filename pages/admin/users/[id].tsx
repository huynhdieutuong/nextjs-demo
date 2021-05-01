// /admin/users/20
import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const UsersID: React.FC = () => {
  const router = useRouter()

  return (
    <h1>
      Admin - Users Page - ID: {router.query.id} <br/>

      <button onClick={() => router.push('/login')}>Go to Login</button> <br />

      <Link href="/login">
        <button className='active'>Login</button>
      </Link>
    </h1>
  )
}

export default UsersID
