import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Comp1() {
  const data = useLocation()
  console.log(data);
  return (
    <div>comp1</div>
  )
}
