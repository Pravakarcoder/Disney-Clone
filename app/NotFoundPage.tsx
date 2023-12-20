import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-2">404</h1>
      <p className="text-xl text-gray-600 mb-4">Oops! Page not found.</p>
      <p className="text-gray-500">
        The page you are looking for might be in another universe.
      </p>

      <div className="mt-6">
        <a href="/" className="text-blue-500 hover:underline">
          Go back to home
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
