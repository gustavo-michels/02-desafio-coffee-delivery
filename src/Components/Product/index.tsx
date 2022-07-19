import { Minus, Plus } from 'phosphor-react'
import {
  AddToCartButton,
  ProductAction,
  ProductContainer,
  ProductDescription,
  ProductFooter,
  ProductImage,
  ProductPrice,
  ProductTitle,
  QuantityButton,
  TagContainer,
} from './styles'

import shoppingCart from '../../assets/icons/shopping-cart-fill.svg'

export interface ProductType {
  id: string
  title: string
  description: string
  tags: string[]
  price: number
  priceText: string
  imgUrl: string
}

export function Product({
  title,
  description,
  tags,
  price,
  priceText,
  imgUrl,
}: ProductType) {
  return (
    <ProductContainer>
      <ProductImage src={'/coffees/' + imgUrl} alt="" />
      <TagContainer>
        {tags.map((tag) => {
          return <span key={tag}>{tag}</span>
        })}
      </TagContainer>
      <ProductTitle>{title}</ProductTitle>
      <ProductDescription>{description}</ProductDescription>
      <ProductFooter>
        <ProductPrice>
          <span>R$</span>
          <strong>{priceText}</strong>
        </ProductPrice>
        <ProductAction>
          <QuantityButton>
            <button>
              <Minus />
            </button>
            <span>1</span>
            <button>
              <Plus />
            </button>
          </QuantityButton>
          <AddToCartButton>
            <img src={shoppingCart} alt="" />
          </AddToCartButton>
        </ProductAction>
      </ProductFooter>
    </ProductContainer>
  )
}
