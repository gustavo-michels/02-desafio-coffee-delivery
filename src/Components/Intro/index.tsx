import {
  BackgroundIntroContainer,
  IntroContainer,
  IntroContentContainer,
  IntroImage,
  Item,
  ItemIconImage,
  ItemsContainer,
  Subtitle,
  Title,
} from './styles'

import coffeeImage from '../../assets/coffee-image.svg'

import shoppingCartImg from '../../assets/icons/shopping-cart-fill.svg'
import timerImg from '../../assets/icons/timer-fill.svg'
import packageCartImg from '../../assets/icons/package-fill.svg'
import coffeeImg from '../../assets/icons/coffee-fill.svg'

export function Intro() {
  return (
    <BackgroundIntroContainer>
      <IntroContainer>
        <IntroContentContainer>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <Subtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </Subtitle>
          <ItemsContainer>
            <Item>
              <ItemIconImage itemColor="yellow-dark">
                <img src={shoppingCartImg} alt="" />
              </ItemIconImage>
              <span>Compra simples e segura&nbsp;</span>
            </Item>
            <Item>
              <ItemIconImage itemColor="base-text">
                <img src={packageCartImg} alt="" />
              </ItemIconImage>
              <span>Embalagem mantém o café intacto</span>
            </Item>
            <Item>
              <ItemIconImage itemColor="yellow">
                <img src={timerImg} alt="" />
              </ItemIconImage>
              <span>Entrega rápida e rastreada</span>
            </Item>

            <Item>
              <ItemIconImage itemColor="purple">
                <img src={coffeeImg} alt="" />
              </ItemIconImage>
              <span>O café chega fresquinho até você</span>
            </Item>
          </ItemsContainer>
        </IntroContentContainer>
        <IntroImage src={coffeeImage} alt="" />
      </IntroContainer>
    </BackgroundIntroContainer>
  )
}
