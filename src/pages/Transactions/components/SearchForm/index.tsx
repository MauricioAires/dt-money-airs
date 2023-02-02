import { MagnifyingGlass } from 'phosphor-react'
import * as S from './styles'

export function SearchForm() {
  return (
    <S.SearchFormWrapper>
      <input type="text" placeholder="Busque por transações" />
      <button type="submit">
        <MagnifyingGlass size={20} weight="bold" />
        Buscar
      </button>
    </S.SearchFormWrapper>
  )
}
