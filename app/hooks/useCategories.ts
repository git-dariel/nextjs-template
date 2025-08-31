'use client';

import { useState, useEffect } from 'react';
import { apiClient } from '@/app/lib/api';
import { Category, ApiResponse } from '@/app/types/api';

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCategories = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response: ApiResponse<Category[]> = await apiClient.getCategories();
      
      if (response.success && response.data) {
        setCategories(response.data);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch categories');
    } finally {
      setIsLoading(false);
    }
  };

  const createCategory = async (categoryData: {
    name: string;
    description?: string;
  }) => {
    try {
      setError(null);
      
      const response: ApiResponse<Category> = await apiClient.createCategory(categoryData);
      
      if (response.success) {
        // Refresh categories after creation
        await fetchCategories();
        return { success: true };
      }
      
      return { success: false, error: response.error || 'Failed to create category' };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to create category';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    }
  };

  const updateCategory = async (
    id: string,
    categoryData: { name?: string; description?: string }
  ) => {
    try {
      setError(null);
      
      const response: ApiResponse<Category> = await apiClient.updateCategory(id, categoryData);
      
      if (response.success) {
        // Refresh categories after update
        await fetchCategories();
        return { success: true };
      }
      
      return { success: false, error: response.error || 'Failed to update category' };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to update category';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    }
  };

  const deleteCategory = async (id: string) => {
    try {
      setError(null);
      
      const response: ApiResponse = await apiClient.deleteCategory(id);
      
      if (response.success) {
        // Refresh categories after deletion
        await fetchCategories();
        return { success: true };
      }
      
      return { success: false, error: response.error || 'Failed to delete category' };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to delete category';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return {
    categories,
    isLoading,
    error,
    fetchCategories,
    createCategory,
    updateCategory,
    deleteCategory,
  };
};
