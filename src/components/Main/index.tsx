import * as S from './styles'

const Main = ({
  name = 'Hello, i’m',
  description = 'Mr. Hemã' ,
  meta = ' DEVELOPER FRONT-END | UX/UI DESIGNER | FREELANCER'

}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/Man2.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    /> 
    <S.Texts> 
    <S.Title>{name}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Meta>{meta}</S.Meta>
    </S.Texts>
  
  </S.Wrapper>
)

export default Main
