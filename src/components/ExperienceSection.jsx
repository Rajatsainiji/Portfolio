const roles = [
  {
    title: "Backend / DevOps Engineer",
    company: "Your company or client",
    period: "20XX — Present",
    summary:
      "Ship reliable APIs, automate deployments, and keep production calm under load.",
  },
  {
    title: "Previous role",
    company: "Earlier team",
    period: "20XX — 20XX",
    summary:
      "Add your impact: ownership areas, scale, and outcomes you drove.",
  },
];

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="scroll-mt-24 bg-[#0F172A] text-white py-20 border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-16">
          <p className="text-[#2DD4BF] text-xs tracking-widest mb-2">
            WHERE I&apos;VE CONTRIBUTED
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Experience <span className="text-gray-300">that scales.</span>
          </h2>
        </div>

        <div className="space-y-8">
          {roles.map((role, i) => (
            <article
              key={i}
              className="border border-gray-800 rounded-2xl p-6 md:p-8 bg-gradient-to-r from-[#0F172A] to-[#111827] hover:border-[#2DD4BF]/50 transition"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                <h3 className="text-xl md:text-2xl font-semibold">{role.title}</h3>
                <span className="text-sm text-[#2DD4BF] font-medium shrink-0">
                  {role.period}
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-3">{role.company}</p>
              <p className="text-gray-300 text-sm md:text-base max-w-3xl">
                {role.summary}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
