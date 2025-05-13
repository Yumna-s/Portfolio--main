import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            On Progress Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Babul kheyr NGO</h3>
              <img
                src="/babul.jpg"
                alt="Babul Kheyr NGO"
                className="w-full max-w-3xl mx-auto rounded-lg shadow-lg mb-6"
              />
              <p className="text-gray-400 mb-4">
                Designed and developed a user-friendly platform for a charitable
                organization in Addis Ababa, focusing on accessibility and
                impact. The site guides visitors to learn about the cause,
                donate online seamlessly, and feel inspired to visit and support
                in person.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "HTML", "CSS", "Javascript"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Portfolio Site</h3>
              <img
                src="/portfolio.jpg"
                alt="Porrtfolio"
                className="w-full max-w-3xl mx-auto rounded-lg shadow-lg mb-6"
              />
              <p className="text-gray-400 mb-4">
                A modern, responsive portfolio designed to showcase my projects,
                skills, and personality. The portfolio features a clean and
                intuitive layout with smooth animations, ensuring a seamless
                user experience across devices. It’s built with a mobile-first
                approach to guarantee optimal viewing on all screen sizes, from
                desktop to mobile. This project highlights my ability to create
                visually appealing and functional web applications, with a focus
                on user experience and modern design principles.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Tailwind", "javascript", "HTML"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">E-Commerce Web App</h3>
              <img
                src="/ecommerce.jpg"
                alt="ecommerce"
                className="w-full max-w-3xl mx-auto rounded-lg shadow-lg mb-6"
              />
              <p className="text-gray-400 mb-4">
                This project is a modern e-commerce platform built with a
                responsive and visually appealing user interface. It includes
                secure payment integration using gateways like Stripe or PayPal
                to ensure safe transactions. The system supports a customizable
                product inventory, allowing easy management of listings,
                categories, and pricing. With user authentication, a functional
                shopping cart, and a smooth checkout process, the platform
                delivers a complete and reliable online shopping experience
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Next.js", "JavaScript", "React"].map((tech) => (
                  <span
                    key={tech}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
