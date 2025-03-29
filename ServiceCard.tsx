import Link from 'next/link';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
}

export default function ServiceCard({ title, description, icon, link }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 flex flex-col h-full border border-gray-100">
      <div className="mb-4">
        <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center">
          <Image 
            src={icon} 
            alt={title}
            width={24}
            height={24}
            onError={(e) => {
              // Fallback for missing icons
              const target = e.target as HTMLElement;
              target.style.display = 'none';
            }}
          />
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-secondary-900 mb-2">{title}</h3>
      
      <p className="text-secondary-600 mb-6 flex-grow">{description}</p>
      
      <Link href={link} className="inline-flex items-center text-primary font-medium">
        Learn more
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-4 w-4 ml-2" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
} 