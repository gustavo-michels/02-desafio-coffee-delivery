import { CartButton, HeaderContainer, LocaleCard, NavContainer } from './styles'
import logoImg from '../../assets/logo-coffee-delivery.svg'
import mapPinIcon from '../../assets/icons/map-pin-fill.svg'
import shoppingCartIcon from '../../assets/icons/shopping-cart-fill.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoImg} alt="" />
      <NavContainer>
        <LocaleCard>
          <img src={mapPinIcon} alt="" />

          <span>Porto Alegre, RS</span>
        </LocaleCard>
        <CartButton>
          <img src={shoppingCartIcon} alt="" />
        </CartButton>
      </NavContainer>
    </HeaderContainer>
  )
}
