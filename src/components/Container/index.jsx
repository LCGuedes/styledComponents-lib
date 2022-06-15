import { StyledContainer } from "./styles";

export default function Container({children,...styles}) {

    return (
        <StyledContainer styles={styles}>
            {children}
        </StyledContainer>
    )
}
