import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  overflow-x: hidden;
  
`;

export const AddNoteButton = styled.button`
  width: 90%;
  padding: 0.7rem;
  border-radius: 6px;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
  font-size: 1rem;
  margin-bottom: 1rem;
  border: none;
  box-shadow: 0 8px 16px rgba(37, 99, 235, 0.25);

  &:hover {
    background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  width: 95%;
  margin-bottom: 1rem;
  display:flex;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.6rem 2.5rem 0.6rem 0.8rem;
  border-radius: 6px;
  border: 1px solid #d3dfed;
  background: #f8fbff;
  font-size: 0.9rem;
  margin-right:1rem;

  &:focus {
    outline: none;
    border-color: #4285f4;
  }
`;

export const SearchIconWrapper = styled.div`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #777;
`;

export const NotesList = styled.div`
  flex: 1;
  overflow-y: auto;
  width: 90%;
`;

export const EmptySidebarState = styled.div`
  width: 100%;
  min-height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  font-size: 0.95rem;
  text-align: center;
`;

export const NoteCard = styled.div<{ $active?: boolean }>`
  width: 100%;
  box-sizing: border-box;
  padding: 0.7rem 0.8rem;
  border-radius: 8px;
  margin-bottom: 0.7rem;
  cursor: pointer;
  background: ${({ $active }) => ($active ? "#e8f0fe" : "#ffffff")};
  border: 1px solid ${({ $active }) => ($active ? "#bfd8fb" : "#e2e8f0")};
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &:hover {
    background: #f4f8ff;
  }
`;

export const NoteTitle = styled.div`
  font-weight: 600;
  font-size: 0.9rem;
  width: 100%;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
