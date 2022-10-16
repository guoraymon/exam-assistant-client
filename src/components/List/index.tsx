import styled from "styled-components";

interface ListProps {
    direction?: 'column' | 'row'
}

const List = styled.div<ListProps>`
  display: flex;
  flex-direction: ${props => props.direction || 'column'};
  gap: 1rem;
`

const ListItem = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-start;
  align-items: center;
`

const ListIcon = styled.div`
`

const ListText = styled.div`
  flex: 1;
`

export {
    List, ListItem, ListIcon, ListText
}

export default List;