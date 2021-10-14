import Link from "next/link";

export const Error = () => {
  return (
    <div className="flex flex-col pt-16 pb-12 min-h-screen">
      <main className="flex flex-col flex-grow justify-center px-4 sm:px-6 lg:px-8 mx-auto w-full max-w-7xl">
        <div className="flex flex-shrink-0 justify-center">
          <Link passHref href="/">
            <a className="inline-flex">
              <span className="sr-only">Workflow</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-auto h-12"
                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
          </Link>
        </div>
        <div className="py-16">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-wide text-indigo-600 uppercase">
              404 error
            </p>
            <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Page not found.
            </h1>
            <p className="mt-2 text-base text-gray-500">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="mt-6">
              <Link passHref href="/">
                <a className="text-base font-medium text-indigo-600 hover:text-indigo-500">
                  Go back home<span aria-hidden="true"> &rarr;</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
