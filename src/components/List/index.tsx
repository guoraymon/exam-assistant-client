import styled from "styled-components";

const List = styled.div`
  display: flex;
  flex-direction: column;
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