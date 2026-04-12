// const roles = [
//   {
//     title: "Backend / DevOps Engineer",
//     company: "Your company or client",
//     period: "20XX — Present",
//     summary:
//       "Ship reliable APIs, automate deployments, and keep production calm under load.",
//   },
//   {
//     title: "Previous role",
//     company: "Earlier team",
//     period: "20XX — 20XX",
//     summary:
//       "Add your impact: ownership areas, scale, and outcomes you drove.",
//   },
// ];

// const ExperienceSection = () => {
//   return (
//     <section
//       id="experience"
//       className="scroll-mt-24 bg-[#0F172A] text-white py-20 border-t border-gray-800"
//     >
//       <div className="max-w-7xl mx-auto px-4 md:px-8">
//         <div className="mb-16">
//           <p className="text-[#2DD4BF] text-xs tracking-widest mb-2">
//             WHERE I&apos;VE CONTRIBUTED
//           </p>
//           <h2 className="text-3xl md:text-5xl font-bold">
//             Experience <span className="text-gray-300">that scales.</span>
//           </h2>
//         </div>

//         <div className="space-y-8">
//           {roles.map((role, i) => (
//             <article
//               key={i}
//               className="border border-gray-800 rounded-2xl p-6 md:p-8 bg-gradient-to-r from-[#0F172A] to-[#111827] hover:border-[#2DD4BF]/50 transition"
//             >
//               <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
//                 <h3 className="text-xl md:text-2xl font-semibold">{role.title}</h3>
//                 <span className="text-sm text-[#2DD4BF] font-medium shrink-0">
//                   {role.period}
//                 </span>
//               </div>
//               <p className="text-gray-400 text-sm mb-3">{role.company}</p>
//               <p className="text-gray-300 text-sm md:text-base max-w-3xl">
//                 {role.summary}
//               </p>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ExperienceSection;







const roles = [
  {
    title: "Web Application Developer",
    company: "Aucourant Technologies Pvt. Ltd., Dehradun",
    period: "Feb 2025 — Present",
    summary:
      "Developing scalable backend services and REST APIs using Node.js & Express. Integrated AWS S3, optimized databases, and implemented real-time systems using WebSockets.",
  },
  {
    title: "Web Application Developer",
    company: "MYC India Education Pvt. Ltd., Mohali",
    period: "Jan 2024 — Feb 2025",
    summary:
      "Built REST APIs, optimized MySQL databases, and contributed to scalable architecture while collaborating with cross-functional teams.",
  },
  {
    title: "Software Developer Intern",
    company: "Jsimple Technosoft Pvt. Ltd., Noida",
    period: "Jun 2022 — Dec 2022",
    summary:
      "Worked on ASP.NET MVC backend, created stored procedures, and optimized queries while assisting in debugging and testing.",
  },
];

const techStack = {
  Languages: ["JavaScript", "SQL", "HTML", "CSS"],
  Backend: ["Node.js", "Express.js", "Laravel", "REST APIs", "WebSockets"],
  Frontend: ["React.js", "Angular"],
  Databases: ["MongoDB", "MySQL", "MS SQL"],
  DevOps: ["AWS S3", "Docker", "CI/CD", "GitHub Actions"],
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="scroll-mt-24 bg-[#0F172A] text-white py-20 border-t border-gray-800">
     
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* 🔥 Heading */}
        <div className="mb-16">
          <p className="text-[#2DD4BF] text-xs tracking-widest mb-2">
            EXPERIENCE & STACK
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Experience <span className="text-gray-300">that scales.</span>
          </h2>
        </div>

        {/* 🔥 Experience */}
        <div className="space-y-8 mb-20">
          {roles.map((role, i) => (
            <div
              key={i}
              className="border border-gray-800 rounded-2xl p-6 md:p-8 bg-gradient-to-r from-[#0F172A] to-[#111827] hover:border-[#2DD4BF]/50 transition"
            >
              <div className="flex flex-col md:flex-row justify-between gap-2 mb-3">
                <h3 className="text-xl md:text-2xl font-semibold">
                  {role.title}
                </h3>
                <span className="text-sm text-[#2DD4BF]">
                  {role.period}
                </span>
              </div>

              <p className="text-gray-400 text-sm mb-3">
                {role.company}
              </p>

              <p className="text-gray-300 text-sm md:text-base max-w-3xl">
                {role.summary}
              </p>
            </div>
          ))}
        </div>

        {/* 🔥 Tech Stack (Like Image UI) */}
        <div>
          <p className="text-[#2DD4BF] text-xs tracking-widest mb-2">
            TECH STACK
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-10">
            Tools I ship <span className="text-gray-300">production with.</span>
          </h2>

          <div className="space-y-8">
            {Object.entries(techStack).map(([category, items], index) => (
              <div key={index}>
                <p className="text-gray-400 text-xs mb-3 uppercase tracking-wider">
                  {category}
                </p>

                <div className="flex flex-wrap gap-3">
                  {items.map((item, i) => (
                    <span
                      key={i}
                      className="text-xs px-4 py-1.5 rounded-md border border-gray-700 text-gray-300 hover:border-[#2DD4BF] hover:text-[#2DD4BF] transition"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="border-b border-gray-800 mt-6"></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;