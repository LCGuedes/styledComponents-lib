import styled from "styled-components";
import PassingProps from "../../api/functions/PassingProps";
import InputTheme from "../../assets/Theme/base/components/Input";


 export const StyledInput = styled.input(props => PassingProps(props, InputTheme) );

