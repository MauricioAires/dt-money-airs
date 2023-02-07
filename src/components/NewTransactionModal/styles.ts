import styled, { css, DefaultTheme } from 'styled-components'

import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;

  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  ${({ theme }) => css`
    min-width: 32rem;
    border-radius: 6px;
    padding: 2.5rem 3rem;
    background: ${theme['gray-800']};

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    form {
      margin-top: 3rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      input {
        border-radius: 6px;
        border: 0;
        background: ${theme['gray-900']};

        color: ${theme['gray-300']};
        padding: 1rem;

        &::placeholder {
          color: ${theme['gray-500']};
        }
      }

      button[type='submit'] {
        height: 58px;
        background: ${theme['green-500']};
        color: ${theme.white};
        font-weight: bold;
        padding: 0 1.25rem;
        border-radius: 6px;

        margin-top: 1.5rem;

        &:disabled {
          filter: opacity(0.7);
          cursor: not-allowed;
        }

        &:not(:disabled):hover {
          background: ${theme['green-700']};
          transition: background-color 0.2s;
        }
      }
    }
  `}
`

export const CloseButton = styled(Dialog.Close)`
  ${({ theme }) => css`
    position: absolute;
    background: transparent;
    top: 1.5rem;
    right: 1.5rem;

    line-height: 0;

    color: ${theme['gray-300']};
  `}
`

export const TransactionType = styled(RadioGroup.RadioGroup)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`

interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome'
}

const modifiersTransactionTypeButton = {
  income: (theme: DefaultTheme) => css`
    svg {
      color: ${theme['green-300']};
    }

    &[data-state='checked'] {
      color: ${theme.white};
      background: ${theme['green-500']};

      svg {
        color: ${theme.white};
      }
    }
  `,
  outcome: (theme: DefaultTheme) => css`
    svg {
      color: ${theme['red-300']};
    }

    &[data-state='checked'] {
      color: ${theme.white};
      background: ${theme['red-500']};

      svg {
        color: ${theme.white};
      }
    }
  `,
}

export const TransactionTypeButton = styled(
  RadioGroup.Item,
)<TransactionTypeButtonProps>`
  ${({ theme, variant }) => css`
    background: ${theme['gray-700']};
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border-radius: 6px;

    color: ${theme['gray-100']};

    &[data-state='unchecked']:hover {
      transition: background-color 0.2s;
      background: ${theme['gray-600']};
    }

    ${!!variant && modifiersTransactionTypeButton[variant](theme)}
  `}
`
