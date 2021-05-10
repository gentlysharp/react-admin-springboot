import React from 'react'
import { List, Datagrid, TextField, DateField, EditButton, DeleteButton } from 'react-admin'
import PostListActions from './PostListActions'

const PostList = ({permissions,...props}) => {
  return (
    <div>
      <List {...props} title="Post Management" actions={<PostListActions permissions={permissions}/>}>
        <Datagrid>
          <TextField source='id' />
          <TextField source='title' />
          <DateField source='publishedAt' />
          <EditButton basePath='/posts' /> 
          <DeleteButton basePath='/posts' />
        </Datagrid>
      </List>      
    </div>
  )
}

export default PostList
