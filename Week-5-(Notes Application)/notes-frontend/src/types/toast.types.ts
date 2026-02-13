export type ToastType = "success" | "error" | "info";

export interface ToastContextType {
  showToast: (message: string, type?: ToastType) => void;
}

export interface ToastItem {
  id: number;
  message: string;
  type: ToastType;
}
