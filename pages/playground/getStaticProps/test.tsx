import Link from 'next/link'
import React from 'react'

const TestPage = () => {
  return (
    <div>
      <h1>Test Page</h1>
      <Link href='/playground/getStaticProps'>
        <a>Go back to getStaticProps Page</a>
      </Link>
    </div>
  )
}

export default TestPage
