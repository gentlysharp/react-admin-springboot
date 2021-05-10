import React from 'react'
import {Create,SimpleForm,TextInput} from 'react-admin'


export const UserCreate = ({ permissions, ...props }) =>
    <Create {...props}>
        <SimpleForm
          defaultValue={{ role: 'user' }}
        >
          <TextInput source="name" validate={[required()]} />
          {permissions === 'admin' &&
            <TextInput source="role" validate={[required()]} />}
        </SimpleForm>
    </Create>;