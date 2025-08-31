const UserTypeCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="bg-gray-900 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow h-full border border-gray-800">
      <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const WhyUs = () => {
  const userTypes = [
    {
      title: "Open Platform",
      description: "One platform that covers data, insights, alerts, predictions, strategy, and reporting."
    },
    {
      title: "Designed for MSMEs",
      description: "easy to use, affordable, and built for everyday operations."
    },
    {
      title: "Grow Faster",
      description: "Turns raw data into clear actions that help you grow faster with fewer mistakes."
    },
    {
      title: "Built for the Pace of Real Life",
      description: "SniperThink is designed to keep up with real teams, real moments, and real urgency"
    }
  ];

  return (
    <section id="why-us" className="py-16 lg:py-24">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6">Why Businesses Love SniperThink’s 6 Layers</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {userTypes.map((userType, index) => (
            <UserTypeCard 
              key={index}
              title={userType.title}
              description={userType.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
