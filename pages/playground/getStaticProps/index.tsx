import { NextPage, InferGetStaticPropsType, GetStaticProps } from 'next'
import Link from 'next/link'
import React from 'react'

/**
Difference between getServerSideProps and getStaticProps:

1. They are the same in dev env, only differ in product env:

2. getServerSideProps call API when reload page, so it still a dynamic page.
   getStaticProps call API only 1 time when build code (npm run build), so it begin a static page without call api.
=> getStaticProps help load page very fast, because it use static data. The data only update when rebuild code. 
*/

const BASE_URL = 'http://api-meme-zendvn-01.herokuapp.com/api'

type PostType = {
  PID: string;
  post_content: string;
}
type PropsType = {
  posts: PostType[]
}

type PagePropsType = InferGetStaticPropsType<typeof getStaticProps>

const DemoGetStaticProps: NextPage<PagePropsType> = ({ posts }) => {
  return (
    <div className='container'>
      <h1>Demo GetStaticProps</h1>
      <Link href='/playground/getStaticProps/test'>
        <a>Go to Test Page</a>
      </Link>
      <ul>{posts.map(post => <li key={post.PID}>{post.post_content}</li>)}</ul>
    </div>
  )
}

export const getStaticProps: GetStaticProps<PropsType> = async (ctx) => {
  const res = await fetch(BASE_URL + '/post/getListPagination.php?pagesize=5&currPage=1')
  const data = await res.json()

  return {
    props: {
      posts: data.posts
    }
  }
}

export default DemoGetStaticProps
