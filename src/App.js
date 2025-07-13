import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

// Main App Component
const App = () => {
  const [projects, setProjects] = useState([]);
  const GITHUB_USERNAME = 'ArmandoSaboia';

  // Placeholder for image. Please place your profile image (e.g., profile.jpg) in public/assets/.
  const imageDataUrl = "/assets/profile.jpg";

  // Hardcoded project data as a fallback
  const fallbackProjects = [
    { id: 1, name: 'Real Time Stock Market Analysis', html_url: 'https://github.com/ArmandoSaboia/realtime-stock-analysis', description: 'A project for real-time stock market analysis.' },
    { id: 2, name: '', html_url: '', description: '' },
    { id: 3, name: '', html_url: '', description: '' },
    { id: 4, name: '', html_url: '', description: '' },
    { id: 5, name: '', html_url: '', description: '' },
    { id: 6, name: '', html_url: '', description: '' },
  ];

  // NOTE: GitHub API has rate limits. For a deployed site, consider fetching at build time or using a backend.
  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&direction=desc`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch from GitHub API');
        }
        return res.json();
      })
      .then(data => {
        // Filter out forked repos if desired and take the top 6
        const ownedProjects = data.filter(repo => !repo.fork);
        setProjects(ownedProjects.slice(0, 6));
      })
      .catch(error => {
        console.error("Error fetching GitHub repos:", error);
        // Fallback to hardcoded data if API fails
        setProjects(fallbackProjects);
      });
  }, []);


  return (
    <div className="bg-[#111111] text-gray-300 font-sans leading-relaxed">
      <div className="min-h-screen p-4 sm:p-6 md:p-8 lg:p-12 max-w-7xl mx-auto">
        
        {/* Header */}
        <header className="flex justify-between items-center py-4">
          <div className="font-bold text-xl text-white">Armando Saboia</div>
          <nav className="flex items-center space-x-4">
            <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/armando-saboia/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
             <a href="mailto:armandosaboia@gmail.com" className="hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </nav>
        </header>

        <main className="mt-16 md:mt-20">
          {/* --- HERO SECTION --- */}
          <section className="flex flex-col md:flex-row items-stretch bg-[#1C1C1C] rounded-2xl shadow-lg overflow-hidden">
            {/* Left side: Text content */}
            <div className="md:w-3/5 p-8 py-10 md:p-12 lg:p-16 flex flex-col justify-center order-2 md:order-1">
                <div className="text-center md:text-left">
                    <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                    Data Scientist/Engineer &<br />
                    Freelance Consultant
                    </h1>
                    <p className="mt-6 text-lg text-gray-400 max-w-xl">
                    AI & ML enthusiast, solving complex problems and driving business value from data. Passionate about turning raw data into actionable insights.
                    </p>
                    <div className="mt-8 flex justify-center md:justify-start space-x-4">
                    <a href="mailto:armandosaboia@gmail.com" className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors">
                        Get In Touch
                    </a>
                    <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
                        View GitHub
                    </a>
                    </div>
                </div>
            </div>
            {/* Right side: Image */}
            <div className="md:w-2/5 order-1 md:order-2">
                <img 
                    src={imageDataUrl}
                    alt="Armando Saboia"
                    className="w-full h-64 md:h-full object-cover"
                />
            </div>
          </section>

          {/* About Me Section */}
          <section id="about" className="my-24 md:my-32">
             <h2 className="text-3xl font-bold text-white text-center mb-12">About Me</h2>
             <div className="max-w-4xl mx-auto bg-[#1C1C1C] p-8 rounded-xl shadow-lg">
                <p className="text-lg text-gray-300 mb-4">
                    I'm a Data Scientist with a BSc degree in data science, machine learning, and data analysis. I thrive on tackling challenging problems and have a proven track record of developing data-driven solutions that provide significant business value.
                </p>
                <p className="text-lg text-gray-300">
                    My expertise lies in the full data science lifecycle: from data collection and preprocessing to model development, deployment, and monitoring. I'm proficient with Python and its data science ecosystem (Pandas, NumPy, Scikit-learn, PyTorch), and experienced in deploying models using tools like Streamlit and Docker.
                </p>
                <div className="mt-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Core Skills</h3>
                    <div className="flex flex-wrap gap-3">
                        {['Python', 'PyTorch', 'Scikit-learn', 'Pandas', 'SQL', 'Docker', 'Streamlit', 'Data Visualization', 'Machine Learning', 'Statistics', 'Git'].map(skill => (
                            <span key={skill} className="bg-gray-700 text-gray-200 px-4 py-2 rounded-full text-sm font-medium">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
             </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="my-24 md:my-32">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map(project => (
                <a 
                  key={project.id} 
                  href={project.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#1C1C1C] p-6 rounded-xl flex flex-col justify-between hover:ring-2 hover:ring-gray-600 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-lg text-white mb-2">{project.name}</h3>
                      <ArrowUpRight className="text-gray-500 flex-shrink-0" size={20} />
                    </div>
                    <p className="text-gray-400 text-sm">
                      {project.description || 'No description available. Click to view on GitHub.'}
                    </p>
                  </div>
                  <div className="mt-4 text-xs text-gray-500">
                    View Project on GitHub
                  </div>
                </a>
              ))}
            </div>
          </section>

        </main>

        {/* Footer */}
        <footer className="text-center text-gray-500 py-8 mt-16 border-t border-gray-800">
          <p>&copy; {new Date().getFullYear()} Armando Saboia. All rights reserved.</p>
          <p className="text-sm mt-2">Built with React & Tailwind CSS. Inspired by Figma.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;