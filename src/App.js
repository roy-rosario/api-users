// import './App.css';
import Axios from 'axios'
import {
  UsersContainer,
  UsersTitle,
  Expander,
  TopHalf,
  BottomHalf,
  UsersInfo
} from './appStyles'
import {useState, useEffect} from 'react'
 
function App() {
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])
  const [expanded, setExpanded] = useState(false)

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
      <UsersContainer>
        {/* <TopHalf>
          <UsersTitle>
              <h2>User Name</h2>
              <Expander onClick={()=>{setExpanded(prev => !prev)}}>
                  {expanded? 
                      <i className="fa fa-chevron-up" aria-hidden="true"></i>
                      : 
                      <i className="fa fa-chevron-down" aria-hidden="true"></i>
                  }
              </Expander>
          </UsersTitle>
          <UsersInfo>
              <h4>Some Company</h4>
              <p>The comapany motto</p>
          </UsersInfo>
        </TopHalf>
        <BottomHalf isClicked={expanded} >
        </BottomHalf> */}
      </UsersContainer>
      
    </div>
  );
}

export default App;
