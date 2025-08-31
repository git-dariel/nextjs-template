'use client';

import { useState, useEffect } from 'react';
import { apiClient } from '@/app/lib/api';
import { User, AuthResponse, ApiResponse } from '@/app/types/api';

interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    token: null,
    isLoading: true,
    isAuthenticated: false,
  });

  useEffect(() => {
    // Check for existing token on mount
    const token = localStorage.getItem('authToken');
    if (token) {
      apiClient.setToken(token);
      setAuthState(prev => ({
        ...prev,
        token,
        isAuthenticated: true,
        isLoading: false,
      }));
    } else {
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
      }));
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true }));
      
      const response: ApiResponse<AuthResponse> = await apiClient.login({ email, password });
      
      if (response.success && response.data) {
        setAuthState({
          user: response.data.user,
          token: response.data.token,
          isLoading: false,
          isAuthenticated: true,
        });
        return { success: true };
      }
      
      return { success: false, error: response.error || 'Login failed' };
    } catch (error) {
      setAuthState(prev => ({ ...prev, isLoading: false }));
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Login failed' 
      };
    }
  };

  const register = async (name: string, email: string, password: string) => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true }));
      
      const response: ApiResponse<AuthResponse> = await apiClient.register({ name, email, password });
      
      if (response.success && response.data) {
        setAuthState({
          user: response.data.user,
          token: response.data.token,
          isLoading: false,
          isAuthenticated: true,
        });
        return { success: true };
      }
      
      return { success: false, error: response.error || 'Registration failed' };
    } catch (error) {
      setAuthState(prev => ({ ...prev, isLoading: false }));
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Registration failed' 
      };
    }
  };

  const logout = () => {
    apiClient.logout();
    setAuthState({
      user: null,
      token: null,
      isLoading: false,
      isAuthenticated: false,
    });
  };

  return {
    ...authState,
    login,
    register,
    logout,
  };
};
