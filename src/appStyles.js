import styled from '@emotion/styled'

export const UsersContainer =  styled.div`
    width: 80%;
    margin: 0 auto;
    margin-bottom: 1rem;
`

export const UsersTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: baseline;
    color: white;
   
`

export const Expander = styled.div`
    i{
        color: white;
    }
`

export const TopHalf = styled.div`
    background-color: cadetblue;
    padding: 1rem;
    box-shadow: 0px 0px 7px grey;

`

export const BottomHalf = styled.div(props =>({
    backgroundColor : 'white',
    height: props.isClicked? '400px' : '0px',
    transition: 'all 0.5s ease',
    overflow: 'hidden',
    boxShadow: '0px 0px 7px grey',
    padding: props.isClicked? '1rem' : '0rem',
}))



export const UsersInfo = styled.div`

`