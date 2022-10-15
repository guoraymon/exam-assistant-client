import styled from "styled-components";

interface ContainerType {
    justifyContent?: string,
}

const Container = styled.div<ContainerType>`
  box-sizing: border-box;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
  justify-content: ${props => props.justifyContent || 'flex-start'};
`

export default Container;