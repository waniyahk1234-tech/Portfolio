import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-purple-500 selection:text-white">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <section className="relative min-h-screen flex flex-col justify-center pt-20 pb-12 px-4 sm:px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 sm:w-24rem sm:h-24rem md:w-2x1 md:h-2x1 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6 shadow-[0_0_15px_-3px_rgba(168,85,247,0.3)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            Available for opportunities
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
            Waniyah{" "}
            <span className="bg-linear-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Khan
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-zinc-400 mb-8 font-light max-w-2xl">
            Web Developer • AI & Technology Enthusiast.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="https://www.linkedin.com/in/waniyah-khan-tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-lg transition-all shadow-lg shadow-purple-900/50"
            >
              Hire Me
            </a>

            <a
              href="/waniyah-khan-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-zinc-900 border border-purple-500/20 hover:border-purple-500 text-zinc-200 font-semibold rounded-lg transition-all shadow-[0_0_15px_-5px_rgba(168,85,247,0.2)] hover:shadow-purple-500/30"
            >
              Download Résumé
            </a>

            <a
              href="https://github.com/waniyahk1234-tech"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-zinc-900 border border-purple-500/20 hover:border-purple-500 text-zinc-200 font-semibold rounded-lg transition-all flex items-center gap-2 shadow-[0_0_15px_-5px_rgba(168,85,247,0.2)] hover:shadow-purple-500/30"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12 max-w-3xl">
            {[
              { num: "3+", label: "Projects built" },
              { num: "AI", label: "Built Global Fit AI" },
              { num: "6+", label: "Core stacks & tools" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-zinc-900/50 border border-purple-500/20 rounded-xl p-5 hover:border-purple-500/50 transition-all shadow-[0_0_20px_-5px_rgba(168,85,247,0.15)] hover:shadow-purple-500/20 backdrop-blur-sm"
              >
                <div className="text-2xl font-bold text-purple-400 mb-1">
                  {stat.num}
                </div>
                <div className="text-sm text-zinc-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 flex items-center">
            <span className="text-purple-500 mr-3 font-mono">01.</span> About Me
          </h2>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <div className="md:col-span-2 space-y-4 text-zinc-300 leading-relaxed text-base sm:text-lg">
              <p>
                I'm Waniyah, a student developer who enjoys turning ideas into
                things people can actually use. I started with frontend
                development and gradually found myself exploring the entire
                stack; from building responsive React interfaces to working with
                Node.js, MongoDB, APIs, and generative AI.
              </p>
              <p>
                I especially enjoy experimenting with AI and figuring out how it
                can make everyday tools more useful. My hackathon project,
                Global Fit AI, is one example of that: an AI-powered product
                discovery platform I built to make finding products across
                international e-commerce sites faster and easier.
              </p>
              <p>
                I'm still learning, building, and occasionally breaking things
                along the way; but that's honestly my favorite part of
                development. I'm always looking for the next idea worth turning
                into a project!
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  title: "End-to-End Ownership",
                  desc: "From React UI to Express APIs and MongoDB models — I take features from idea to deployed product.",
                },
                {
                  title: "AI-Native Builder",
                  desc: "Comfortable wiring LLMs, Gemini, and image understanding into real, useful product flows.",
                },
                {
                  title: "Clean & Scalable Code",
                  desc: "Readable components, strong typing habits, and a bias for good UX, accessibility, and quick iteration.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-zinc-900 border border-purple-500/20 rounded-xl p-5 hover:border-purple-500/50 transition-all shadow-[0_0_20px_-5px_rgba(168,85,247,0.15)] hover:shadow-purple-500/20"
                >
                  <h3 className="text-white font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="py-16 sm:py-24 px-4 sm:px-6 bg-zinc-900/20"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 flex items-center">
            <span className="text-purple-500 mr-3 font-mono">02.</span>{" "}
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                title: "Languages",
                items: ["JavaScript (ES6+)", "HTML5", "CSS3"],
              },
              {
                title: "Frontend",
                items: ["React", "Tailwind CSS", "Material UI"],
              },
              {
                title: "Backend",
                items: ["Node.js", "Express.js", "REST APIs"],
              },
              { title: "Databases", items: ["MongoDB", "Mongoose"] },
              {
                title: "AI Integration",
                items: ["Gemini API", "OpenRouter", "LLMs"],
              },
              {
                title: "Tools",
                items: ["Git", "GitHub", "VS Code", "Postman", "npm"],
              },
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all group shadow-[0_0_20px_-5px_rgba(168,85,247,0.15)] hover:shadow-purple-500/20"
              >
                <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {skill.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-zinc-800 text-zinc-300 text-sm rounded-md border border-zinc-700 group-hover:border-purple-500/30 transition-all"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 flex items-center">
            <span className="text-purple-500 mr-3 font-mono">03.</span> Featured
            Projects
          </h2>

          <div className="space-y-6 sm:space-y-8">
            {[
              {
                tag: "Featured · Gemini XPRIZE Hackathon",
                title: "Global Fit AI",
                desc: "An AI-powered international product discovery platform. Users find products across global e-commerce sites through natural-language and image-based search, including outfit detection that locates purchasable alternatives.",
                tech: ["React", "Node.js", "Gemini API", "MongoDB"],
                link: "https://devpost.com/software/global-fit-ai",
                linkText: "View on Devpost",
                type: "Web App",
                image: "/global-fit-ai.png",
              },
              {
                tag: "Personal Project",
                title: "Snack Times",
                desc: "A snappy snack-ordering experience for browsing, picking, and tracking snack orders with a clean, responsive interface built in React.",
                tech: ["React", "Tailwind CSS", "JavaScript"],
                link: "https://snack-times-5hf9.vercel.app/",
                linkText: "Live Demo",
                type: "Web App",
                image: "/snack-times.png",
              },
              {
                tag: "Personal Project",
                title: "Campus Event Tracker",
                desc: "A campus event management and RSVP platform for creating events, tracking attendance, and keeping students in the loop — built with a React + Node stack.",
                tech: ["React", "Node.js", "Express", "REST API"],
                link: "https://campus-event-tracker-three.vercel.app/",
                linkText: "Live Demo",
                type: "Web App",
                image: "/campus-event-tracker.png",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-purple-500/20 rounded-2xl p-6 sm:p-8 hover:border-purple-500/50 transition-all group shadow-[0_0_20px_-5px_rgba(168,85,247,0.15)] hover:shadow-purple-500/20"
              >
                <div className="mb-6 overflow-hidden rounded-xl border border-zinc-700/50 bg-zinc-800/30 group-hover:border-purple-500/30 transition-all">
                  <img
                    src={project.image}
                    alt={`${project.title} Screenshot`}
                    className="w-full aspect-video object-cover object-top group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.innerHTML =
                        '<div class="w-full aspect-video flex items-center justify-center text-zinc-600 text-sm">Screenshot coming soon</div>';
                    }}
                  />
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                  <div>
                    <span className="text-purple-400 text-sm font-medium mb-2 block">
                      {project.tag}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <span className="mt-2 sm:mt-0 px-3 py-1 bg-zinc-800 text-zinc-300 text-xs rounded-full border border-zinc-700">
                    {project.type}
                  </span>
                </div>
                <p className="text-zinc-400 mb-6 leading-relaxed max-w-3xl text-sm sm:text-base">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-zinc-950 text-zinc-400 text-xs rounded-md border border-zinc-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium transition-colors"
                >
                  {project.linkText} <span className="ml-2">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="py-16 sm:py-24 px-4 sm:px-6 bg-zinc-900/20"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 flex items-center">
            <span className="text-purple-500 mr-3 font-mono">04.</span>{" "}
            Developer Experience
          </h2>

          <div className="space-y-8">
            {[
              {
                role: "Developer · Global Fit AI",
                org: "GEMINI XPRIZE Hackathon",
                date: "May 2026 - Aug 2026",
                desc: "Built and sumbitted an AI-powered international product discovery platform with natural-language and image-based search across global e-commerce sites.",
              },
              {
                role: "Full Stack Developer · Snack Times",
                org: "Personal Project",
                date: "2026",
                desc: "Designed and developed a snappy snack-ordering experience — browsing, picking, and tracking orders with a clean, responsive React interface.",
              },
              {
                role: "Full Stack Developer · Campus Event Tracker",
                org: "Personal Project",
                date: "2026",
                desc: "Built a campus event management and RSVP platform for creating events, tracking attendance, and keeping students in the loop with a React + Node stack.",
              },
            ].map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-2 border-purple-500/30 hover:border-purple-500 transition-colors group"
              >
                <div className="absolute -left-2.5 top-0 w-4 h-4 rounded-full bg-zinc-950 border-2 border-purple-500/50 group-hover:border-purple-400 group-hover:bg-purple-500/20 group-hover:shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-all"></div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {exp.role}
                  </h3>
                  <span className="text-sm text-purple-400 font-medium font-mono mt-1 sm:mt-0">
                    {exp.date}
                  </span>
                </div>
                <p className="text-zinc-400 mb-2 font-medium">{exp.org}</p>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {exp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 flex items-center">
            <span className="text-purple-500 mr-3 font-mono">05.</span> Contact
          </h2>

          <div className="bg-zinc-900 border border-purple-500/20 rounded-2xl p-6 sm:p-8 md:p-12 text-center md:text-left shadow-[0_0_30px_-5px_rgba(168,85,247,0.15)]">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Let's build something.
            </h3>
            <p className="text-zinc-400 mb-8 max-w-xl mx-auto md:mx-0 text-sm sm:text-base">
              Open to internships, collaborations, and freelance web-development
              work. Reach out anytime — I usually reply within a day.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto md:mx-0">
              {[
                {
                  label: "Email",
                  value: "waniyahk1234@gmail.com",
                  href: "mailto:waniyahk1234@gmail.com",
                },
                {
                  label: "Phone",
                  value: "+92 343 1206453",
                  href: "tel:+923431206453",
                },
                {
                  label: "LinkedIn",
                  value: "in/waniyah-khan-tech",
                  href: "https://www.linkedin.com/in/waniyah-khan-tech/",
                },
                {
                  label: "GitHub",
                  value: "waniyahk1234-tech",
                  href: "https://github.com/waniyahk1234-tech",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={
                    item.href.startsWith("http") && item.href !== "#"
                      ? "_blank"
                      : "_self"
                  }
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-zinc-950 border border-purple-500/20 rounded-lg hover:border-purple-500/50 hover:bg-zinc-900 transition-all group shadow-[0_0_15px_-5px_rgba(168,85,247,0.1)] hover:shadow-purple-500/20"
                >
                  <div className="flex flex-col">
                    <span className="text-xs text-zinc-500 uppercase tracking-wider mb-1">
                      {item.label}
                    </span>
                    <span className="text-zinc-200 font-medium group-hover:text-purple-400 transition-colors text-sm sm:text-base">
                      {item.value}
                    </span>
                  </div>
                  <span className="text-purple-500 text-xl group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-zinc-800 bg-zinc-950 text-center">
        <p className="text-zinc-600 text-sm">
          © 2026 Waniyah Khan. Built with React & Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}

export default App;
