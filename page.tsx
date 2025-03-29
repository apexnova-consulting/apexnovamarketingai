import Link from 'next/link';
import Image from 'next/image';
import LeadCaptureForm from './components/LeadCaptureForm';
import ServiceCard from './components/ServiceCard';
import AiChatbot from './components/AiChatbot';
import TestimonialSlider from './components/TestimonialSlider';
import CtaSection from './components/CtaSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden">
        <div className="absolute inset-0 bg-secondary-900/70 z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center"></div>
        <div className="container relative z-20 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">
              <span className="text-accent">AI-Powered</span> Business Consulting for Maximum Growth
            </h1>
            <p className="text-white/90 text-xl mb-8">
              Unlock unprecedented growth with our AI-enhanced consulting services. We combine human expertise with artificial intelligence to deliver superior results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/ai-analysis" className="btn btn-primary">
                Get Free AI Business Analysis
              </Link>
              <Link href="/services" className="btn btn-outline text-white border-white hover:bg-white/10">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Powered Lead Capture */}
      <section className="bg-gradient-to-r from-primary-50 to-accent-50 py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-secondary-900 mb-6">Find Your Perfect Business Solution</h2>
              <p className="text-lg mb-6">
                Our AI-powered recommendation engine analyzes your business needs and suggests the perfect consulting package. Get started with a free personalized report.
              </p>
              <ul className="space-y-4 mb-8">
                {['Data-driven recommendations', 'Tailored to your industry', 'Actionable insights', 'Competitive analysis'].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="bg-accent rounded-full p-1 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-xl">
              <LeadCaptureForm />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-secondary-900 mb-4">Our AI-Enhanced Services</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Leveraging cutting-edge AI to deliver exceptional consulting services that drive real business results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Strategic Business Consulting"
              description="AI-powered competitive analysis and strategic planning to position your business for maximum growth."
              icon="/images/strategy-icon.svg"
              link="/services/strategic-consulting"
            />
            <ServiceCard 
              title="Marketing Optimization"
              description="Data-driven marketing strategies enhanced by AI to target your ideal customers with precision."
              icon="/images/marketing-icon.svg"
              link="/services/marketing-optimization"
            />
            <ServiceCard 
              title="Operational Efficiency"
              description="AI-based workflow analysis to streamline operations and reduce costs while improving performance."
              icon="/images/operations-icon.svg"
              link="/services/operational-efficiency"
            />
            <ServiceCard 
              title="Digital Transformation"
              description="Comprehensive digital solutions powered by AI to modernize your business processes."
              icon="/images/digital-icon.svg"
              link="/services/digital-transformation"
            />
            <ServiceCard 
              title="Website Development"
              description="Beautiful, conversion-focused websites built with the latest technologies and AI-optimization."
              icon="/images/web-icon.svg"
              link="/services/website-development"
            />
            <ServiceCard 
              title="Data Analytics"
              description="Advanced analytics solutions that turn your data into actionable insights for better decision making."
              icon="/images/analytics-icon.svg"
              link="/services/data-analytics"
            />
          </div>
        </div>
      </section>

      {/* AI Chat Assistant */}
      <section className="section bg-secondary-900 text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Get Instant Answers with Our AI Consultant</h2>
              <p className="text-lg mb-6">
                Have questions about how we can help your business? Our AI consultant is available 24/7 to provide instant answers and recommendations.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Ask about our services and pricing',
                  'Get custom recommendations for your business',
                  'Understand how our AI approach works',
                  'Schedule a call with a human consultant'
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="bg-accent rounded-full p-1 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <AiChatbot />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-gradient-to-r from-primary-50 to-accent-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-secondary-900 mb-4">Client Success Stories</h2>
            <p className="text-lg max-w-3xl mx-auto">
              See how our AI-powered consulting has transformed businesses across industries.
            </p>
          </div>
          
          <TestimonialSlider />
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </main>
  );
} 