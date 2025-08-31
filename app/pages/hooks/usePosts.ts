'use client';

import { useState, useEffect } from 'react';
import { apiClient } from '@/app/lib/api';
import { Post, PostsResponse, ApiResponse } from '@/app/types/api';

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async (params?: {
    published?: boolean;
    authorId?: string;
    limit?: number;
    offset?: number;
  }) => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response: ApiResponse<PostsResponse> = await apiClient.getPosts(params);
      
      if (response.success && response.data) {
        setPosts(response.data.posts || []);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch posts');
    } finally {
      setIsLoading(false);
    }
  };

  const createPost = async (postData: {
    title: string;
    content: string;
    published?: boolean;
  }) => {
    try {
      setError(null);
      
      const response: ApiResponse<Post> = await apiClient.createPost(postData);
      
      if (response.success) {
        // Refresh posts after creation
        await fetchPosts();
        return { success: true };
      }
      
      return { success: false, error: response.error || 'Failed to create post' };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to create post';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    }
  };

  const updatePost = async (
    id: string,
    postData: { title?: string; content?: string; published?: boolean }
  ) => {
    try {
      setError(null);
      
      const response: ApiResponse<Post> = await apiClient.updatePost(id, postData);
      
      if (response.success) {
        // Refresh posts after update
        await fetchPosts();
        return { success: true };
      }
      
      return { success: false, error: response.error || 'Failed to update post' };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to update post';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    }
  };

  const deletePost = async (id: string) => {
    try {
      setError(null);
      
      const response: ApiResponse = await apiClient.deletePost(id);
      
      if (response.success) {
        // Refresh posts after deletion
        await fetchPosts();
        return { success: true };
      }
      
      return { success: false, error: response.error || 'Failed to delete post' };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to delete post';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return {
    posts,
    isLoading,
    error,
    fetchPosts,
    createPost,
    updatePost,
    deletePost,
  };
};
