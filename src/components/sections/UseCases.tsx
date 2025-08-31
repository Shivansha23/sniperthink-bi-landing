const FeatureItem = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="mb-10">
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const UseCases = () => {
  const keyFeatures = [
    {
      title: "Unified business analytics",
      description: "Helps integrate and blend data from multiple data sources, gain a holistic view of your business, and make better decisions."
    },
    {
      title: "Low total cost of ownership",
      description: "Transparent, upfront pricing with no hidden costs. Offers the lowest TCO through affordable licensing, customization, training, and support fees."
    },
    {
      title: "Ease of use",
      description: "Offers a drag-and-drop interface for visualizing data. Get to insights easily with augmented analytics capabilities, such as AI, ML, and NLP/G."
    },
    {
      title: "Flexible deployment options",
      description: "Our cloud service is available 24/7. You also have the option to choose between public cloud and on-premise setup."
    },
    {
      title: "Highly scalable and extensible",
      description: "Provides a comprehensive set of APIs that enable extensive customization options. These APIs allow for highly extensible low-code or no-code integration with any technology stack."
    },
    {
      title: "Security and governance",
      description: "Incorporates time-tested and accredited security features designed for enterprise environments, along with a robust governance framework."
    }
  ];

  return (
    <section id="users" className="py-16 lg:py-24">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6">What makes AnalyticsClone truly exceptional</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {keyFeatures.map((feature, index) => (
            <FeatureItem 
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
