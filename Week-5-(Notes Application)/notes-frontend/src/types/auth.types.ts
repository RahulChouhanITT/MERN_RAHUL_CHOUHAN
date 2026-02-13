export interface User {
  id: string;
  fullName: string;
  emailAddress: string;
}

export interface AuthContextType {
  user: User | null;
  isAuthLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}
