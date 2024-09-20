"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Custom404 = () => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <Image src="/assets/404.png" alt="404 Error" width={300} height={300} />
      <h1 className="mt-4 text-2xl font-semibold text-gray-900 dark:text-white">
        Oops! Page Not Found
      </h1>
      <p className="mt-2 text-gray-500 dark:text-gray-400">
        The page you are looking for does not exist. It may have been deleted or
        moved permanently.
      </p>
      <button
        onClick={handleGoHome}
        className="mt-4 rounded-full bg-primary px-6 py-3 font-medium text-light transition hover:bg-secondary"
      >
        Go Back to Home
      </button>
    </div>
  );
};

export default Custom404;
