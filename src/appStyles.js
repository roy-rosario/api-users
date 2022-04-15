import styled from '@emotion/styled'

export const UsersContainer =  styled.div`
    width: 80%;
    margin: 0 auto;
`

export const UsersTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: center;
   
   
`

export const Expander = styled.div`
    
`

export const TopHalf = styled.div`
    background-color: cadetblue;
    padding: 1rem;

`

export const BottomHalf = styled.div(props =>({
    backgroundColor : 'magenta',
    height: props.isClicked? '400px' : '0px',
    transition: 'all 0.5s ease'
}))



export const UsersInfo = styled.div`

`