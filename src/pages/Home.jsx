import Work from "./Work";
import ExperienceSection from "../components/ExperienceSection";
import ContactSection from "../components/ContactSection";

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="scroll-mt-24 min-h-screen bg-[#0F172A] text-white flex items-center"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-gray-200">Rajat</span> <br />
              <span className="text-[#2DD4BF]">Saini</span>
            </h1>

            <p className="text-gray-400 text-lg max-w-md">
              I build scalable backend systems & DevOps infrastructure that power modern
              applications.
            </p>

            <p className="text-gray-500 text-sm">
              Hire me, and I promise to break things only in staging 😄
            </p>

            <div className="flex gap-4 pt-4 flex-wrap">
              <a
                href="#work"
                className="inline-flex items-center justify-center bg-[#2DD4BF] hover:bg-[#14B8A6] text-black px-6 py-3 rounded-full font-semibold transition"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center border border-gray-600 px-6 py-3 rounded-full hover:border-[#2DD4BF] hover:text-[#2DD4BF] transition"
              >
                Get In Touch
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[#2DD4BF]/20 blur-2xl" />
              <img
                src="/src/assets/rajat_saini.png"
                alt="profile"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-[#2DD4BF] shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Work />
      <ExperienceSection />
      <ContactSection />
    </>
  );
};

export default Home;
