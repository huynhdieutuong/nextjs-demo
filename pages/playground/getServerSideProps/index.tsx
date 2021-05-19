import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

/**
Different between getInitialProps and getServerSideProps when click back Link:

1. getInitialProps -> call direct API from server -> show real API

2. getServerSideProps -> call API through NextJS server -> hide real API
*/

const BASE_URL = 'http://api-meme-zendvn-01.herokuapp.com/api'

type PostType = {
  PID: string;
  post_content: string;
}
type PropsType = {
  posts: PostType[]
}

type PagePropsType = InferGetServerSidePropsType<typeof getServerSideProps>

const DemoGetServerSideProps: NextPage<PagePropsType> = ({ posts }) => {
  return (
    <div className='container'>
      <h1>Demo GetServerSideProps</h1>
      <Link href='/playground/getServerSideProps/test'>
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

export const getServerSideProps: GetServerSideProps<PropsType> = async (ctx) => {
  const res = await fetch(BASE_URL + '/post/getListPagination.php?pagesize=5&currPage=1')
  const data = await res.json()

  return {
    props: {
      posts: data.posts
    }
  }
}

export default DemoGetServerSideProps
