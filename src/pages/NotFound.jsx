import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center text-gray-700 dark:text-gray-300">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Page's not found</p>
      <Link
        to="/"
        className="text-rose-500 hover:underline font-semibold text-lg"
      >
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
