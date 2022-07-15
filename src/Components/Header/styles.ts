import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 6.5rem;
  display: flex;
  justify-content: space-between;
  padding: 2rem 10rem;
  position: sticky;
  top: 0;
  background-color: ${(props) => props.theme.background};
`

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`

export const LocaleCard = styled.div`
  display: flex;
  height: 2.375rem;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
  fill: ${(props) => props.theme['purple-dark']};
  padding: 0.5rem;
  border-radius: 6px;
  gap: 0.25rem;

  img {
    height: 1.375rem;
    filter: ${(props) => props.theme['purple-dark-filter']};
  }
`

export const CartButton = styled.button`
  background-color: ${(props) => props.theme['yellow-light']};

  height: 2.375rem;
  width: 2.375;
  padding: 0.5rem;
  border-radius: 6px;
  border: none;

  img {
    height: 1.375rem;
    filter: ${(props) => props.theme['yellow-dark-filter']};
  }

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`
