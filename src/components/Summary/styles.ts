import styled, { css, DefaultTheme } from 'styled-components'

export const SummaryWrapper = styled.section`
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;
`

interface SummaryCardProps {
  variant?: 'green'
}

const modifiersSummaryCard = {
  green: (theme: DefaultTheme) => css`
    background: ${theme['green-700']};
  `
}

export const SummaryCard = styled.div<SummaryCardProps>`
  ${({ theme, variant }) => css`
    background: ${theme['gray-600']};
    border-radius: 6px;
    padding: 2rem;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: ${theme['gray-300']};
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
    }

    ${!!variant && modifiersSummaryCard[variant](theme)}
  `}
`
