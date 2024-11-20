import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  width: 98%;
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(135deg, #f9f9f9, #ffffff);

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const HeaderTitle = styled.h2`
  font-size: 26px;
  color: #333;
  margin-bottom: 25px;
  font-weight: 500;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 22px;
    margin-bottom: 20px;
  }
`;

export const InputContent = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  color: #555;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #cccccc;
  border-radius: 6px;
  font-size: 14px;
  color: #333;
  font-family: 'Poppins', sans-serif;

  &:focus {
    outline: none;
    border-color: teal;
    box-shadow: 0 0 4px rgba(0, 128, 128, 0.4);
  }
`;

export const Button = styled.button`
  background-color: #008080;
  color: #ffffff;
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #005f5f;
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 8px rgba(0, 128, 128, 0.4);
  }
`;

export const InlineInputs = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const InputWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
