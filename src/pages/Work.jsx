const projects = [
    {
      title: "SELMS (LMS Platform)",
      highlight: "20,000+ Users",
      desc: "Scalable LMS platform with video streaming, payments, and async processing.",
      tech: ["MERN", "AWS S3", "RabbitMQ", "CI/CD"],
      points: [
        "Built REST APIs with role-based access",
        "Implemented AWS S3 + HLS video streaming",
        "Used RabbitMQ for background jobs",
        "Integrated Razorpay payment gateway",
        "Handled 20,000+ active users"
      ]
    },
    {
      title: "CRM Web Application",
      highlight: "Enterprise Tool",
      desc: "Role-based CRM system with real-time communication.",
      tech: ["Node.js", "MySQL", "Angular"],
      points: [
        "Developed backend APIs",
        "Designed database workflows",
        "Built role-based dashboards",
        "Implemented WebSocket real-time features"
      ]
    },
    {
      title: "Study Abroad Platform",
      highlight: "Search System",
      desc: "Student eligibility & course search platform.",
      tech: ["Node.js", "MySQL", "Angular"],
      points: [
        "Built eligibility system",
        "Developed course/university search",
        "Optimized backend performance"
      ]
    }
  ];
  
  const Work = () => {
    return (
      <section id="work" className="scroll-mt-24 bg-[#0F172A] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
  
          {/* Heading */}
          <div className="mb-16">
            <p className="text-[#2DD4BF] text-xs tracking-widest mb-2">
              WORK THAT SHIPPED
            </p>
            <h2 className="text-3xl md:text-5xl font-bold">
              Real problems. <br />
              <span className="text-gray-300">Real outcomes.</span>
            </h2>
          </div>
  
          {/* Projects */}
          <div className="space-y-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className="border border-gray-800 rounded-2xl p-6 md:p-10 bg-gradient-to-r from-[#0F172A] to-[#111827] hover:border-[#2DD4BF] transition"
              >
                
                {/* Top */}
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">
                  <h3 className="text-2xl md:text-3xl font-semibold">
                    {project.title}
                  </h3>
                  <span className="text-[#2DD4BF] font-bold text-xl">
                    {project.highlight}
                  </span>
                </div>
  
                {/* Description */}
                <p className="text-gray-400 mb-6 max-w-2xl">
                  {project.desc}
                </p>
  
                {/* Points */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {project.points.map((point, i) => (
                    <p key={i} className="text-sm text-gray-300">
                      • {point}
                    </p>
                  ))}
                </div>
  
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 border border-[#2DD4BF]/40 rounded-full text-[#2DD4BF]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
  
              </div>
            ))}
          </div>
  
        </div>
      </section>
    );
  };
  
  export default Work;