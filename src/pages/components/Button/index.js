import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'


const Button = ({children, isMethod, wrapper, className = 'btn', containerClassName = "container-button"}) => {
    return (
        <>
            <div className={containerClassName}> 
                {
                    (isMethod) ? 
                      <a href="javascript:void(0)" onClick={wrapper}  className={className}>{children}</a>
                      : <Link className="btn" to={wrapper}> {children} </Link>
                }
            </div>  
        </>
    )
}

export default Button