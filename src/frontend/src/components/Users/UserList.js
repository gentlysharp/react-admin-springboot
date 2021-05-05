import React from 'react'
import { List, Datagrid, TextField, EditButton, DeleteButton,EmailField } from 'react-admin'

const UserList = (props) => {
  return (
    <div>
      <List {...props}>
        <Datagrid>
          <TextField source='id' />
          <TextField source='name'/>
          <EmailField email source='email'/>
          <EditButton basePath='/users' /> 
          <DeleteButton basePath='/users' />
        </Datagrid>
      </List>      
    </div>
  )
}

export default UserList
