import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'
// Uppercase for name convention.
// NO NEED TO IMPORT REACT

// CAN ALSO DESTRUCTURE PROPS BY ASKING FOR SPECIFIC PROP.
//  const Header = ({ title })
//  <h1>{ title }</h1>. NO NEED TO SPECIFY PROPS.TITLE
const Header = ({title, onAdd, showAdd}) => {
    const location = useLocation()

    return (
        <header className='header'>
            <h1>{ title }</h1>
            {location.pathname === '/' && 
                <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'close' : 'add'} onClick={onAdd}/>
            }
            
        </header>
    )
}

// IF NO PROPS ARE PASSED, import default props.
Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    // catch errors before they happen. More robust code.
    //  makes sure that the correct input is given.
    title: PropTypes.string.isRequired,
}

export default Header