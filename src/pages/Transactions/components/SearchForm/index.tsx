import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useContextSelector } from 'use-context-selector'

import { TransactionContext } from '../../../../context/TransactionsContext'

import * as S from './styles'
import { memo } from 'react'

/**
 * Por que um component redenriza?
 *
 * - Hooks change (useState, context, reducer)
 * - Parent change (mudou propriedade)
 * - Props change (componente pai renderizou)
 *
 * Qual o fluxo de renderização
 * 1. O React recria o HTML da intreface daquele componente
 * 2. Compara a versao do HTML recriada com a versão anterior
 * 3. SE mudou alguma coisa, ele reescreve o HTML na tela
 *
 * Memo:
 * 0. Hooks changed, Props changed (deep comparision)
 * 0.1: Comparar a versão anteriror dos hooks e props
 * 0.2: SE mudou algo, ele vai permitir a nova renderização
 */

const searchFormSchema = zod.object({
  query: zod.string(),
})

type SearchFormInputs = zod.infer<typeof searchFormSchema>

function SearchFormComponent() {
  const fetchTransactions = useContextSelector(
    TransactionContext,
    (context) => {
      return context.fetchTransactions
    },
  )

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query)
  }

  return (
    <S.SearchFormWrapper onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} weight="bold" />
        Buscar
      </button>
    </S.SearchFormWrapper>
  )
}

export const SearchForm = memo(SearchFormComponent)
