import React from "react";
import * as C from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from "react-icons/fa";

const GridItem = ({ item, onDelete }) => {
  const formattedAmount = Number(item.amount).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <C.Tr>
      <C.Td>{item.desc}</C.Td>
      <C.Td>{formattedAmount}</C.Td>
      <C.Td alignCenter>{item.date}</C.Td>
      <C.Td alignCenter>{item.time}</C.Td>
      <C.Td alignCenter>
        {item.file ? (
          <a href={item.file} target="_blank" rel="noopener noreferrer">
            Ver Anexo
          </a>
        ) : (
          "Nenhum anexo"
        )}
      </C.Td>
      <C.Td alignCenter>
        {item.expense ? (
          <FaRegArrowAltCircleDown color="red" aria-label="Saída" />
        ) : (
          <FaRegArrowAltCircleUp color="green" aria-label="Entrada" />
        )}
      </C.Td>
      <C.Td alignCenter>
        <FaTrash
          onClick={() => onDelete(item.id)}
          aria-label="Excluir transação"
          style={{ cursor: "pointer" }}
        />
      </C.Td>
    </C.Tr>
  );
};

export default GridItem;
