import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background:
    radial-gradient(circle at 12% 10%, #eef7ff 0%, transparent 38%),
    radial-gradient(circle at 90% 92%, #f5f3ff 0%, transparent 34%),
    #f7fafc;
`;

export const BodyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  overflow: hidden;
`;

export const SidebarWrapper = styled.div`
  width: clamp(220px, 28vw, 360px);
  flex: 0 0 clamp(220px, 28vw, 360px);
  background: rgba(255, 255, 255, 0.82);
  border-right: 1px solid #dbe7f4;
  backdrop-filter: blur(6px);
  overflow-x: hidden;
  overflow-y:hidden;
`;

export const ContentWrapper = styled.div`
  flex: 1;
  min-width: 0;
  background: transparent;
  padding: 2rem;
  overflow-y: auto;
  position: relative;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  z-index: 999;
`;

export const ConfirmModal = styled.div`
  width: 100%;
  max-width: 420px;
  background: #ffffff;
  border-radius: 12px;
  padding: 1.25rem;
  box-shadow: 0 20px 36px rgba(15, 23, 42, 0.22);
`;

export const ConfirmTitle = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  color: #0f172a;
`;

export const ConfirmText = styled.p`
  margin: 0.8rem 0 1.2rem;
  color: #475569;
  line-height: 1.4;
`;

export const ConfirmActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
`;

export const ConfirmButton = styled.button<{ $variant?: "danger" }>`
  border: none;
  border-radius: 8px;
  padding: 0.5rem 0.9rem;
  font-size: 0.9rem;
  cursor: pointer;
  color: ${({ $variant }) => ($variant === "danger" ? "#ffffff" : "#1e293b")};
  background: ${({ $variant }) => ($variant === "danger" ? "#dc2626" : "#e2e8f0")};
`;

export const LoadingState = styled.div`
  min-height: calc(100vh - 9rem);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  color: #334155;
  font-size: 1rem;
  font-weight: 500;
`;

export const EmptyContentState = styled.div`
  min-height: calc(100vh - 9rem);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  font-size: 1.05rem;
  font-weight: 500;
`;

export const LoadingSpinner = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 999px;
  border: 3px solid #cbd5e1;
  border-top-color: #2563eb;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
