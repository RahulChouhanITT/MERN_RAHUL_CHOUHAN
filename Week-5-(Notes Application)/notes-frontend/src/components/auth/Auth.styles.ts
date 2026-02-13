import styled from "styled-components";

export const AuthWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f4f6f9;
`;

export const AuthCard = styled.div`
  width: 380px;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
`;

export const Logo = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
  color: #4285f4;
`;

export const InputGroup = styled.div`
  margin-bottom: 1rem;
`;

export const Input = styled.input<{ hasError?: boolean }>`
  width: 100%;
  padding: 0.7rem;
  border-radius: 6px;
  border: 1px solid ${({ hasError }) => (hasError ? "red" : "#ddd")};

  &:focus {
    outline: none;
    border-color: ${({ hasError }) => (hasError ? "red" : "#4285f4")};
  }
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 0.8rem;
  margin-top: 4px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.8rem;
  border-radius: 6px;
  border: none;
  background: #4285f4;
  color: white;
  font-weight: 600;
  margin-top: 1rem;

  &:hover {
    background: #3367d6;
  }
`;
