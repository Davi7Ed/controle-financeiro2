import styled from "styled-components";

export const Container = styled.div`
  height: 150px;
  background-color: teal;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;  // Centraliza o conteúdo verticalmente
  align-items: center;      // Centraliza o conteúdo horizontalmente
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);  // Adiciona sombra suave para profundidade
`;

export const Header = styled.h1`
  font-size: 2rem;           // Aumenta o tamanho da fonte
  color: #fff;
  margin: 0;                 // Remove a margem para centralização
`;

export const Title = styled.div`
  padding-top: 10px;         // Ajusta o espaço acima do título
  color: #fff;
  font-size: 1.5rem;         // Adiciona um tamanho de fonte mais agradável
  font-weight: 500;          // Adiciona um pouco mais de peso ao título secundário
  text-transform: uppercase; // Coloca o texto em maiúsculas
  letter-spacing: 1px;       // Aumenta o espaçamento entre as letras
`;
