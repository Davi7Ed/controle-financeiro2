// src/components/Summary.js
import React from "react";
import * as C from "./styles"; // Estilos para o componente Summary

const Summary = ({ income, expense }) => {
  // Calcula o saldo total
  const total = income - expense;

  return (
    <C.Container>
      <C.Box>
        <C.Label>Entrada</C.Label>
        <C.Value>
          {income.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
        </C.Value>
      </C.Box>
      <C.Box>
        <C.Label>Saída</C.Label>
        <C.Value>
          {expense.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
        </C.Value>
      </C.Box>
      <C.Box>
        <C.Label>Total</C.Label>
        <C.Value>
          {total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
        </C.Value>
      </C.Box>
    </C.Container>
  );
};

export default Summary;
