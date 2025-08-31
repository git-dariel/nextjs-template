// User types
export interface User {
  id: string;
  name: string | null;
  email: string;
  createdAt: string;
  updatedAt?: string;
}

export interface AuthUser extends User {
  token?: string;
}

// Post types
export interface Post {
  id: string;
  title: string;
  content: string | null;
  published: boolean;
  createdAt: string;
  updatedAt: string;
  authorId: string;
  author: User;
}

// Category types
export interface Category {
  id: string;
  name: string;
  description: string | null;
  createdAt: string;
  updatedAt: string;
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
}

// Auth response types
export interface AuthResponse {
  user: User;
  token: string;
}

// Posts response types
export interface PostsResponse {
  posts: Post[];
  pagination: {
    total: number;
    limit: number;
    offset: number;
    hasMore: boolean;
  };
}

// Request types
export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface CreatePostRequest {
  title: string;
  content: string;
  published?: boolean;
}

export interface UpdatePostRequest {
  title?: string;
  content?: string;
  published?: boolean;
}

export interface CreateCategoryRequest {
  name: string;
  description?: string;
}

export interface UpdateCategoryRequest {
  name?: string;
  description?: string;
}
