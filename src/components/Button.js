import PropTypes from 'prop-types'

// INSTEAD OF GETTING PROPS, PROPS OBJECT IS DESTRUCTURED. can select only certain props and leave others out.
const Button = ({ color, text, onClick }) => {

    return <button onClick={onClick} style={{ backgroundColor:color }}
    className='btn'>
        {text}
    </button>
}


Button.defaultProps = {
    color : 'black',
    text : 'Add'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button