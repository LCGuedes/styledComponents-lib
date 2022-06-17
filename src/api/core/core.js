import SwapProps from "../functions/SwapProps";
 
const CssProperties = (props, defaultProps) => {

    let cssProperties = {
        background: props.styles.background,
         height: props.styles.height,
        width: props.styles.width,
        borderRadius: props.styles.borderRadius,
        marginLeft: props.styles.marginLeft, 
        opacity: props.styles.opacity,
        fontSize: props.styles.fontSize,
        color: props.styles.color
    };

    if(defaultProps) {
        return SwapProps(cssProperties, defaultProps);
    } else {
        return defaultObj;
    };

};

export default CssProperties;
