import { Admin, Resource,fetchUtils } from 'react-admin'

import springRestProvider from './components/Api/SpringbootDataProvider'
import PostList from './components/Posts/PostList'
import PostCreate from './components/Posts/PostCreate'
import PostEdit from './components/Posts/PostEdit'
// import authProvider from './components/Auth/AuthProvider';


function App() {
  return (
    // <Admin dataProvider={springRestProvider('http://localhost:8080')} authProvider={authProvider}>
    <Admin dataProvider={springRestProvider('http://localhost:8080')}>
      <Resource name='posts' list={PostList} create={PostCreate} edit={PostEdit} />
      {/* <Resource name='users' list={UserList} create={UserCreate} edit={UserEdit} /> */}
    </Admin>
  );
}

export default App;
