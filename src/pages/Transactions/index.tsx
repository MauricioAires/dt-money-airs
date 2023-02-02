import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { useTransactions } from '../../context/TransactionsContext'
import { SearchForm } from './components/SearchForm'

import * as S from './styles'

export function Transactions() {
  const { transactions } = useTransactions()

  return (
    <S.TransactionsWrapper>
      <Header />
      <Summary />

      <S.TransactionsContent>
        <SearchForm />
        <S.TransactionsTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <S.PriceHighlight variant={transaction.type}>
                    {transaction.price}
                  </S.PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </S.TransactionsTable>
      </S.TransactionsContent>
    </S.TransactionsWrapper>
  )
}
