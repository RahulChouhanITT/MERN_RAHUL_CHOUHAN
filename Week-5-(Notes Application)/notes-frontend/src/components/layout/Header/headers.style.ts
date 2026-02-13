import styled from "styled-components";

export const HeaderContainer = styled.header`
box-sizing: border-box;
  height: 3rem;
  width: 100%;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  border-bottom: 1px solid #e0e0e0;
  padding: 0 2rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  color: #202124;
`;

export const UserSection = styled.div`
  position: relative;
`;

export const UserIconWrapper = styled.div`
  font-size: 2rem;
  cursor: pointer;
  color: #5f6368;
  display: flex;
  align-items: center;

  &:hover {
    color: #202124;
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 55px;
  right: 0;
  width: 240px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  padding: 1rem;
  z-index: 100;
`;

export const UserName = styled.div`
  font-weight: 600;
  margin-bottom: 4px;
`;

export const UserEmail = styled.div`
  font-size: 0.85rem;
  color: #5f6368;
  margin-bottom: 1rem;
`;

export const LogoutButton = styled.button`
  width: 100%;
  padding: 0.6rem;
  border-radius: 6px;
  background: #f1f3f4;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.9rem;

  &:hover {
    background: #e0e0e0;
  }
`;
