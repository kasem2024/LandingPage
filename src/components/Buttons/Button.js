import './Button.css'

const Button = (props) => {
  return (
    <button className='ButtonPrimary'>
  <span className="transition"></span>
  <span className="gradient"></span>
  <span className="label">{props.children}</span>
</button>

  )
}

const ButtonSecondry =(props)=>{
    return(
        <button className='ButtonSecondry'> 
            <span className='spanSecondry'>{props.children}</span>
        </button>
    )
}

export default Button
export { ButtonSecondry }