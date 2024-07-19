// app/error.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const ErrorPage = ({ error, reset }) => {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
    // You can also log the error to an error reporting service
  }, [error]);

  return (
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-8xl font-bold">Error</h1>
      <p className="mt-4 font-thin">오류가 생겼어요.</p>
      <p className="font-thin">다른 방을 찾으러 가봐요.</p>

      <button
        className="border p-3 mt-4 bg-gray-800 border-black rounded-lg hover:bg-black"
        onClick={() => router.push("/")}
      >
        <p className="text text-white font-light">홈으로</p>
      </button>
    </div>
  );
};

export default ErrorPage;
