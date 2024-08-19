
"use client";
import { PiFolderPlusDuotone } from "react-icons/pi";
import { Banner } from "flowbite-react";

export function Component() {
  return (
    <Banner>
      <div className="flex w-full justify-between border-b border-gray-200 bg-blue-900 p-4 text-white">
        <div className="mx-auto flex items-center">
          <p className="flex items-center text-sm font-bold text-gray-500 dark:text-gray-400">
          <PiFolderPlusDuotone className="mr-1 text-white text-2xl" />
            <span className="[&_p]:inline text-white">
              Looking to hire new developers? &nbsp;
              <a
                href="https://flowbite.com"
                className="inline font-bold text-white underline decoration-solid underline-offset-2 hover:no-underline dark:text-cyan-500"
              >
                Visit our platform
              </a>
            </span>
          </p>
        </div>
      
      </div>
    </Banner>
  );
}
