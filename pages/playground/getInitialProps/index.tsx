import React from 'react'
import { NextPage, NextPageContext } from 'next'
import Link from 'next/link'

const BASE_URL = 'http://api-meme-zendvn-01.herokuapp.com/api'

type PostType = {
  PID: string;
  post_content: string;
}
type PropsType = {
  posts: PostType[]
}

const DemoGetInitialProps: NextPage<PropsType> = ({ posts }) => {
  return (
    <div className='container'>
      <h1>Demo GetInitialProps</h1>
      <Link href='/playground/getInitialProps/test'>
        <a>Go to Test Page</a>
      </Link>
      <ul>
        {
          posts.map(post => <li key={post.PID}>{post.post_content}</li>)
        }
      </ul>
    </div>
  )
}

DemoGetInitialProps.getInitialProps = async (ctx: NextPageContext) => {
  const res = await fetch(BASE_URL + '/post/getListPagination.php?pagesize=5&currPage=1')
  const data = await res.json()

  return {
    posts: data.posts
  }
}

export default DemoGetInitialProps
