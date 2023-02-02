import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'

import * as S from './styles'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <S.Overlay />
      <S.Content>
        <Dialog.Title>Nova transação</Dialog.Title>
        <S.CloseButton>
          <X weight="bold" size={24} />
        </S.CloseButton>

        <form>
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />

          <S.TransactionType>
            <S.TransactionTypeButton
              value="income"
              variant="income"
              type="button"
            >
              <ArrowCircleUp weight="bold" size={24} />
              Entrada
            </S.TransactionTypeButton>
            <S.TransactionTypeButton
              value="outcome"
              variant="outcome"
              type="button"
            >
              <ArrowCircleDown weight="bold" size={24} />
              Saída
            </S.TransactionTypeButton>
          </S.TransactionType>

          <button type="submit">Cadastrar</button>
        </form>
      </S.Content>
    </Dialog.Portal>
  )
}
