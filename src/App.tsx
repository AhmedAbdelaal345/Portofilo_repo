import { useState } from 'react';
import './App.css';
import profilePic from './assets/images/my_pic.jpeg';
import chatAppImg from './assets/images/chat_scholar.png';
import ecommerceImg from './assets/images/ecommerce_concept.png';
import foodDelviryImg from  './assets/images/foodDelviry.png';
import weatherAppImg from './assets/images/weather.jpeg';
import tukoAppImg from './assets/images/toku.png';
import movieAppImg from './assets/images/movie_App.png';
import quizlyImg from './assets/images/quizImage.png';

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
            <h2>Junior Flutter Developer | Firebase | Clean Architecture</h2>
            <p>Building scalable, user-friendly mobile applications with clean, maintainable code.</p>
            <div className="hero-buttons">
              <a href="#contact" className="btn primary-btn">Contact Me</a>
               <a href="/Ahmed_Abdelaal_CV.pdf" className="btn primary-btn" download>
    Download CV
  </a>
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
Junior Flutter Developer and IT undergraduate specializing in Flutter, Firebase, and Clean Architecture. Passionate about building scalable mobile applications and currently seeking internship or junior Flutter opportunities.</p>
         <p>   My academic foundation is complemented by practical training experiences gained from esteemed institutions such as the Information Technology Institute (ITI), from which I anticipate graduating in 2024, and the National Telecommunication Institute (NTI), with an expected graduation in 2025.

I am also a participant in the Digital Egypt Pioneers Initiative (DEPI), a specialized program focused on advanced software development and real-world project building. These experiences have provided me with strong hands-on practice, exposure to industry standards, and the ability to develop scalable, production-level mobile applications using modern technologies.
          </p>
          <p>
Driven by a strong desire to solve real-world problems through technology, I focus on building scalable, user-friendly mobile applications using Flutter and modern development practices. I am committed to writing clean, maintainable code and consistently applying best practices such as Clean Architecture and efficient state management across my projects.

My goal is to leverage my technical skills, practical training, and passion for continuous learning to contribute effectively to innovative and impactful software development teams while delivering high-quality mobile solutions that create real value for users.
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
<section style={{textAlign:"center",padding:"40px"}}>
  <h2>🚀 Available for Flutter Developer Roles</h2>
  <p>Open for internships, freelance and full-time opportunities</p>
</section>

      <section id="projects" className="projects-section">
        <div className="section-header">
          <h2>Projects</h2>
          <div className="underline"></div>
        </div>
        <div className="projects-grid">
          <div className="project-card">
  <div className="project-image">
    <img src={quizlyImg} alt="Quizly App" />
  </div>

  <div className="project-info">
    <h3>Quizly - Smart Quiz App</h3>

    <p>
      A production-level real-time quiz application built with Flutter & Firebase.
      Includes teacher dashboard, student panel, analytics system, instant grading,
      and clean scalable architecture. Built as a graduation project for DEPI.
    </p>

    <div className="project-tags">
      <span>Flutter</span>
      <span>Firebase</span>
      <span>Clean Architecture</span>
      <span>Realtime</span>
    </div>

    <div className="project-buttons">

  <a 
    href="https://github.com/AhmedAbdelaal345/DEPI_Final_Project"
    target="_blank"
    rel="noopener noreferrer"
    className="project-link"
  >
    GitHub
  </a>

  <a 
    href="https://drive.google.com/file/d/1Bxw9ugw3h1_KVGRINcYCQ5QcMIAWjO7x/view"
    target="_blank"
    rel="noopener noreferrer"
    className="project-link demo"
  >
    Live Demo
  </a>

</div>
    
  </div>
</div>

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

    {/* DEPI */}
    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h3>Digital Egypt Pioneers Initiative (DEPI)</h3>
        <p className="timeline-date">Expected Graduation: 2026</p>
        <p>
          Intensive software development program focused on Flutter, Firebase, and real-world project development.
          Built production-level mobile applications and gained strong experience in clean architecture,
          state management, and scalable app development.
        </p>
      </div>
    </div>

    {/* NTI */}
    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h3>National Telecommunication Institute (NTI)</h3>
        <p className="timeline-date">Expected Graduation: 2025</p>
        <p>
          Specialized training in telecommunications and software development with hands-on projects,
          focusing on modern technologies and practical industry skills.
        </p>
      </div>
    </div>

    {/* ITI */}
    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h3>Information Technology Institute (ITI)</h3>
        <p className="timeline-date">Expected Graduation: 2024</p>
        <p>
          Intensive training in software development and mobile application development using Flutter,
          covering clean code practices and real-world project implementation.
        </p>
      </div>
    </div>

    {/* University */}
    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h3>Faculty of Computer & Information, Zagazig University</h3>
        <p className="timeline-date">Undergraduate - Information Technology</p>
        <p>
          Studying Information Technology with strong focus on software engineering, data structures,
          and mobile application development.
        </p>
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
