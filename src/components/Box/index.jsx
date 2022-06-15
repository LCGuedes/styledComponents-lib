import styled from "styled-components";


const PassingProps = (props,...rest) => {

    //console.log(rest)

    return {
        background: props.background,
        height: props.height,
        width: props.width
    };
};

const Box = styled.div(props => PassingProps(props))

export default function BoxComponent({...rest}) {

    return (
        <Box background="green" width="300px" height="500px">
            <h1>teste</h1>
            <h2>teste 2</h2>
            <h3>teste 3</h3>
        </Box>
    )
}