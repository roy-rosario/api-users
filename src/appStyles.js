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
    border-bottom: 2px solid white;
    padding-bottom: 0.5rem;
`

export const Expander = styled.div`
    i{
        color: white;
    }
`

export const TopHalf = styled.div`
    background-color: cadetblue;
    padding: 1rem;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    
`

export const BottomHalf = styled.div(props =>({
    backgroundColor : 'lightgrey',
    height: props.isClicked? 'clamp(600px, 700px, 850px)' : '0px',
    transition: 'height 0.5s ease',
    overflow: 'hidden',
    padding: props.isClicked? '1rem' : '0rem',
    borderBottomRightRadius: '5px',
    borderBottomLeftRadius: '5px',
    border: props.isClicked? '1px solid lightgrey' : 'none'
}))



export const UsersInfo = styled.div`
    color: white;
    padding-top: 0.5rem;
`

export const Post = styled.div`
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 0px 5px lightgrey;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
`