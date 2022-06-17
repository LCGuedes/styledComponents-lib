import styled from "styled-components";
import PassingProps from "../../api/functions/PassingProps";

const defaultTheme = {
    background: "#01599a",
    opacity: 0.8,
    color: "#fff",
    fontSize: "40px"
};

 export const StyledContainer = styled.div(
    props => PassingProps(
        props, defaultTheme
    )
);  
