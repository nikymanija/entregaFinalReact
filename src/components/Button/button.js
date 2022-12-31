const Button = (props)=>{
    const {colorText,backgroundText,children} = props
    return <button onClick={props.accion} style={{color:colorText,background:backgroundText}}> {children} </button>

}

export default Button