export function Button({ children, bg, fontColor, icon}) {
    return (
        <button style={{backgroundColor: bg, color: fontColor}}>
            <img src={icon} alt="" />
            {children}
        </button>
    )
}