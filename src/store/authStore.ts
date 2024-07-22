import { create } from 'zustand';
import { loginUser, registerUser } from '../services/authService';
import { jwtDecode } from "jwt-decode"

interface User {
  email: string;
  token: string;
  id: number | undefined;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
  isLoggedIn: boolean;
  login: (payload: any) => Promise<void>;
  logout: () => void;
  register: (payload: any) => Promise<void>;
}


const useAuthStore = create<AuthState>((set, get) => ({
    user: null,
    loading: false,
    error: null,
    isLoggedIn: false,
  
    login: async (payload: any) => {
      set({ loading: true, error: null });
      try {
        const response = await loginUser(payload);
        if (!response.ok) {
          throw new Error(response.detail || 'Login failed');
        }
        const { token } = response;
        const decodedToken = jwtDecode(token);
        set({ user: { email: payload.email, token, id: decodedToken.exp }, loading: false, isLoggedIn: true });
        localStorage.setItem('token', token);
      } catch (error: any) {
        set({ loading: false, error: error.message });
      }
    },
  
    logout: () => {
      set({ user: null, isLoggedIn: false });
      localStorage.removeItem('token');
    },
  
    register: async (payload: any) => {
      set({ loading: true, error: null });
      try {
        const response = await registerUser(payload);
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.detail || 'Registration failed');
        }
        set({ loading: false });
      } catch (error: any) {
        set({ loading: false, error: error.message });
      }
    },

  
  }));
  
  export default useAuthStore;

