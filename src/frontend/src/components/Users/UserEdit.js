import React from 'react'
import {Edit, SimpleForm, TextInput, DateInput} from 'react-admin'

const UserEdit = (props) => {
  return (
    <Edit title='Edit a User' {...props}>
      <SimpleForm>
        <TextInput disabled source='id'/>
        <TextInput source='name'/>
        <TextInput email source='email'/>
      </SimpleForm>
    </Edit>
  )
}

export default UserEdit
