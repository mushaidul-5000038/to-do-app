import PropTypes from 'prop-types' 

const Button = ({color,text,onClick}) => {
    return(
        
        <button onClick = {onClick} style={{backgroundColor:color}}className='btn'>{text}</button>
    
    )
}

Button.defaultProps={
    color: 'red',
    text: 'Add',
}

Button.propType={
    color: PropTypes.string,
    text:  PropTypes.string,
    itIsClicked: PropTypes.func.isRequired,    
}

export default Button