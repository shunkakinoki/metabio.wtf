const navigation = {
  main: [
    {
      name: "Manifesto",
      href: "https://www.notion.so/metafam/Metabio-8746a5dff6ec4746adda5119dd1ec3ec",
    },
  ],
  social: [
    {
      name: "Twitter",
      href: "https://twitter.com/metabio_",
      icon: props => {
        return (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        );
      },
    },
  ],
};

export const Footer = () => {
  return (
    <footer>
      <div className="overflow-hidden py-12 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <nav
          className="flex flex-wrap justify-center -my-2 -mx-5"
          aria-label="Footer"
        >
          {navigation.main.map(item => {
            return (
              <div key={item.name} className="py-2 px-5">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  {item.name}
                </a>
              </div>
            );
          })}
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
          {navigation.social.map(item => {
            return (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="w-6 h-6" aria-hidden="true" />
              </a>
            );
          })}
        </div>
        <p className="mt-8 text-base text-center text-gray-400">
          &copy; 2021 Metabio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
