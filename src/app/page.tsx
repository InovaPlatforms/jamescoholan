export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent leading-tight">
              James Coholan
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-light mb-8">
              Technologist & Digital Innovation Expert
            </p>
          </div>
          
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Transforming ideas into digital reality through cutting-edge technology solutions, 
            strategic leadership, and innovative thinking that drives meaningful business impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="#about"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore My Work
            </a>
            <a 
              href="#contact"
              className="px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-white hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">About Me</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-white">
                Driving Digital Transformation
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                As a seasoned technologist, I specialize in architecting and implementing 
                cutting-edge digital solutions that transform how businesses operate and engage 
                with their customers.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                My expertise spans across emerging technologies, strategic planning, and 
                team leadership, with a proven track record of delivering innovative solutions 
                that drive measurable business results.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I believe in the power of technology to create meaningful change and am 
                passionate about building solutions that make a real difference.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <h4 className="text-xl font-semibold text-white mb-3">Innovation Focus</h4>
                <p className="text-gray-300">Pioneering next-generation solutions with emerging technologies</p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <h4 className="text-xl font-semibold text-white mb-3">Strategic Leadership</h4>
                <p className="text-gray-300">Guiding teams and organizations through digital transformation</p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <h4 className="text-xl font-semibold text-white mb-3">Results-Driven</h4>
                <p className="text-gray-300">Delivering measurable impact through technology solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise Section */}
      <section id="expertise" className="py-20 px-6 sm:px-8 lg:px-12 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Expertise</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive technology leadership across multiple domains
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Digital Innovation",
                description: "Identifying and implementing cutting-edge solutions",
                icon: "🚀"
              },
              {
                title: "Technology Leadership",
                description: "Strategic planning and team management",
                icon: "👥"
              },
              {
                title: "Software Architecture",
                description: "Designing scalable and robust systems",
                icon: "🏗️"
              },
              {
                title: "Digital Transformation",
                description: "Modernizing business processes and systems",
                icon: "⚡"
              },
              {
                title: "Emerging Technologies",
                description: "AI, ML, blockchain, and next-gen solutions",
                icon: "🔬"
              },
              {
                title: "Strategic Planning",
                description: "Long-term technology roadmap development",
                icon: "📊"
              }
            ].map((skill, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{skill.title}</h3>
                <p className="text-gray-300">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-t from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Let's Connect</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Ready to discuss your next digital innovation project? 
            Let's explore how we can transform your ideas into reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a 
              href="mailto:contact@jamescoholan.com"
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              Email Me
            </a>
            <a 
              href="https://linkedin.com/in/jamescoholan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-white hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"></path>
              </svg>
              LinkedIn
            </a>
          </div>
          
          <div className="flex justify-center space-x-8 text-gray-500">
            <a href="https://github.com/jamescoholan" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://twitter.com/jamescoholan" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500">
            © 2024 James Coholan. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
