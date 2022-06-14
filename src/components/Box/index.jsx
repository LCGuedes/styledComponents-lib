import styled from "styled-components";

const Box = styled.div`
    width: ${props => props.Width || "600px"};
    height: ${props => props.Height || "600px"};
    background-color: ${props => props.backgroundColor || "whitesmoke"};
    border-radius: ${props => props.borderRadius || "4px"};
    
    h1 {
        color:  ${props => props.fontColor || "red"};
    }

    h2 {
        color: blue;
    }

    h3 {
        color: yellow;
    }
`;

export default function BoxComponent({fontColor, Width, Height, backgroundColor, ...rest}) {

    console.log(rest.borderRadius)

    return (
        <Box fontColor={fontColor} Width={Width} Height={Height} backgroundColor={backgroundColor} etc={rest}>
            <h1>teste</h1>
            <h2>teste 2</h2>
            <h3>teste 3</h3>
        </Box>
    )
}