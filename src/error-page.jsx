import { Link, useRouteError } from 'react-router-dom';

import React from 'react';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
      <h1 className="text-4xl text-black font-bold font-sans">Oops!</h1>
      <p className="text-3xl text-gray-800 font-sans">
        Sorry, an unexpected error has occurred.
        <Link
          to="/"
          className="text-blue-700 underline cursor-pointer text-3xl ml-2"
        >
          Home
        </Link>
      </p>
      <p className="text-2xl text-gray-600 font-sans">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
