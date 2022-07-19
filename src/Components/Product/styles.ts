import styled from 'styled-components'

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme['base-card']};
  width: 16rem;
  border-radius: 6px 36px;
  padding: 1.25rem;
`

export const ProductImage = styled.img`
  margin-top: -2.5rem;
`

export const TagContainer = styled.div`
  margin-top: 1rem;
  span {
    font-size: 0.625rem;
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    font-weight: 700;
    padding: 4px 8px;
    border-radius: 100px;
    margin-left: 4px;
  }
`

export const ProductTitle = styled.h3`
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};
  margin-top: 1rem;
`

export const ProductDescription = styled.p`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-label']};
  margin-top: 0.5rem;
  text-align: center;
`
export const ProductFooter = styled.footer`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
`

export const ProductPrice = styled.div`
  font-size: 0.875rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-text']};

  strong {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 130%;
    margin: 0 0.25rem;
  }
`

export const ProductAction = styled.div`
  display: flex;
`

export const QuantityButton = styled.div`
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  margin-right: 0.5rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;

    svg {
      display: flex;
      color: ${(props) => props.theme.purple};
      align-items: center;
    }
  }

  span {
    color: ${(props) => props.theme['base-title']};
    margin: 0 0.5rem;
  }
`

export const AddToCartButton = styled.button`
  background-color: ${(props) => props.theme.purple};
  padding: 0.5rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  img {
    display: flex;
    height: 22px;
  }
`
