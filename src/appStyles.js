import styled from '@emotion/styled'

export const UsersContainer =  styled.div`
    width: 80%;
    margin: 0 auto;
`

export const UsersTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: baseline;
   
   
`

export const Expander = styled.div`
    
`

export const TopHalf = styled.div`
    background-color: cadetblue;
    padding: 1rem;
    box-shadow: 0px 0px 3px grey;

`

export const BottomHalf = styled.div(props =>({
    backgroundColor : 'white',
    height: props.isClicked? '400px' : '0px',
    transition: 'all 0.5s ease',
    overflow: 'hidden',
    boxShadow: '0px 0px 3px grey'
}))



export const UsersInfo = styled.div`

`