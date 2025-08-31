import TabCarousel from '@/components/ui/TabCarousel';

const Layers = () => {
  // Tab content for the carousel
  const tabContents = [
    {
      id: 'input',
      title: 'Input Layer',
      heading: 'Intelligence Growth Engine: Input Layer',
      bulletPoints: [
        'The Input Layer forms the foundation of your business intelligence ecosystem.',
        'Connect to diverse data sources including ERP, CRM, spreadsheets, databases, IoT devices, and external APIs.',
        'Maintain a centralized repository of all business data with automated extraction, transformation, and loading (ETL) processes.'
      ],
      image: (
        <div className="bg-gray-900 p-6 rounded-lg shadow-md border border-gray-800">
          <div className="grid grid-cols-4 gap-4">
            {[...Array(16)].map((_, idx) => (
              <div 
                key={idx} 
                className="bg-gray-800 p-2 rounded flex items-center justify-center h-16 w-16 border border-gray-700"
              >
                <div className="bg-gray-700 h-10 w-10 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      ),
      bgColor: 'bg-gray-900'
    },
    {
      id: 'kpi',
      title: 'KPI Layer',
      heading: 'Intelligence Growth Engine: KPI Layer',
      bulletPoints: [
        'The KPI Layer transforms raw data into meaningful business metrics and key performance indicators.',
        'Define, track, and visualize critical business metrics across departments including finance, sales, marketing, operations, and HR.',
        'Create custom KPI dashboards with real-time monitoring capabilities for immediate business insights.'
      ],
      image: (
        <div className="bg-gray-900 p-4 rounded-lg shadow-md border border-gray-800">
          <div className="relative h-[300px] w-[400px]">
            <div className="absolute left-10 top-10">
              <div className="bg-teal-900 h-12 w-12 rounded-full flex items-center justify-center">
                <div className="bg-teal-500 h-8 w-8 rounded-full"></div>
              </div>
            </div>
            <div className="absolute left-[200px] top-[100px]">
              <div className="bg-teal-900 h-12 w-12 rounded-full flex items-center justify-center">
                <div className="bg-teal-500 h-8 w-8 rounded-full"></div>
              </div>
            </div>
            <div className="absolute left-[300px] top-[50px]">
              <div className="bg-teal-900 h-12 w-12 rounded-full flex items-center justify-center">
                <div className="bg-teal-500 h-8 w-8 rounded-full"></div>
              </div>
            </div>
            <div className="absolute left-[150px] top-[200px]">
              <div className="bg-teal-900 h-12 w-12 rounded-full flex items-center justify-center">
                <div className="bg-teal-500 h-8 w-8 rounded-full"></div>
              </div>
            </div>
            <div className="absolute left-[250px] top-[180px]">
              <div className="bg-green-900 h-16 w-16 rounded-md flex items-center justify-center">
                <span className="text-green-400 font-semibold">KPI</span>
              </div>
            </div>
            <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <line x1="50" y1="50" x2="200" y2="100" stroke="#2D4E7A" strokeWidth="2" />
              <line x1="200" y1="100" x2="300" y2="50" stroke="#2D4E7A" strokeWidth="2" />
              <line x1="200" y1="100" x2="150" y2="200" stroke="#2D4E7A" strokeWidth="2" />
              <line x1="150" y1="200" x2="250" y2="180" stroke="#2D4E7A" strokeWidth="2" />
            </svg>
          </div>
        </div>
      ),
      bgColor: 'bg-gray-900'
    },
    {
      id: 'alert',
      title: 'Alert Layer',
      heading: 'Intelligence Growth Engine: Alert Layer',
      bulletPoints: [
        'The Alert Layer provides proactive monitoring and notification systems to keep you informed of critical business events.',
        'Set up customizable threshold-based alerts for KPIs, operational metrics, and system performance indicators.',
        'Receive notifications through multiple channels including email, SMS, mobile push notifications, and in-app messaging.'
      ],
      image: (
        <div className="bg-gray-900 p-4 rounded-lg shadow-md border border-gray-800">
          <div className="relative h-[300px] w-[400px]">
            <div className="absolute top-4 left-0 right-0 flex justify-between items-center p-2">
              <div className="text-gray-300 font-semibold">Alert Management Console</div>
              <div className="flex space-x-2">
                <div className="bg-red-900 px-2 py-1 rounded text-red-400 text-xs">Active Alerts (3)</div>
                <div className="bg-gray-800 px-2 py-1 rounded text-gray-300 text-xs">Settings</div>
              </div>
            </div>
            <div className="absolute top-16 left-4">
              <div className="bg-red-900 p-3 rounded-md border border-red-800">
                <div className="text-xs text-gray-300">Inventory Alert</div>
                <div className="font-bold text-xl text-red-400">Critical</div>
              </div>
            </div>
            <div className="absolute top-16 left-[120px] right-4">
              <div className="bg-gray-800 p-3 rounded-md shadow-sm border border-gray-700">
                <div className="text-xs font-medium mb-2 text-gray-300">Recent Alerts</div>
                <div className="h-[150px] bg-gray-900 rounded relative border border-gray-700">
                  <div className="absolute top-0 left-0 right-0 p-2 border-b border-gray-700">
                    <div className="flex justify-between items-center">
                      <div className="text-xs font-medium text-gray-300">Sales Target Alert</div>
                      <div className="bg-yellow-900 px-2 py-0.5 rounded text-yellow-400 text-[10px]">Warning</div>
                    </div>
                  </div>
                  <div className="absolute top-[40px] left-0 right-0 p-2 border-b border-gray-700">
                    <div className="flex justify-between items-center">
                      <div className="text-xs font-medium text-gray-300">Server Response Time</div>
                      <div className="bg-red-900 px-2 py-0.5 rounded text-red-400 text-[10px]">Critical</div>
                    </div>
                  </div>
                  <div className="absolute top-[80px] left-0 right-0 p-2 border-b border-gray-700">
                    <div className="flex justify-between items-center">
                      <div className="text-xs font-medium text-gray-300">Customer Churn Risk</div>
                      <div className="bg-yellow-900 px-2 py-0.5 rounded text-yellow-400 text-[10px]">Warning</div>
                    </div>
                  </div>
                  <div className="absolute top-[120px] left-0 right-0 p-2">
                    <div className="flex justify-between items-center">
                      <div className="text-xs font-medium text-gray-300">Budget Threshold</div>
                      <div className="bg-green-900 px-2 py-0.5 rounded text-green-400 text-[10px]">Normal</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgColor: 'bg-gray-900'
    },
    {
      id: 'prediction',
      title: 'Prediction Layer',
      heading: 'Intelligence Growth Engine: Prediction Layer',
      bulletPoints: [
        'The Prediction Layer harnesses machine learning and advanced analytics to forecast future business outcomes with high accuracy.',
        'Leverage historical data patterns to predict customer behavior, market trends, inventory requirements, and resource allocation needs.',
        'Implement automated decision-making processes based on AI-powered predictive insights for strategic business advantage.'
      ],
      image: (
        <div className="bg-gray-900 p-4 rounded-lg shadow-md border border-gray-800">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-800 p-3 rounded shadow-sm border border-gray-700">
              <div className="text-xs font-medium mb-1 text-gray-300">Sales Prediction</div>
              <div className="h-[120px] w-[120px] mx-auto bg-gradient-to-r from-teal-900 to-emerald-900 rounded-full flex items-center justify-center">
                <div className="h-[80px] w-[80px] bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="font-bold text-teal-400">+18.2%</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-3 rounded shadow-sm border border-gray-700">
              <div className="text-xs font-medium mb-1 text-gray-300">Demand Forecast</div>
              <div className="grid grid-cols-4 gap-1 h-[120px]">
                {[80, 60, 75, 45].map((height, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-end">
                    <div className="w-full bg-teal-800" style={{ height: `${height}%` }}></div>
                    <div className="text-[8px] mt-1 text-gray-300">Q{idx+1}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-800 p-3 rounded shadow-sm border border-gray-700">
              <div className="text-xs font-medium mb-1 text-gray-300">Customer Churn Risk</div>
              <svg className="h-[120px] w-full" viewBox="0 0 150 100" xmlns="http://www.w3.org/2000/svg">
                <polyline
                  points="0,80 25,70 50,75 75,40 100,45 125,35 150,20"
                  fill="none"
                  stroke="#0e9390"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="bg-gray-800 p-3 rounded shadow-sm border border-gray-700">
              <div className="text-xs font-medium mb-1 text-gray-300">Market Segment Growth</div>
              <div className="flex justify-center items-center h-[120px]">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-[120px] h-[120px] rounded-full relative">
                    <div className="absolute inset-0 border-8 border-teal-800 border-r-green-800 border-b-orange-800 border-l-purple-800 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgColor: 'bg-gray-900'
    },
    {
      id: 'projection',
      title: 'Projection Layer',
      heading: 'Intelligence Growth Engine: Projection Layer',
      bulletPoints: [
        'The Projection Layer enables strategic scenario planning and what-if analysis for informed business decision-making.',
        'Create multiple business scenarios by adjusting variables and parameters to visualize potential outcomes.',
        'Optimize resource allocation, budget planning, and investment strategies based on projected financial and operational impacts.'
      ],
      image: (
        <div className="bg-gray-900 p-4 rounded-lg shadow-md border border-gray-800">
          <div className="relative h-[300px] w-[400px]">
            <div className="absolute top-10 left-10 bg-gray-800 p-4 rounded-lg shadow-sm transform rotate-[-5deg] z-10 w-[200px] border border-gray-700">
              <div className="text-xs font-medium mb-2 text-gray-300">Conservative Growth</div>
              <div className="h-[80px] bg-gray-900">
                <svg className="h-full w-full" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
                  <polyline
                    points="0,60 40,55 80,50 120,45 160,40 200,35"
                    fill="none"
                    stroke="#0e9390"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="mt-2 text-[10px] text-gray-400">Projected Growth: 5.8%</div>
            </div>
            <div className="absolute top-[60px] left-[70px] bg-gray-800 p-4 rounded-lg shadow-sm transform rotate-[5deg] z-20 w-[200px] border border-gray-700">
              <div className="text-xs font-medium mb-2 text-gray-300">Moderate Growth</div>
              <div className="h-[80px] bg-gray-900">
                <svg className="h-full w-full" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
                  <polyline
                    points="0,60 40,50 80,40 120,35 160,25 200,15"
                    fill="none"
                    stroke="#4CAF50"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="mt-2 text-[10px] text-gray-400">Projected Growth: 12.4%</div>
            </div>
            <div className="absolute top-[30px] left-[180px] bg-gray-800 p-4 rounded-lg shadow-md transform rotate-[10deg] z-30 w-[200px] border border-gray-700">
              <div className="text-xs font-medium mb-2 text-gray-300">Aggressive Growth</div>
              <div className="h-[80px] bg-gray-900">
                <svg className="h-full w-full" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
                  <polyline
                    points="0,60 40,45 80,30 120,20 160,10 200,5"
                    fill="none"
                    stroke="#F44336"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="mt-2 flex justify-between">
                <div className="text-[10px] text-gray-400">Projected Growth: 24.7%</div>
                <div className="text-[10px] text-orange-400">High Risk</div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgColor: 'bg-gray-900'
    },
    {
      id: 'reporting',
      title: 'Reporting Layer',
      heading: 'Intelligence Growth Engine: Reporting Layer',
      bulletPoints: [
        'The Reporting Layer delivers comprehensive business intelligence through customizable dashboards, reports, and visualizations.',
        'Generate automated reports for different stakeholders with role-based access and personalized views.',
        'Export insights in multiple formats including PDF, Excel, PowerPoint, and interactive web dashboards for seamless communication.'
      ],
      image: (
        <div className="bg-gray-900 p-4 rounded-lg shadow-md border border-gray-800">
          <div className="relative h-[300px] w-[400px]">
            <div className="absolute top-0 left-0 right-0 h-[40px] bg-gray-800 rounded-t-lg flex items-center px-4 border-b border-gray-700">
              <div className="flex space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-600"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-600"></div>
                <div className="h-3 w-3 rounded-full bg-green-600"></div>
              </div>
              <div className="text-white text-xs ml-4">Executive Dashboard</div>
            </div>
            <div className="absolute top-[40px] left-0 right-0 bottom-0 bg-gray-800 p-4 border-t-0 border border-gray-700">
              <div className="h-full grid grid-rows-3 gap-2">
                <div className="bg-gray-900 rounded p-2 border border-gray-700">
                  <div className="text-xs font-medium mb-2 text-gray-300">Key Metrics</div>
                  <div className="flex space-x-2">
                    {['Revenue', 'Profit', 'Customers', 'Growth'].map((item, idx) => (
                      <div key={idx} className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-300 border border-gray-700">{item}</div>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-900 rounded p-2 row-span-2 border border-gray-700">
                  <div className="text-xs font-medium mb-2 text-gray-300">Performance Summary</div>
                  <div className="h-[100px] bg-gray-800 rounded mb-2 border border-gray-700">
                    <svg className="h-full w-full" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
                      <polyline
                        points="0,80 50,75 100,65 150,45 200,50 250,30 300,20"
                        fill="none"
                        stroke="#0e9390"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-[60px] bg-gray-800 rounded border border-gray-700">
                      <svg className="h-full w-full" viewBox="0 0 150 60" xmlns="http://www.w3.org/2000/svg">
                        <rect x="10" y="10" width="20" height="40" fill="#4CAF50" />
                        <rect x="40" y="20" width="20" height="30" fill="#4CAF50" />
                        <rect x="70" y="15" width="20" height="35" fill="#4CAF50" />
                        <rect x="100" y="5" width="20" height="45" fill="#4CAF50" />
                      </svg>
                    </div>
                    <div className="h-[60px] bg-gray-800 rounded border border-gray-700">
                      <svg className="h-full w-full" viewBox="0 0 150 60" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="75" cy="30" r="25" fill="none" stroke="#444" strokeWidth="5" />
                        <path d="M75 5 A25 25 0 0 1 100 30" fill="none" stroke="#0e9390" strokeWidth="5" strokeLinecap="round" />
                        <text x="75" y="35" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white">75%</text>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgColor: 'bg-gray-900'
    }
  ];

  return (
    <section id="layers" className="py-16 lg:py-24">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6">Intelligence Growth Engine: Comprehensive Business Analytics</h2>
        </div>
        
        <TabCarousel tabs={tabContents} autoPlayInterval={6000} />
      </div>
    </section>
  );
};

export default Layers;
