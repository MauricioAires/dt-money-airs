import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'

import * as S from './styles'

export function Transactions() {
  return (
    <S.TransactionsWrapper>
      <Header />
      <Summary />
    </S.TransactionsWrapper>
  )
}
