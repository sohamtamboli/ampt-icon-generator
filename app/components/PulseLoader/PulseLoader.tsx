import React from 'react';

const PulseLoader = () => {
  return (
    <div
      role="status"
      className="flex animate-pulse flex-col gap-4 md:w-full md:flex-row "
    >
      <div className="flex h-[340px] w-[340px] items-center justify-center rounded bg-gray-300 dark:bg-gray-700 sm:w-96 md:h-[500px] md:w-[500px] md:flex-[0.7]">
        <svg
          className="h-10 w-10 text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
      <div className="w-[340px] md:w-full md:flex-[0.3]">
        <div className="mb-4 h-2.5 w-20 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div className="mb-2.5 h-2 max-w-[480px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div className="mb-2.5 h-2 max-w-[440px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div className="mb-2.5 h-2 max-w-[460px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div className="h-2 max-w-[360px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div className="mt-5 h-8 w-24 rounded-lg bg-gray-200 dark:bg-gray-700"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default PulseLoader;