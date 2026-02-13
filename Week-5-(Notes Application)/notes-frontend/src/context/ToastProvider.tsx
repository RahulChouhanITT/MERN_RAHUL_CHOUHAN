import { useCallback, useMemo, useState, type ReactNode } from "react";
import styled from "styled-components";
import { ToastContext } from "./ToastContext";
import type { ToastItem, ToastType } from "../types/toast.types";

const ToastStack = styled.div`
  position: fixed;
  left: 1.25rem;
  bottom: 1.25rem;
  z-index: 2000;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ToastCard = styled.div<{ $type: ToastType }>`
  min-width: 260px;
  max-width: 360px;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  color: #ffffff;
  font-weight: 500;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  background: ${({ $type }) => {
    if ($type === "error") return "#dc2626";
    if ($type === "success") return "#16a34a";
    return "#2563eb";
  }};
`;

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const showToast = useCallback((message: string, type: ToastType = "info") => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);

    window.setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3000);
  }, []);

  const value = useMemo(() => ({ showToast }), [showToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastStack>
        {toasts.map((toast) => (
          <ToastCard key={toast.id} $type={toast.type}>
            {toast.message}
          </ToastCard>
        ))}
      </ToastStack>
    </ToastContext.Provider>
  );
};
