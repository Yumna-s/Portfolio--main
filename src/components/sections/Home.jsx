import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-3xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            ✨ Joyful code ✨
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            Hi, I'm Fethiya Muhajir — a Frontend Developer who enjoys creating
            clean and responsive web interfaces. I'm currently focused on
            learning and building projects that offer smooth performance and a
            great user experience.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/Resume(1).pdf"
              download
              className="px-8 py-3 bg-transparent border border-white/30 text-white rounded-full text-base font-medium flex items-center group hover:border-blue-500/50 transition-colors"
            >
              <span className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-download mr-2 w-4 h-4 group-hover:translate-y-1 transition-transform"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" x2="12" y1="15" y2="3"></line>
                </svg>
                Download Resume
              </span>
            </a>

            <a
              href="https://t.me/YUMNA12"
              target="_blank"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
