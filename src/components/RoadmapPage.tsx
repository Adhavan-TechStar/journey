// import { useState, useEffect } from 'react';

// interface RoadmapPageProps {
//   onNavigate: () => void;
//   onNavigateToFuture: () => void; // Added missing prop
// }

// const RoadmapPage = ({ onNavigate, onNavigateToFuture }: RoadmapPageProps) => {
//   const [expandedSection, setExpandedSection] = useState<string | null>(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const toggleSection = (section: string) => {
//     setExpandedSection(expandedSection === section ? null : section);
//   };

//   const roadmapData = [
//     {
//       id: 'angular',
//       title: 'Angular - C#',
//       icon: '🅰️',
//       color: 'linear-gradient(135deg, #dd0031, #c3002f)',
//       items: [
//         {
//   title: 'E-commerce Website',
//   description: `Built a dynamic full-stack e-commerce platform with secure authentication, real-time updates, and admin controls. Enabled seamless product browsing, ordering, and management.`,
//   subitems: [
//     'Technologies Used:\nFrontend: Angular, HTML5, CSS3\nBackend: C# (.NET Core), SQL Server',
//     'Authentication & Authorization:\nJWT-based secure login and registration\nRole-based access for users and admins',
//     'Angular Frontend:\nDeveloped reusable components with RxJS for state management\nImplemented routing, reactive forms, and animations for responsive UI',
//     'C# Backend (RESTful APIs):\nBuilt robust .NET Core APIs for products, users, orders, and payments\nEnsured server-side validation and secure data handling',
//     'Database:\nIntegrated SQL Server with Entity Framework ORM\nEnabled CRUD, real-time updates, and relational integrity',
//     'Key Features:\nSmart shopping cart, product search and filters\nLive order tracking and admin dashboard for product/order management'
//   ]
// }
//       ]
//     },
//     {
//       id: 'powerplatform',
//       title: 'Power Platform ',
//       icon: '⚡',
//       color: 'linear-gradient(135deg, #742774, #9c27b0)',
//       items: [
//         {
//           title: 'SharePoint ',
//           description: 'Communication Site - Employee Engagement Hub: Created collaborative spaces for team interaction and knowledge sharing',
//           subitems: [
//             'Team Site - Event Screen: Developed event management system with calendar integration',
//             'SPFX - Employee Engagement Board: Built custom React-based web parts for enhanced user experience'
//           ]
//         },
//         {
//           title: 'Power Apps ',
//           description: 'Canvas App - Employee Service Request Portal: Designed intuitive mobile-first applications for business processes',
//           subitems: [
//             'Model Driven App: Created data-driven applications with complex business logic and workflows'
//           ]
//         },
//         {
//           title: 'Power Automate Flow',
          
//           description: 'AI Builder Integration: Developed automated workflows extracting data with confidence scoring for SharePoint integration',
// },
//         {
//           title: 'Microsoft Copilot Studio',
//           description: 'Custom Chatbot Creation: Built intelligent conversational interfaces with personalized responses and natural language processing',

//         },
//         {
//           title: 'Power BI Analytics',
//           description: 'Advanced Reporting: Created comprehensive Pixar BI reports with DAX functions and interactive visualizations',
          
//         }
//       ]
//     },
//     {
//       id: 'tvscapital',
//       title: 'TVS Capital Demo Project',
//       icon: '🏢',
//       color: 'linear-gradient(135deg, #1976d2, #42a5f5)',
//       items: [
//         {
//           title: 'Power Automate Flow',
//           description: 'Button Trigger Implementation: Developed automated workflows with manual triggers for document processing'
//         },
//         {
//           title: 'AI Builder Integration',
//           description: 'Key Value Extraction: Implemented intelligent document processing with machine learning models for data extraction'
//         }
//       ]
//     },
//     {
//       id: 'documentor',
//       title: 'Documentor Application',
//       icon: '📄',
//       color: 'linear-gradient(135deg, #388e3c, #66bb6a)',
//       items: [
//         {
//           title: '🧠 DocQmentor',
//           description: `🔧 Summary of My Work:
// I developed core components of the DocQmentor application, a smart document processing system built on Azure. My responsibilities covered backend integration, AI document analysis, data persistence, and React frontend connectivity.`,
//           subitems: [
//             `⚙️ Azure Function App (Node.js Backend)\nBuilt secure and scalable APIs using Azure Function App to handle:\n- File processing triggers\n- REST endpoints for frontend to GET/POST extracted data\n- Integrated with Azure Blob Storage, Document Intelligence, and Cosmos DB\n- Handled API-level error handling, logging, and JSON transformation logic`,
//             `🧠 Azure AI Document Intelligence\n- Integrated Azure Document Intelligence to extract structured data from uploaded PDF invoices\n- Parsed key fields like vendor name, invoice number, date, total, VAT, etc.\n- Captured and stored confidence scores for each field to validate extraction accuracy`,
//             `🗃️ Azure Cosmos DB\n- Stored extracted document data as structured JSON in Cosmos DB (NoSQL)\n- Enabled high-speed querying and real-time access from frontend\n- Implemented proper schema mapping and ensured document integrity for each upload`,
//             `💻 React Frontend Integration\n- Connected React dashboard to backend APIs for:\n  • Uploading files\n  • Viewing processed document data in a dynamic table\n- Created responsive pages like Dashboard (Upload) and Data View (Table) using React, HTML, and CSS\n- Displayed extraction status, field values, and confidence scores with intuitive UI feedback`
//           ]
//         }
//       ]
//     }
//     // ... (keep all your existing roadmapData items exactly as they are)
//   ];

//   return (
//     <div className="roadmap-container">
//       <div className="stars"></div>
//       <div className="twinkling"></div>

//       {/* Top-right logo */}
//       <img 
//         src="/techstar_logo.png" 
//         alt="TechStar Logo" 
//         style={{
//           position: 'absolute',
//           top: '20px',
//           right: '20px',
//           width: '80px',
//           height: 'auto',
//           zIndex: 10,
//         }}
//       />

//       <header className="roadmap-header">
//         <button className="back-button" onClick={onNavigate}>
//           ← Back to Intro
//         </button>
//         <h1 className="roadmap-title">My 6-Month Learning Journey</h1>
//         <div className="progress-bar">
//           <div className="progress-fill"></div>
//         </div>
//       </header>

//       <main className={`roadmap-main ${isVisible ? 'fade-in' : ''}`}>
//         <div className="timeline">
//           {roadmapData.map((section, index) => (
//             <div 
//               key={section.id} 
//               className={`timeline-item ${isVisible ? 'slide-in' : ''}`}
//               style={{ animationDelay: `${index * 0.2}s` }}
//             >
//               <div className="timeline-marker">
//                 <span className="timeline-icon">{section.icon}</span>
//               </div>
              
//               <div 
//                 className={`timeline-content ${expandedSection === section.id ? 'expanded' : ''}`}
//                 style={{ background: section.color }}
//               >
//                 <div 
//                   className="timeline-header"
//                   onClick={() => toggleSection(section.id)}
//                 >
//                   <h2>{section.title}</h2>
//                   <span className="expand-icon">
//                     {expandedSection === section.id ? '−' : '+'}
//                   </span>
//                 </div>
                
//                 {expandedSection === section.id && (
//                   <div className="timeline-details">
//                     {section.items.map((item, itemIndex) => (
//                       <div key={itemIndex} className="detail-item">
//                         <h3>{item.title}</h3>
//                         <p>{item.title === '🧠 DocQmentor' ? item.description.split('\n').map((line, i) => (
//                           <span key={i}>{line}<br/></span>
//                         )) : item.description}</p>
//                         {item.subitems && (
//                           <ul className="subitems">
//                             {item.subitems.map((subitem, subIndex) => (
//                               <li key={subIndex}>
//                                 {subitem.split('\n').map((line, i) => (
//                                   <span key={i}>{line}<br/></span>
//                                 ))}
//                               </li>
//                             ))}
//                           </ul>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="button-group">
//           <button 
//             className="cta-button future-button"
//             onClick={onNavigateToFuture}
//           >
//             <span>View My Future Plans</span>
//             <div className="button-shine"></div>
//           </button>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default RoadmapPage;

import { useState, useEffect } from 'react';

interface RoadmapPageProps {
  onNavigate: () => void;
  onNavigateToFuture: () => void;
}

const RoadmapPage = ({ onNavigate, onNavigateToFuture }: RoadmapPageProps) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const roadmapData = [
    {
    id: 'angular',
    title: 'Angular - C#',
    icon: '🛍️',
    color: 'linear-gradient(135deg, #ff416c, #ff4b2b)',
    items: [
      {
        title: '🛒 Project Summary',
        description: 'Built a dynamic full-stack e-commerce platform with secure authentication, real-time updates, and admin controls.'
      },
      {
        title: '🧰 Tech Stack',
        description: `Frontend: Angular, HTML5, CSS3\nBackend: C# (.NET Core), SQL Server`
      },
      {
        title: '🔐 Authentication & Authorization',
        description: `Implemented JWT-based secure login and role-based access.\nSeparate dashboards for users and admins.`
      },
      {
        title: '🧩 Angular Frontend',
        description: `Created reusable components, routing, reactive forms, and animations using Angular.\nUsed RxJS for state management.`
      },
      {
        title: '🔧 .NET Core Backend',
        description: `Built RESTful APIs for products, users, orders, and payments.\nEnsured server-side validation and secure data handling.`
      },
      {
        title: '🗄️ SQL Server Database',
        description: `Used Entity Framework ORM for integration.\nEnabled CRUD operations with relational integrity and live updates.`
      },
      {
        title: '✨ Key Features',
        description: `Smart cart, product filters, search, order tracking.\nAdmin dashboard for product/order management.`
      }
    ]
  },
    {
      id: 'powerplatform',
      title: 'Power Platform ',
      icon: '⚡',
      color: 'linear-gradient(135deg, #742774, #9c27b0)',
      items: [
        {
          title: 'SharePoint ',
          description: 'Communication Site - Employee Engagement Hub: Created collaborative spaces for team interaction and knowledge sharing',
          subitems: [
            'Team Site - Event Screen: Developed event management system with calendar integration',
            'SPFX - Employee Engagement Board: Built custom React-based web parts for enhanced user experience'
          ]
        },
        {
          title: 'Power Apps ',
          description: 'Canvas App - Employee Service Request Portal: Designed intuitive mobile-first applications for business processes',
          subitems: [
            'Model Driven App: Created data-driven applications with complex business logic and workflows'
          ]
        },
        {
          title: 'Power Automate Flow',
          description: 'AI Builder Integration: Developed automated workflows extracting data with confidence scoring for SharePoint integration',
        },
        {
          title: 'Microsoft Copilot Studio',
          description: 'Custom Chatbot Creation: Built intelligent conversational interfaces with personalized responses and natural language processing',
        },
        {
          title: 'Power BI Analytics',
          description: 'Advanced Reporting: Created comprehensive Pixar BI reports with DAX functions and interactive visualizations',
        }
      ]
    },
    {
      id: 'tvscapital',
      title: 'TVS Capital Demo Project',
      icon: '🏢',
      color: 'linear-gradient(135deg, #1976d2, #42a5f5)',
      items: [
        {
          title: 'Power Automate Flow',
          description: 'Button Trigger Implementation: Developed automated workflows with manual triggers for document processing'
        },
        {
          title: 'AI Builder Integration',
          description: 'Key Value Extraction: Implemented intelligent document processing with machine learning models for data extraction'
        }
      ]
    },
    {
//       id: 'documentor',
//       title: 'Documentor Application',
//       icon: '📄',
//       color: 'linear-gradient(135deg, #388e3c, #66bb6a)',
//       items: [
//         {
//           title: '🧠 DocQmentor',
//           description: `🔧 Summary of My Work:
// I developed core components of the DocQmentor application, a smart document processing system built on Azure. My responsibilities covered backend integration, AI document analysis, data persistence, and React frontend connectivity.`,
//           subitems: [
//             `⚙️ Azure Function App (Node.js Backend)\nBuilt secure and scalable APIs using Azure Function App to handle:\n- File processing triggers\n- REST endpoints for frontend to GET/POST extracted data\n- Integrated with Azure Blob Storage, Document Intelligence, and Cosmos DB\n- Handled API-level error handling, logging, and JSON transformation logic`,
//             `🧠 Azure AI Document Intelligence\n- Integrated Azure Document Intelligence to extract structured data from uploaded PDF invoices\n- Parsed key fields like vendor name, invoice number, date, total, VAT, etc.\n- Captured and stored confidence scores for each field to validate extraction accuracy`,
//             `🗃️ Azure Cosmos DB\n- Stored extracted document data as structured JSON in Cosmos DB (NoSQL)\n- Enabled high-speed querying and real-time access from frontend\n- Implemented proper schema mapping and ensured document integrity for each upload`,
//             `💻 React Frontend Integration\n- Connected React dashboard to backend APIs for:\n  • Uploading files\n  • Viewing processed document data in a dynamic table\n- Created responsive pages like Dashboard (Upload) and Data View (Table) using React, HTML, and CSS\n- Displayed extraction status, field values, and confidence scores with intuitive UI feedback`
//           ]
//         }
    
    id: 'docqmentor',
    title: '🧠 DocQmentor Application',
    icon: '🧠',
    color: 'linear-gradient(135deg, #4e54c8, #8f94fb)',
    items: [
      {
        title: '🔧 Project Summary',
        description: 'Developed core components of a smart document processing app using Azure services, covering backend logic, AI analysis, data persistence, and frontend integration.'
      },
      {
        title: '⚙️ Azure Function App (Node.js Backend)',
        description: `Built secure and scalable APIs for file processing triggers and REST endpoints.\nIntegrated with Azure Blob Storage, Document Intelligence, and Cosmos DB.\nHandled logging, error handling, and JSON transformation.`
      },
      {
        title: '🧠 Azure AI Document Intelligence',
        description: `Used AI to extract structured data from PDFs (invoices).\nParsed key fields like vendor name, date, invoice number, total, and VAT.\nCaptured confidence scores to validate accuracy.`
      },
      {
        title: '🗃️ Azure Cosmos DB',
        description: `Stored extracted data as structured JSON.\nEnabled fast querying and real-time frontend access.\nImplemented schema mapping and ensured document integrity.`
      },
      {
        title: '💻 React Frontend Integration',
        description: `Connected frontend to backend for file uploads and data views.\nBuilt responsive UI with upload dashboard and dynamic data tables.\nDisplayed field values, extraction status, and confidence scores.`
      }
    
      ]
    }
  ];

  return (
    <div className="roadmap-container">
      <div className="stars"></div>
      <div className="twinkling"></div>

      <img
        src="/techstar_logo.png"
        alt="TechStar Logo"
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          width: '80px',
          height: 'auto',
          zIndex: 10,
        }}
      />

      <header className="roadmap-header">
        <button className="back-button" onClick={onNavigate}>
          ← Back to Intro
        </button>
        <h1 className="roadmap-title">My 6-Month Learning Journey</h1>
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
      </header>

      <main className={`roadmap-main ${isVisible ? 'fade-in' : ''}`}>
        <div className="timeline">
          {roadmapData.map((section, index) => (
            <div
              key={section.id}
              className={`timeline-item ${isVisible ? 'slide-in' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-marker">
                <span className="timeline-icon">{section.icon}</span>
              </div>

              <div
                className={`timeline-content ${expandedSection === section.id ? 'expanded' : ''}`}
                style={{ background: section.color }}
              >
                <div
                  className="timeline-header"
                  onClick={() => toggleSection(section.id)}
                >
                  <h2>{section.title}</h2>
                  <span className="expand-icon">
                    {expandedSection === section.id ? '−' : '+'}
                  </span>
                </div>

                {expandedSection === section.id && (
                  <div className="timeline-details carousel-container">
                    <div className="carousel-track">
                      {section.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="carousel-slide">
                          <h3>{item.title}</h3>
                          <p>
                            {item.title === '🧠 DocQmentor'
                              ? item.description.split('\n').map((line, i) => (
                                  <span key={i}>{line}<br /></span>
                                ))
                              : item.description}
                          </p>
                          {item.subitems && (
                            <ul className="subitems">
                              {item.subitems.map((subitem, subIndex) => (
                                <li key={subIndex}>
                                  {subitem.split('\n').map((line, i) => (
                                    <span key={i}>{line}<br /></span>
                                  ))}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="button-group">
          <button
            className="cta-button future-button"
            onClick={onNavigateToFuture}
          >
            <span>View My Future Plans</span>
            <div className="button-shine"></div>
          </button>
        </div>
      </main>
    </div>
  );
};

export default RoadmapPage;
