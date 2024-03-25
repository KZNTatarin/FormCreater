import './MyInput.css'

export default function MyInput({type, value, onChange, style}) {
    return(
    <input className="my-input" style={style} type={type} value={value} onChange={onChange} />
    )
}