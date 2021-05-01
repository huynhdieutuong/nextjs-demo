// /admin/posts/566/edit
import React from 'react'
import { withRouter } from 'next/router'

const EditPosts: React.FC = ({ router }) => {
  return (
    <h1>
      Admin - Posts Page - ID: {router.query.id} - Edit
    </h1>
  )
}

export default withRouter(EditPosts)
