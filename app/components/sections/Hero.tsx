
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id="home" className="relative py-16 lg:py-24 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fadeIn">
            <div className="max-w-2xl mx-auto lg:mx-0">
              <h1 className="heading-xl">
                <span className="gradient-text">Say Hello </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit,    sed do eiusmod.
              </h1>
              <p className="text-lead">
                Go from data to insights in minutes
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                <Link href="#" className="contact-button w-full sm:w-auto text-center animate-glow">
                  WATCH OVERVIEW
                </Link>
                
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 animate-float">
            <div className="relative">
              <div className="dark-card overflow-hidden p-4 border border-[rgba(255,255,255,0.1)]">
                <div className="aspect-w-16 aspect-h-9 relative">
                  <Image 
                    src="/images/analytics-main.png"
                    alt="Analytics Dashboard"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <div className="text-center mb-8">
            <div className="flex justify-center items-center gap-4 mb-6">
              <div className="h-1 w-12 bg-[rgba(255,255,255,0.1)] rounded"></div>
              <span className="heading-sm">Add Metrics here</span>
              <div className="h-1 w-12 bg-[rgba(255,255,255,0.1)] rounded"></div>
            </div>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                <div key={index} className="opacity-60 hover:opacity-100 transition-all">
                  <div className="h-8 w-24 bg-[rgba(255,255,255,0.1)] rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Background glow effects */}
      <div className="absolute top-1/4 -left-40 w-80 h-80 rounded-full bg-[#1A6262] opacity-10 blur-[100px] -z-10"></div>
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 rounded-full bg-[#1A6262] opacity-10 blur-[100px] -z-10"></div>
    </section>
  );
};

export default Hero;
