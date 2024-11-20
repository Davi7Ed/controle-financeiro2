// src/App.js
import React, { useState, useEffect } from 'react';
import GlobalStyle from './styles/global';
import Header from './styles/components/Header';
import Resume from './styles/components/Resume';
import Form from './styles/components/Form';
import BudgetForm from './styles/components/BudgetForm';
import Chart from './styles/components/Chart'; 

function App() {
  const data = localStorage.getItem("transactions");
  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  );
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const amountExpense = transactionsList
      .filter((item) => item.expense)
      .map((transaction) => Number(transaction.amount));

    const amountIncome = transactionsList
      .filter((item) => !item.expense)
      .map((transaction) => Number(transaction.amount));

    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0);
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0);
    const total = income - expense;

    
    setIncome(income.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }));
    setExpense(expense.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }));
    setTotal(total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }));
  }, [transactionsList]);

  
  const handleAdd = (transaction) => {
    const newTransactionsList = [...transactionsList, transaction];
    setTransactionsList(newTransactionsList);
    localStorage.setItem("transactions", JSON.stringify(newTransactionsList));
  };

  return (
    <>
      <Header />
      <Resume income={income} expense={expense} total={total} />
      <Form
        handleAdd={handleAdd}
        transactionsList={transactionsList}
        setTransactionsList={setTransactionsList}
      />
      <BudgetForm /> {/* Novo componente para o orçamento */}
      
      {/* Adicionando o componente Chart */}
      <Chart transactions={transactionsList} />
      
      <GlobalStyle />
    </>
  );
}

export default App;
