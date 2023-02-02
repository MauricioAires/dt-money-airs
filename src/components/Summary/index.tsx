import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'

import * as S from './styles'

export function Summary() {
  return (
    <S.SummaryWrapper>
      <S.SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>R$ 17.400,00</strong>
      </S.SummaryCard>
      <S.SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>R$ 17.400,00</strong>
      </S.SummaryCard>
      <S.SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>
        <strong>R$ 17.400,00</strong>
      </S.SummaryCard>
    </S.SummaryWrapper>
  )
}
