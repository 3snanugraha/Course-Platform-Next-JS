interface ButtonProps {
    href: string;
    variant: 'primary' | 'secondary' | 'standarprimary';
    children: React.ReactNode;
  }
  
  export const Button = ({ href, variant, children }: ButtonProps) => {
    const baseStyles = "px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-all duration-300";
    const variants = {
      primary: "bg-gradient-to-r from-[#00BFA6] to-[#00A693] text-white hover:shadow-lg hover:-translate-y-1 animate-bounce",
      standarprimary: "bg-gradient-to-r from-[#00BFA6] to-[#00A693] text-white hover:shadow-lg hover:-translate-y-1",
      secondary: "border-2 border-[#00BFA6] text-[#00BFA6] hover:bg-[#00BFA6] hover:text-white"
    };
  
    return (
      <a className={`${baseStyles} ${variants[variant]}`} href={href}>
        {children}
      </a>
    );
  };
  