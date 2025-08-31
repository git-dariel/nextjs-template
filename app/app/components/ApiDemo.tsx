"use client";

import { useState } from "react";
import { useAuth } from "@/app/hooks/useAuth";
import LoginForm from "@/app/components/LoginForm";
import PostsList from "@/app/components/PostsList";
import RegisterForm from "./RegisterForm";

export default function ApiDemo() {
  const { isAuthenticated, user, logout, isLoading } = useAuth();
  const [activeTab, setActiveTab] = useState<"posts" | "login" | "register">("posts");

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Next.js + TypeScript API Demo</h1>
              <p className="text-gray-600 mt-2">MongoDB, Prisma, Express.js Backend</p>
            </div>

            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">Welcome, {user?.name || user?.email}</span>
                <button onClick={logout} className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
                  Logout
                </button>
              </div>
            ) : (
              <div className="text-sm text-gray-600">Not authenticated</div>
            )}
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab("posts")}
                className={`py-4 px-6 text-sm font-medium border-b-2 ${
                  activeTab === "posts"
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Posts
              </button>

              {!isAuthenticated && (
                <button
                  onClick={() => setActiveTab("register")}
                  className={`py-4 px-6 text-sm font-medium border-b-2 ${
                    activeTab === "register"
                      ? "border-indigo-500 text-indigo-600"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Register
                </button>
              )}

              {!isAuthenticated && (
                <button
                  onClick={() => setActiveTab("login")}
                  className={`py-4 px-6 text-sm font-medium border-b-2 ${
                    activeTab === "login"
                      ? "border-indigo-500 text-indigo-600"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Login
                </button>
              )}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === "posts" && <PostsList />}
            {activeTab === "register" && !isAuthenticated && <RegisterForm />}
            {activeTab === "login" && !isAuthenticated && <LoginForm />}
          </div>
        </div>

        {/* API Status */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">API Connection Status</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Backend API: http://localhost:5000</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Health Check: http://localhost:5000/health</span>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4">Make sure to start the backend server with: npm run backend:dev</p>
        </div>
      </div>
    </div>
  );
}
