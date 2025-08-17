import { useState } from 'react';
import './App.css';
import profilePic from './assets/images/upscalemedia-transformed.jpeg';
import chatAppImg from './assets/images/chat_scholar.png';
import ecommerceImg from './assets/images/ecommerce_concept.png';
import foodDelviryImg from  './assets/images/foodDelviry.png';
import weatherAppImg from './assets/images/weather.jpeg';
import tukoAppImg from './assets/images/toku.png';
import movieAppImg from './assets/images/movie_App.png';
function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="app">
      <header>
        <nav>
          <div className="logo">Ahmed Abdelaal</div>
          <ul className="nav-links">
            <li><a href="#home" onClick={() => setActiveSection('home')} className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
            <li><a href="#about" onClick={() => setActiveSection('about')} className={activeSection === 'about' ? 'active' : ''}>About</a></li>
            <li><a href="#skills" onClick={() => setActiveSection('skills')} className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
            <li><a href="#projects" onClick={() => setActiveSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
            <li><a href="#education" onClick={() => setActiveSection('education')} className={activeSection === 'education' ? 'active' : ''}>Education</a></li>
            <li><a href="#contact" onClick={() => setActiveSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Ahmed Abdelaal</h1>
            <h2>Flutter Developer | Software Engineer</h2>
            <p>Building scalable, user-friendly mobile applications with clean, maintainable code.</p>
            <div className="hero-buttons">
              <a href="#contact" className="btn primary-btn">Contact Me</a>
              <a href="#projects" className="btn secondary-btn">View Projects</a>
            </div>
          </div>
          <div className="hero-image">
            <img src={profilePic} alt="Ahmed Abdelaal" />
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="section-header">
          <h2>About Me</h2>
          <div className="underline"></div>
        </div>
        <div className="about-content">
          <p>
            I am Ahmed Abdelaal Mahmoud Ashour, an enthusiastic and dedicated student currently pursuing my studies at the Faculty of Computer and Information, Zagazig University. My passion lies deeply within the realm of mobile application development, specifically using the Flutter framework, and I am actively seeking opportunities to commence my professional journey as a Junior Flutter Developer.
          </p>
          <p>
            My academic foundation is complemented by practical training experiences gained from esteemed institutions such as the Information Technology Institute (ITI), from which I anticipate graduating in 2024, and the National Telecommunication Institute (NTI), with an expected graduation in 2025. These programs have provided me with invaluable hands-on experience and a deeper understanding of industry standards.
          </p>
          <p>
            Driven by a desire to solve real-world problems through technology, I focus on building scalable, user-friendly mobile applications. I strongly believe in the principles of writing clean, maintainable code and continuously strive to implement best practices like Clean Architecture in my projects. My goal is to leverage my skills and dedication to contribute meaningfully to innovative and impactful application development projects.
          </p>
        </div>
      </section>

      <section id="skills" className="skills-section">
        <div className="section-header">
          <h2>Skills</h2>
          <div className="underline"></div>
        </div>
        <div className="skills-content">
          <div className="skill-category">
            <h3>Mobile Development</h3>
            <div className="skill-items">
              <div className="skill-item">
                <div className="skill-name">Flutter</div>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-name">Dart</div>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-name">Bloc/State Management</div>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3>Backend Integration</h3>
            <div className="skill-items">
              <div className="skill-item">
                <div className="skill-name">Firebase</div>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-name">RESTful APIs</div>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3>Software Design</h3>
            <div className="skill-items">
              <div className="skill-item">
                <div className="skill-name">Clean Architecture</div>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-name">OOP Concepts</div>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-name">Data Structures</div>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3>Other Skills</h3>
            <div className="skill-items">
              <div className="skill-item">
                <div className="skill-name">Git & GitHub</div>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-name">C++</div>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: '65%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-name">UI/UX Design Principles</div>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <div className="section-header">
          <h2>Projects</h2>
          <div className="underline"></div>
        </div>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <img src={chatAppImg} alt="Chat Application" />
            </div>
            <div className="project-info">
              <h3>Chat Application</h3>
              <p>A real-time chat application developed using Dart and integrated with Firebase for authentication and message storage.</p>
              <div className="project-tags">
                <span>Flutter</span>
                <span>Firebase</span>
                <span>Dart</span>
              </div>
              <a href="https://github.com/AhmedAbdelaal345/Chat_APP" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src={ecommerceImg} alt="E-commerce Application" />
            </div>
            <div className="project-info">
              <h3>E-commerce Application</h3>
              <p>A Flutter e-commerce prototype featuring Firebase Authentication, REST API integration, and effective state management.</p>
              <div className="project-tags">
                <span>Flutter</span>
                <span>Firebase Auth</span>
                <span>REST API</span>
              </div>
              <a href="https://github.com/AhmedAbdelaal345/e-commerce" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image">
              <img src={foodDelviryImg} alt="Food Delivery Application" />
            </div>
            <div className="project-info">
              <h3>Food Delivery Application</h3>
              <p>A Flutter Food Delivery Application prototype featuring  and effective state management.</p>
              <div className="project-tags">
                <span>Flutter</span>
                <span>Provider</span>
                <span>Clean Architecture</span>
              </div>
              <a href="https://github.com/AhmedAbdelaal345/Food_Delivery" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image">
              <img src={weatherAppImg} alt="Weather Application" />
            </div>
            <div className="project-info">
              <h3>Weather Application</h3>
              <p>A weather application that integrates with external APIs to fetch and display weather data, showcasing API integration skills.</p>
              <div className="project-tags">
                <span>Dart</span>
                <span>Flutter</span>
                <span>API Integration</span>
              </div>
              <a href="https://github.com/AhmedAbdelaal345/Weather_App" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src={movieAppImg} alt="Movie Application" />
            </div>
            <div className="project-info">
              <h3>Movie Application</h3>
              <p>The 'Movie App' is a mobile application developed using the Flutter framework, designed to showcase a list of movies and allow users to track watched movies. This project highlights the implementation of Clean Architecture principles and demonstrates different state management approaches, including setState for simple scenarios and Provider for more complex handling.</p>
              <div className="project-tags">
                <span>Dart</span>
                <span>Flutter</span>
                <span>Sate Management</span>
                <span>Provider</span>
              </div>
              <a href="https://github.com/AhmedAbdelaal345/Movie_App" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-info">
              <h3>Todo Application</h3>
              <p>A task management app built with Flutter following Clean Architecture and Clean Code principles, using Bloc for state management and Hive for local persistence.</p>
              <div className="project-tags">
                <span>Flutter</span>
                <span>Bloc</span>
                <span>Hive</span>
                <span>Clean Architecture</span>
              </div>
              <a href="https://github.com/AhmedAbdelaal345/todoapp" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-info">
              <h3>Theater Booking System</h3>
              <p>A system for booking theater seats using 2D arrays to track seat availability and store user information, demonstrating data structure concepts.</p>
              <div className="project-tags">
                <span>Dart</span>
                <span>Data Structures</span>
              </div>
              <a href="https://github.com/AhmedAbdelaal345" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
            </div>
          </div>

          <div className="project-card">
            <div className='project-image'>

          <img src={tukoAppImg} alt="Tuko Application" />
            </div>
            <div className="project-info">
              <h3>Tuko App</h3>
              <p>An educational application designed to assist users in learning the Japanese language, showcasing versatility in applying programming skills.</p>
              <div className="project-tags">
                <span>dart</span>
                <span>Clean Architecture</span>
                <span>Education</span>
              </div>
              <a href="https://github.com/AhmedAbdelaal345/Tuko_App" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="education-section">
        <div className="section-header">
          <h2>Education & Training</h2>
          <div className="underline"></div>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Faculty of Computer and Information, Zagazig University</h3>
              <p className="timeline-date">Current</p>
              <p>Pursuing undergraduate studies in Information Technology and Computer Science, building a strong theoretical foundation in software engineering principles.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Information Technology Institute (ITI)</h3>
              <p className="timeline-date">Expected Graduation: 2024</p>
              <p>Intensive training program focusing on software development, particularly mobile application development with Flutter.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>National Telecommunication Institute (NTI)</h3>
              <p className="timeline-date">Expected Graduation: 2025</p>
              <p>Specialized training enhancing expertise in telecommunications and software development, with a focus on practical industry applications.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Digital Egypt Pioneers Initiative (DEPI)</h3>
              <p className="timeline-date">Expected Graduation: 2026</p>
              <p>My participation in the Digital Egypt Pioneers Initiative (DEPI) has been instrumental in shaping my skills and career trajectory in the technology sector. It has provided me with a strong foundation in Software Development and equipped me to contribute effectively to digital transformation efforts. This initiative exemplifies my dedication to continuous learning and my proactive approach to acquiring cutting-edge skills in the field of information technology.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="section-header">
          <h2>Contact</h2>
          <div className="underline"></div>
        </div>
        <div className="contact-content">
          <p>I am eager to connect regarding potential job opportunities, internships, or collaborations in the field of Flutter development. Please feel free to reach out through any of the following channels:</p>
          
          <div className="contact-info">
            <div className="contact-item">
              <i className="contact-icon email-icon"></i>
              <div>
                <h3>Email</h3>
                <p><a href="mailto:ahmeed.abdelaal@gmail.com">ahmeed.abdelaal@gmail.com</a></p>
              </div>
            </div>
            
            <div className="contact-item">
              <i className="contact-icon github-icon"></i>
      
              <div>
                <h3>GitHub</h3>
                <p><a href="https://github.com/AhmedAbdelaal345" target="_blank" rel="noopener noreferrer">AhmedAbdelaal345</a></p>
              </div>
            </div>
            
            <div className="contact-item">
              <i className="contact-icon linkedin-icon"></i>
              <div>
                <h3>LinkedIn</h3>
                <p><a href="https://linkedin.com/in/ahmed-abdelaal-18b0ba2bb" target="_blank" rel="noopener noreferrer">ahmed-abdelaal-18b0ba2bb</a></p>
              </div>
            </div>
          </div>

          <div className="contact-item">
              <i className="contact-icon tel-icon"></i>
              <div>
                <h3>Phone Number</h3>
                <p><a href="tel:+201069683875" target="_blank" rel="noopener noreferrer">+2 (010) 6968-3875</a></p>
                </div>
            </div>
          </div>
          
          <div className="contact-message">
            <p>Let's connect and discuss how my skills can contribute to your team or project!</p>
          </div>
      </section>

      <footer>
        <div className="footer-content">
          <p>&copy; 2025 Ahmed Abdelaal. All rights reserved.</p>
          <div className="social-links">
            <a href="https://github.com/AhmedAbdelaal345" target="_blank" rel="noopener noreferrer" className="social-icon github"></a>
            <a href="https://linkedin.com/in/ahmed-abdelaal-18b0ba2bb" target="_blank" rel="noopener noreferrer" className="social-icon linkedin"></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
