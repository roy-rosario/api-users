import {
    UsersContainer,
    UsersTitle,
    Expander,
    TopHalf,
    BottomHalf,
    UsersInfo,
    Post
  } from '../appStyles'
import {useState} from 'react'


function Users({users_, posts_}){
  const [expanded, setExpanded] = useState('')
  const [current, setCurrent] = useState('')

    return(
        <>
          {
            users_.map(user => {
            

              return(
                <UsersContainer key={user.id}>
                  <TopHalf>
                    <UsersTitle>
                      <h2>{user.name}</h2>
                      <Expander onClick={()=>{ 
                        
                        if(current === user.id){
                          setCurrent(null)
                          setExpanded(false)
                          return
                        }
                        setCurrent(user.id)
                        setExpanded(prev => !prev)

                      }}>
                        {current === user.id &&
                            expanded?
                              
                            <i className="fa fa-chevron-up" aria-hidden="true"></i> 
                              
                            :

                            <i className="fa fa-chevron-down" aria-hidden="true"></i>
                            
                        }
                      </Expander>
                    </UsersTitle>
                    <UsersInfo>
                      <h4>{user.company.name}</h4>
                      <p>{user.company.bs}</p>
                    </UsersInfo>
                  </TopHalf>
                  
                 
                      <BottomHalf   isClicked={current === user.id}>
                          {
                            posts_.map(post =>{
                              if(post.userId === current){
                                return(
                                  
                                  <Post key={post.id}>
                                    <p>{post.title}</p>
                                    <p>{post.body}</p>
                                  </Post>
                                  
                                  )
                                }
                                else{
                                  return null
                                }
                              })
                          }
                        </BottomHalf>
              

                </UsersContainer>
                )
            })
          }

            
        </>
    )
}

export default Users

