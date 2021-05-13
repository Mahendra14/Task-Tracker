//type rafce for arrow function with extension\

//type impt to import proptypes

import React from 'react'
import PropTypes from 'prop-types';
import Button from './Button'

const Header = ({ title , onAdd , showAdd}) => {
    
    return (
       <header className='header'>
           <h1>{title}</h1>
           {/* adding props to button */}
           <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick = {onAdd}/>
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
