
"use client";
import { Banner } from "flowbite-react";

export function Component() {
  return (
    <Banner>
      <div className="flex w-full justify-between border-b border-gray-200 bg-blue-500 p-4 text-white">
        <div className="mx-auto flex items-center">
          <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
            <span className="[&_p]:inline text-white">
              New brand identity has been launched for the&nbsp;
              <a
                href="https://flowbite.com"
                className="inline font-medium text-white underline decoration-solid underline-offset-2 hover:no-underline dark:text-cyan-500"
              >
                Flowbite Library
              </a>
            </span>
          </p>
        </div>
      
      </div>
    </Banner>
  );
}
