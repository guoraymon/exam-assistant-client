import styled from "styled-components";
import defaultTheme, {colorType} from "../defaultTheme";

interface TextProps {
    color?: colorType,
}

const Text = styled.span<TextProps>`
  color: ${props => props.color ? defaultTheme.color[props.color][5] : 'black'};
`

export default Text;