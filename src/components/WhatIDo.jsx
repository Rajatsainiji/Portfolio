const sections = [
    {
      title: "Cloud Infrastructure",
      desc: "Production-grade AWS systems with S3, CI/CD pipelines, Dockerized deployments, and scalable architecture.",
      tech: ["AWS", "S3", "Docker", "CI/CD", "GitHub Actions"]
    },
    {
      title: "Backend Systems",
      desc: "Scalable REST APIs, real-time systems using WebSockets, and optimized database queries for high performance.",
      tech: ["Node.js", "Express.js", "WebSockets", "REST APIs", "MySQL"]
    },
    {
      title: "Real-time & Async Systems",
      desc: "Event-driven architecture using queues and background jobs with RabbitMQ for scalable async processing.",
      tech: ["RabbitMQ", "Queues", "Async Jobs", "Event-driven"]
    },
    {
      title: "Product Engineering",
      desc: "Full-stack applications using React & Angular with production-ready backend integration.",
      tech: ["React.js", "Angular", "MongoDB", "Sequelize"]
    }
  ];
  
  const WhatIDo = () => {
    return (
      <section className="bg-[#0F172A] text-white py-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
  
          {/* Heading */}
          <div className="mb-16">
            <p className="text-[#2DD4BF] text-xs tracking-widest mb-2">
              WHAT I DO
            </p>
  
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Stack. Ship. <br />
              <span className="text-gray-300">Scale.</span>
            </h2>
          </div>
  
          {/* Sections */}
          <div className="space-y-6">
  
            {sections.map((item, index) => (
              <div
                key={index}
                className="group relative border-b border-gray-800 transition duration-300"
              >
  
                {/* LEFT ACCENT LINE */}
                <div className="absolute left-0 top-0 h-full w-[2px] bg-[#2DD4BF] opacity-0 group-hover:opacity-100 transition duration-300"></div>
  
                {/* CONTENT BOX */}
                <div className="p-5 md:p-6 rounded-xl transition duration-300 group-hover:bg-[#2DD4BF]/5 group-hover:translate-x-1">
  
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
  
                    {/* LEFT CONTENT */}
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-[#2DD4BF] transition">
                        {item.title}
                      </h3>
  
                      <p className="text-gray-400 text-sm max-w-2xl">
                        {item.desc}
                      </p>
                    </div>
  
                    {/* RIGHT TAGS */}
                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 border border-[#2DD4BF]/40 rounded-md text-[#2DD4BF] transition group-hover:bg-[#2DD4BF]/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
  
                  </div>
                </div>
  
              </div>
            ))}
  
          </div>
  
        </div>
      </section>
    );
  };
  
  export default WhatIDo;