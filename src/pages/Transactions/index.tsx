import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'

import * as S from './styles'

export function Transactions() {
  return (
    <S.TransactionsWrapper>
      <Header />
      <Summary />

      <S.TransactionsContent>
        <SearchForm />
        <S.TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <S.PriceHighlight>R$ 12.000,00</S.PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2023</td>
            </tr>
            <tr>
              <td width="50%">Hamburguer</td>
              <td>
                <S.PriceHighlight variant="outcome">
                  -R$ 12.000,00
                </S.PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>10/04/2023</td>
            </tr>
          </tbody>
        </S.TransactionsTable>
      </S.TransactionsContent>
    </S.TransactionsWrapper>
  )
}
