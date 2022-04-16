import './App.css';
import Axios from 'axios'
import {
  Loading,
  PageTitle,
} from './appStyles'
import {useState, useEffect} from 'react'
import Users from './components/Users'
 
function App() {
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])
 

    useEffect(()=>{
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => setUsers(res.data))
        .catch(err => alert(err))

        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => setPosts(res.data))
        .catch(err => alert(err))
    },[])


  return (
    <div>
        <PageTitle>select a user</PageTitle>
        {users.length > 0?
        
            <Users users_={users} posts_={posts}/>   
            :
            <Loading>loading...</Loading>
        }
      
      
    </div>
  );
}

export default App;
