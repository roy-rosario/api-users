import {useState, useEffect} from 'react'


function BottomHalf({isClicked}){
    const [enabled, setEnabled] = useState(false)
    useEffect(()=>{
        setEnabled(isClicked)
    },[isClicked])
}