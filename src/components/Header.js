//type rafce for arrow function with extension\
import { useLocation } from 'react-router-dom'
//to know the current location of the page
//type impt to import proptypes

import React from 'react'
import PropTypes from 'prop-types';
import Button from './Button'

const Header = ({ title , onAdd , showAdd}) => {
    const location = useLocation()
    return (
       <header className='header'>
           <h1>{title}</h1>
           {/* adding props to button */}
           {location.pathname === '/' &&  
           <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick = {onAdd}/>}
       </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker",
}

Header.prototype = {
     title : PropTypes.string.isRequired
}


// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

export default Header
