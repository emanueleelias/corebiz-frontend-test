import './input.scss';

const Input = ({ errors, values, touched, handleBlur, handleChange, placeholder, name }) => {

  return (

    <div className='input__container'>
        <input
            className={ `input__${errors && touched ? 'warning' : 'success'}` }
            placeholder={ placeholder }
            value={ values }
            onBlur={ handleBlur }
            onChange={ handleChange }
            name={ name }
        />
        { errors && touched && (
            <div className='text-red'>
                <small className="text-red-600">{ errors }</small>
            </div>
        )}
    </div>
    
  )
}

export default Input;