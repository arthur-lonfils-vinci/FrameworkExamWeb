export interface User {
  username: string;
  token: string;
}

export interface AuthState {
  user: string | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}