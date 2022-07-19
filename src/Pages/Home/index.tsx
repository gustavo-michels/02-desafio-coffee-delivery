import { Intro } from '../../Components/Intro'
import { Main, ProductsList, Title } from './styles'

import { Product, ProductType } from '../../Components/Product'
import { initialProducts } from '../../Components/Product/initialProducts'
import { useState } from 'react'

export function Home() {
  const [products] = useState<ProductType[]>(initialProducts)
  return (
    <>
      <Intro />
      <Main>
        <Title>Nossos cafés</Title>
        <ProductsList>
          {products.map((product) => {
            return (
              <Product
                key={product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                tags={product.tags}
                price={product.price}
                priceText={product.priceText}
                imgUrl={product.imgUrl}
              />
            )
          })}
        </ProductsList>
      </Main>
    </>
  )
}
