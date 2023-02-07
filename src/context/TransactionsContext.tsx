import React, { useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

import data from '../../server.json'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface CreateTransactionInput {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}
interface TransactionContextType {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionInput) => Promise<void>
}

export const TransactionContext = createContext({} as TransactionContextType)

interface TransactionsProviderProps {
  children: React.ReactNode
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    if (data) {
      return data.transactions as Transaction[]
    }

    return []
  })

  const fetchTransactions = useCallback(
    async (query?: string) => {
      const response = await api.get('/transactions', {
        params: {
          _sort: 'createdAt',
          _order: 'desc',
          q: query,
        },
      })

      setTransactions(response.data)
    },
    [setTransactions],
  )

  const createTransaction = useCallback(
    async (data: CreateTransactionInput) => {
      const { category, description, price, type } = data

      const response = await api.post('/transactions', {
        description,
        price,
        category,
        type,
        createdAt: new Date().toISOString(),
      })

      setTransactions((state) => [response.data, ...state])
    },
    [],
  )

  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions])

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
