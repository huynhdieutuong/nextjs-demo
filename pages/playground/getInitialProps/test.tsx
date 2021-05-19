import Link from 'next/link'
import React from 'react'

const TestPage = () => {
  return (
    <div>
      <h1>Test Page</h1>
      <Link href='/playground/getInitialProps'>
        <a>Back to GetInitialProps Page</a>
      </Link>
    </div>
  )
}

export default TestPage
