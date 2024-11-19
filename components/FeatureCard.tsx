interface FeatureCardProps {
    emoji: string;
    title: string;
    description: string;
  }
  
  export const FeatureCard = ({ emoji, title, description }: FeatureCardProps) => {
    return (
      <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-[#00BFA6] group">
        <div className="text-[#00BFA6] text-5xl mb-4 group-hover:animate-bounce">{emoji}</div>
        <h3 className="text-2xl font-bold mb-3 group-hover:text-[#00BFA6] transition-colors">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
      </div>
    );
  };
  