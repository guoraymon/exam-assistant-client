import styled from "styled-components";
import {ReactNode} from "react";
import defaultTheme, {colorType} from "../defaultTheme";

const buttonTheme = {
    size: {
        md: {
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            lineHeight: '1.5rem',
        },
        lg: {
            padding: '0.75rem 2rem',
            fontSize: '1.25rem',
            lineHeight: '1.75rem',
        }
    }
}

interface ButtonBaseProps {
    color?: colorType,
    size?: 'md' | 'lg';
}

const ButtonBase = styled.button<ButtonBaseProps>`
  padding: ${props => buttonTheme.size[props.size || 'md'].padding};
  font-size: ${props => buttonTheme.size[props.size || 'md'].fontSize};
  line-height: ${props => buttonTheme.size[props.size || 'md'].lineHeight};
  outline: none;
  border: none;
  border-radius: 100px;
  color: black;
  background-color: ${props => defaultTheme.color[props.color || 'gray'][2]};
  cursor: pointer;
  transition: all 0.2s ease-in-out 0s;
  -webkit-tap-highlight-color: transparent;

  :focus {
    outline: none;
  }

  :disabled {
    background-color: ${props => defaultTheme.color[props.color || 'gray'][1]};
    cursor: not-allowed;
  }

  :hover:enabled {
    box-shadow: rgb(0 0 0 / 20%) 0 2px 4px;
  }
`

interface ButtonProps extends ButtonBaseProps {
    children: ReactNode,
    disabled?: boolean,
    onClick?: () => void,
}

const Button = (props: ButtonProps) => {
    const {children, onClick} = props

    const handleClick = () => {
        onClick?.()
    }

    return (
        <ButtonBase {...props} onClick={handleClick}>{children}</ButtonBase>
    )
}

Button.defaultProps = {
    size: 'md',
};

export default Button;