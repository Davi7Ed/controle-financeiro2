import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 20px auto;
  width: 98%;
  background-color: #fff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
  gap: 10px;

  @media (max-width: 750px) {
    display: grid;
    gap: 15px;
    padding: 15px;
  }
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-weight: 500;
  color: #333;
  margin-bottom: 5px;
  font-size: 0.9rem;
`;

export const Input = styled.input`
  outline: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 15px;
  border: 1px solid #ccc;
  transition: border-color 0.3s;

  &:focus {
    border-color: #008080;
    box-shadow: 0 0 5px rgba(0, 128, 128, 0.3);
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  input {
    margin-left: 10px;
    accent-color: teal;
    margin-top: 0;
  }

  label {
    font-size: 0.9rem;
    color: #333;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
  background-color: teal;
  font-size: 16px;
  font-weight: 500;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #005f5f;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1);
  }

  @media (max-width: 750px) {
    width: 100%;
    padding: 12px;
    font-size: 18px;
  }
`;
