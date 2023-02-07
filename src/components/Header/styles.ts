import styled, { css } from 'styled-components'

export const HeaderWrapper = styled.header`
  ${({ theme }) => css`
    background: ${theme['gray-900']};
    padding: 2.5rem 0 7.5rem;
  `}
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NewTransactionButton = styled.button`
  ${({ theme }) => css`
    height: 50px;
    background: ${theme['green-500']};
    color: ${theme.white};
    font-weight: bold;
    padding: 0 1.25rem;
    border-radius: 6px;

    &:hover {
      background: ${theme['green-700']};

      transition: background-color 0.2s;
    }
  `}
`
