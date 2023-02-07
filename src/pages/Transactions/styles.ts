import styled, { css, DefaultTheme } from 'styled-components'

export const TransactionsWrapper = styled.div``

export const TransactionsContent = styled.main`
  width: 100%;
  max-width: 1220px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

export const TransactionsTable = styled.table`
  ${({ theme }) => css`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    margin-top: 1.5rem;

    td {
      padding: 1.25rem 2rem;
      background: ${theme['gray-700']};

      &:first-child {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
      }

      &:last-child {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
      }
    }
  `}
`

interface PriceHighlightProps {
  variant?: 'income' | 'outcome'
}

const modifiersPriceHighlight = {
  income: (theme: DefaultTheme) => css`
    color: ${theme['green-300']};
  `,
  outcome: (theme: DefaultTheme) => css`
    color: ${theme['red-300']};
  `,
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  ${({ theme, variant = 'income' }) => css`
    ${!!variant && modifiersPriceHighlight[variant](theme)}
  `}
`
