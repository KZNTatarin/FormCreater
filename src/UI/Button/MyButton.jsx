import './MyButton.css'

export default function MyButton({onClick, children, style}) {
    return (
        <button style={style} className="my-btn" onClick={onClick}>{children}</button>
    )
}