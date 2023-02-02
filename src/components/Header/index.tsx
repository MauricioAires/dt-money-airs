import logoImg from '../../assets/logo.svg'

import * as S from './styles'

export function Header() {
  return (
    <S.HeaderWrapper>
      <S.HeaderContent>
        <img src={logoImg} alt="" />
        <S.NewTransactionButton>Nova Transação</S.NewTransactionButton>
      </S.HeaderContent>
    </S.HeaderWrapper>
  )
}
