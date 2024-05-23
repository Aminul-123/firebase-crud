import React, { useContext } from 'react'
import context from './context'


function CompThree() {
    const theme = useContext(context);
  return (
    <div className={theme? "dark" : "light"}>CompThree</div>
  )
}

export default CompThree