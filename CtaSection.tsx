import Link from 'next/link';

export default function CtaSection() {
  return (
    <section className="section bg-secondary-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 right-0 bg-accent opacity-10 w-96 h-96 rounded-full -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 bg-primary opacity-10 w-96 h-96 rounded-full -ml-20 -mb-20"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-white/80 text-xl mb-8 max-w-3xl mx-auto">
            Join the businesses leveraging our AI-driven consulting services to achieve extraordinary growth. Start with a free AI business analysis today.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Link href="/ai-analysis" className="btn btn-accent py-4 text-lg">
              Get Free AI Business Analysis
            </Link>
            <Link href="/schedule-call" className="btn btn-outline text-white border-white hover:bg-white/10 py-4 text-lg">
              Schedule a Call
            </Link>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">94%</div>
              <p className="text-white/80">Client satisfaction</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">35%</div>
              <p className="text-white/80">Average growth increase</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">172+</div>
              <p className="text-white/80">Businesses transformed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">48hr</div>
              <p className="text-white/80">Implementation time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 