const ContactSection = () => {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-[#0F172A] text-white py-20 border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="text-[#2DD4BF] text-xs tracking-widest mb-2">GET IN TOUCH</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Let&apos;s build <span className="text-gray-300">something solid.</span>
          </h2>
          <p className="text-gray-400">
            Open to roles and collaborations in backend engineering and DevOps. Replace the
            placeholders below with your real links.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap gap-4">
          <a
            href="mailto:you@example.com"
            className="inline-flex items-center justify-center border border-gray-600 hover:border-[#2DD4BF] hover:text-[#2DD4BF] px-6 py-3 rounded-full text-sm font-medium transition"
          >
            Email me
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#2DD4BF] hover:bg-[#14B8A6] text-black px-6 py-3 rounded-full text-sm font-semibold transition"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
