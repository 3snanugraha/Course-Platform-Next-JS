export const Footer = () => {
    const links = [
      { href: '/about', text: 'About Us' },
      { href: '/contact', text: 'Contact' },
      { href: '/privacy', text: 'Privacy Policy' },
      { href: '/terms', text: 'Terms of Service' },
    ];
  
    return (
      <footer className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm py-12 mt-20">
        <div className="container mx-auto px-4 flex flex-wrap justify-center items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-600 dark:text-gray-300 hover:text-[#00BFA6] hover:scale-110 transition-all duration-300"
            >
              {link.text}
            </a>
          ))}
        </div>
      </footer>
    );
  };
  