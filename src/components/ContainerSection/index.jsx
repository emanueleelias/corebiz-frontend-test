import React from 'react'
import "./containerSection.scss";

const ContainerSection = ({children}) => {
  return (
    <div className="container">
        {children}
    </div>
  )
}

export default ContainerSection