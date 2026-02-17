import styled from "styled-components";

export const EditorContainer = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 600px;
  box-sizing: border-box;
`;

export const TitleInput = styled.input<{ hasError: boolean }>`
  width: 100%;
  box-sizing: border-box;
  font-size: 1.2rem;
  font-weight: 600;
  border: ${(props) => (props.hasError ? "1px solid #dc2626" : "1px solid #cbd5e1")};
  border-radius: 8px;
  padding: 0.6rem 0.75rem;
  margin-bottom: 0.5rem;

  &:focus {
    outline: none;
    border-color: ${(props) => (props.hasError ? "#dc2626" : "#2563eb")};
  }
`;

export const DescriptionInput = styled.textarea<{ hasError: boolean }>`
  width: 100%;
  box-sizing: border-box;
  min-height: 120px;
  max-height: 220px;
  overflow-y: auto;
  border: ${(props) => (props.hasError ? "1px solid #dc2626" : "1px solid #cbd5e1")};
  border-radius: 8px;
  padding: 0.6rem 0.75rem;
  resize: none;
  margin-bottom: 0.5rem;

  &:focus {
    outline: none;
    border-color: ${(props) => (props.hasError ? "#dc2626" : "#2563eb")};
  }
`;

export const ErrorText = styled.p<{ $visible: boolean }>`
  color: #dc2626;
  font-size: 0.8rem;
  min-height: 1rem;
  margin: 0 0 0.5rem;
  visibility: ${(props) => (props.$visible ? "visible" : "hidden")};
`;

export const IconRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;

  svg {
    cursor: pointer;
    font-size: 1.3rem;
  }
`;
