import React, { useContext } from 'react'
import context from './context'

function CompTwo() {
    const theme = useContext(context);
  return (
    <div className={theme ? "dark" : "light"}>CompTwo</div>
  )
}

export default CompTwo