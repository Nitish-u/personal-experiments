import React, { useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProtectedComp({Component}) {
    const navigate = useNavigate();
    useLayoutEffect(() => {
        const login = localStorage.getItem("login");
        if(!login){
            navigate("/");
        }
    })
  return (
    <Component/>
  )
}
