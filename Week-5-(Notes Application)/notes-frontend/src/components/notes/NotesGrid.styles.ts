import styled from "styled-components";

export const NotesGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;

export const NoteCard = styled.div`
  background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
  border: 1px solid #dbe7f4;
  border-radius: 12px;
  padding: 1rem;
  height: 180px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.2s ease;
  overflow: hidden;
  box-shadow: 0 10px 22px rgba(30, 41, 59, 0.06);

  &:hover {
    box-shadow: 0 14px 30px rgba(30, 41, 59, 0.12);
    transform: translateY(-2px);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.6rem;
`;

export const CardTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  flex: 1;
  min-width: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const IconGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  color: #5f6368;

  svg {
    cursor: pointer;
    font-size: 1.2rem;

    &:hover {
      color: #202124;
    }
  }
`;

export const CardDescription = styled.p`
  font-size: 0.9rem;
  color: #5f6368;
  margin-top: 0.8rem;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
