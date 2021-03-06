import * as React from 'react';
import { ContextTransactionsType, Transactions } from '../types/transactions';

export const TransactionsContext = React.createContext<ContextTransactionsType | null>(null);

interface ProviderProps {
  children?: any
}

const TransactionsProvider: React.FC<ProviderProps> = ({children}) => {
  const [transactions, setTransactions] = React.useState<Transactions[]>();
  return (
    <TransactionsContext.Provider value={{ transactions, setTransactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
export default TransactionsProvider;