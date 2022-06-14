import styled from "styled-components";

const H1 = styled.h1`
    color: ${props => props.fontColor || "black"};
`

export default function PageMobile({test, fontColor}) {

    console.log(test)

    return (
        <H1 fontColor={fontColor}>mobile</H1>
    )
}