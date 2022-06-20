import SwapProps from "../functions/SwapProps";
 
const CssProperties = (props, defaultProps) => {

    let cssProperties = {
        background: props.styles.background,
        height: props.styles.height,
        width: props.styles.width,
        border: props.styles.border,
        outline: props.styles.outline,
        borderBottom: props.styles.borderBottom,
        borderRadius: props.styles.borderRadius,

        padding: props.styles.padding,
        paddingTop: props.styles.paddingTop,
        
        marginLeft: props.styles.marginLeft, 
        opacity: props.styles.opacity,
        fontSize: props.styles.fontSize,
        color: props.styles.color
    };

    if(defaultProps) {
        return SwapProps(cssProperties, defaultProps);
    } else {
        return cssProperties;
    };

};

export default CssProperties;
