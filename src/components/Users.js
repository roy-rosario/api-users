import {
    UsersContainer,
    UsersTitle,
    Expander,
    TopHalf,
    BottomHalf,
    UsersInfo
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
                  
                 
                      <BottomHalf  isClicked={current === user.id}>
                          {
                            posts_.map(post =>{
                              if(post.userId === current){
                                return(
                                  
                                  <div key={post.id}>
                                  <p>{post.title}</p>
                                  </div>
                                  
                                  )
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

