
/* se theme existir, verificar todas as propriedades, se igual as propriedades existentes, sobreescrever elas*/

export default function Obj(props, defaultProps) {

    //console.log("obj", defaultProps)

    let defaultObj = {
        background: props.styles.background,
        height: props.styles.height,
        width: props.styles.width,
        borderRadius: props.styles.radius,
        marginLeft: props.styles.marginLeft,
        opacity: props.styles.opacity,
        fontSize: props.styles.fontSize,
        color: props.styles.color
    }

    if(defaultProps) {
        console.log(defaultProps)
    } else {
        console.log("nao")
    }

    return defaultObj;

};