import styled from '@emotion/styled'

export const PageTitle = styled.h1`
    font-family: 'Raleway', sans-serif;
    display: block;
    text-align: center;
    color: white;
    margin: 2rem auto;
    text-transform: uppercase;
    border: 5px solid white;
    border-radius: 10px;
    padding: 1rem;
    width: 80%;

    @media (min-width:900px){
        width: 50%;
        margin: 4rem auto;
        font-size: 3rem;
    }
`



export const UsersContainer =  styled.div`
    width: 80%;
    margin: 0 auto;
    margin-bottom: 2rem;
    font-family: 'Roboto', sans-serif;
    @media (min-width:900px){
        width: 50%;
        font-size: 1.3rem;
    }
`

export const UsersTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: baseline;
    color: white;
    border-bottom: 2px solid white;
    padding-bottom: 0.5rem;
    h2{
        font-family: 'Raleway', sans-serif;
    }
    @media (min-width:900px){
        padding-bottom: 1rem;
    }
`

export const Expander = styled.div`
    i{
        color: white;
    }
`

export const TopHalf = styled.div`
    background-color: cadetblue;
    padding: 1rem;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    @media (min-width:900px){
        padding: 2rem;
    }
    
`

export const BottomHalf = styled.div(props =>({
    backgroundColor : 'lightgrey',
    height: props.isClicked? '500px' : '0px',
    transition: 'height 0.5s ease',
    overflow: 'hidden',
    padding: props.isClicked? '1rem' : '0rem',
    borderBottomRightRadius: '10px',
    borderBottomLeftRadius: '10px',
    border: props.isClicked? '1px solid lightgrey' : 'none',
    overflowY: "scroll"
}))



export const UsersInfo = styled.div`
    color: white;
    padding-top: 0.5rem;

    @media (min-width:900px){
        padding-top: 0.5rem;
    }    
`

export const Post = styled.div`
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 0px 5px lightgrey;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    p:first-of-type{
        border-bottom: 1px solid lightgrey;
        text-transform: uppercase;   
        font-weight: 400;
        padding: 0.5rem;
    }
    p:last-of-type{
        padding: 0.5rem;
        margin: 0.75rem auto;
    }
`