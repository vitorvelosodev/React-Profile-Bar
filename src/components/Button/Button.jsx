export function Button(props) {
    return (
        <a style={{backgroundColor: props.bg, color: props.fontColor}} href={props.url}>
            <img src={props.icon} alt="" />
            {props.children}
        </a>
    )
}

// { children, bg, fontColor, icon }