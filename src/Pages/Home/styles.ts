import styled from 'styled-components'
import backgroundImg from '../../assets/background-items.svg'

export const BackgroundIntroContainer = styled.div`
  background: url(${backgroundImg});
  width: 100%;
  min-height: 34rem;
`
export const IntroContainer = styled.div`
  width: 65rem;
  margin: 0 auto;
  display: flex;
  margin-top: 5.875rem;
`
export const IntroContentContainer = styled.div`
  width: 36.75rem;
`
export const Title = styled.h1`
  font-family: 'Baloo 2', cursive;
  font-size: 3rem;
  font-weight: 800;
  line-height: 3.9rem;
  color: ${(props) => props.theme['base-title']};
  margin-bottom: 1rem;
`
export const Subtitle = styled.h2`
  font-size: 1.25rem;
  line-height: 1.625rem;
  font-weight: 400;
  color: ${(props) => props.theme['base-subtitle']};
`
export const ItemsContainer = styled.div`
  margin-top: 4.12rem;
  display: flex;
  height: 5.25rem;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;
  flex-flow: row wrap;
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;

  span {
    margin-right: 3rem;
  }
`

const ITEM_COLORS = {
  'yellow-dark': 'yellow-dark',
  yellow: 'yellow',
  'base-text': 'base-text',
  purple: 'purple',
} as const

interface ItemColorProps {
  itemColor: keyof typeof ITEM_COLORS
}

export const ItemIconImage = styled.div<ItemColorProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  width: 2rem;
  background-color: ${(props) => props.theme[ITEM_COLORS[props.itemColor]]};
  border-radius: 50%;

  img {
    height: 1rem;
    filter: ${(props) => props.theme['white-filter']};
  }
`

export const IntroImage = styled.img`
  width: 28.12rem;
  padding-left: 1.5rem;
`
