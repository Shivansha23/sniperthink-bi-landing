import Link from 'next/link';

const TestimonialCard = ({ quote, name, title, stat, statLabel }: { 
  quote?: string; 
  name?: string; 
  title?: string;
  stat?: string;
  statLabel?: string;
}) => {
  if (stat) {
    return (
      <div className="bg-gray-900 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-800">
        <div className="bg-gray-800 rounded h-12 w-28 mb-4"></div>
        <div className="text-4xl font-bold text-[#0e9390] mb-2">{stat}</div>
        <div className="text-gray-300 mb-4">{statLabel}</div>
        <Link href="#" className="text-[#0e9390] font-medium hover:text-[#1c7873]">
          Read more
        </Link>
      </div>
    );
  }
  
  return (
    <div className="bg-gray-900 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-800">
      <div className="flex items-center mb-4">
        <div className="bg-gray-800 rounded-full h-10 w-10 mr-3"></div>
        <div>
          <p className="font-medium text-white">{name}</p>
          <p className="text-sm text-gray-300">{title}</p>
        </div>
      </div>
      <blockquote className="text-gray-300 mb-4 italic">&ldquo;{quote}&rdquo;</blockquote>
      <Link href="#" className="text-[#0e9390] font-medium hover:text-[#1c7873]">
        Play video
      </Link>
    </div>
  );
};

const RatingCard = ({ rating }: { platform?: string; rating: string }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-gray-800 rounded h-6 w-24 mb-2"></div>
      <div className="flex items-center">
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="ml-2 text-gray-300">{rating}</span>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const ratings = [
    { platform: "Capterra", rating: "4.4/5" },
    { platform: "Google Play", rating: "4.4/5" },
    { platform: "Gartner Peer Insights", rating: "4.4/5" },
    { platform: "GetApp", rating: "4.4/5" },
    { platform: "G2", rating: "4.3/5" },
    { platform: "TrustRadius", rating: "8.7/10" }
  ];

  const stats = [
    { stat: "25%", label: "more data analyzed" },
    { stat: "30%", label: "less time spent on each project" },
    { stat: "5%", label: "increased revenue" },
    { stat: "50%", label: "increased productivity" }
  ];

  return (
    <section id="testimonials" className="py-16 lg:py-24">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6">Over 20,000 businesses choose AnalyticsClone as their BI partner</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-3">
            <TestimonialCard 
              quote="Versa Creative saves 5000 man-hours per year with AnalyticsClone" 
              name="Eddie Shekari" 
              title="Principal & CEO, Versa Creative"
            />
          </div>
          
          {stats.map((item, index) => (
            <TestimonialCard
              key={index}
              stat={item.stat}
              statLabel={item.label}
            />
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-8">
          {ratings.map((rating, index) => (
            <RatingCard 
              key={index}
              platform={rating.platform}
              rating={rating.rating}
            />
          ))}
        </div>
        
        <div className="text-center">
          <Link href="#" className="btn-secondary">
            See all customer stories
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
