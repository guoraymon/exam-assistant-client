import styled from "styled-components";
import defaultTheme, {colorType} from "../defaultTheme";

interface TagProps {
    color?: colorType,
}

const Tag = styled.span<TagProps>`
  padding: 0 12px;
  font-size: ${defaultTheme.fontSize.md};
  line-height: ${defaultTheme.lineHeight.md};
  border-radius: 12px;
  color: ${props => defaultTheme.color[props.color || 'gray'][6]};
  background-color: ${props => defaultTheme.color[props.color || 'gray'][1]};
`

export default Tag;