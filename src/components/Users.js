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
  const [expanded, setExpanded] = useState(false)

    return(
        users_.map(user => {
            return(
              <UsersContainer key={user.id}>
                <TopHalf>
                  <UsersTitle>
                    <h2>{user.name}</h2>
                    <Expander onClick={()=>{setExpanded(prev => !prev)}}>
                      {expanded? 
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
                <BottomHalf pre={'blah'} isClicked={expanded} onClick={(props)=>{console.log(props)}} >
                </BottomHalf>
              </UsersContainer>
              )
          })
    )
}

export default Users

