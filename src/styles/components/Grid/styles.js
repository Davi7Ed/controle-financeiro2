import styled from "styled-components";

// Contêiner da Tabela com barra de rolagem
export const TableContainer = styled.div`
  max-height: 400px;
  overflow-y: auto;
  margin: 20px auto;
  width: 98%;
  max-width: 1120px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

// Estilos para a Tabela
export const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 10px;
  border-spacing: 0;
  border-radius: 8px;
`;

// Cabeçalho da Tabela
export const Thead = styled.thead`
  background-color: #f3f4f6; // Cinza claro para o fundo do cabeçalho
`;

// Corpo da Tabela
export const Tbody = styled.tbody`
  tr:nth-child(even) {
    background-color: #fafafa; // Cor de fundo alternada para as linhas pares
  }
`;

// Linha da Tabela
export const Tr = styled.tr`
  &:hover {
    background-color: #eaeaea; // Fundo ao passar o mouse
    cursor: pointer;
  }
`;

// Cabeçalho da Coluna
export const Th = styled.th`
  padding: 15px 10px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  font-weight: bold;
  color: #333;
  font-size: 1rem;
  border-bottom: 2px solid #e0e0e0;
  width: ${(props) => (props.width ? props.width + "%" : "auto")};
`;

// Células da Tabela
export const Td = styled.td`
  padding: 12px 10px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  color: #555;
  font-size: 0.95rem;
  border-bottom: 1px solid #e0e0e0;

  &:last-child {
    text-align: center;
  }
`;
