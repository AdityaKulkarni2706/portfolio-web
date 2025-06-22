import React from 'react';
import './App.css'; // Make sure this is linked

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">

        {/* Changed this to a home link or site title that goes to the top */}
        <a href='/' className="header-brand">Aditya's Portfolio</a> 
        <nav className="header-nav"> {/* Use <nav> for navigation links */}
          <a href='#projects' className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact Me</a>
          {/* Add social links here if you want */}
          {/* Example: <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="nav-link">GitHub</a> */}
        </nav>
      </header>

      {/* Intro Section */}
      <section className="intro">
        <div className="intro-content"> {/* New wrapper for flexbox layout */}
          <img 
            src="my_image.jpg" 
            alt="Aditya" 
            className="profile-pic"
          />
          <p className="description">
            Hi, I’m Aditya. A Computer Science student who loves solving problems with machine learning and building practical, data-driven solutions.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects" id='projects'>
        <h2 className="section-title">My Projects</h2> {/* Consistent title class */}
        <div className="project-grid">
          <div className="project-card">
            {/* Added a common class 'project-icon' for shared styles */}
            <img className='project-icon' src='csv_icon.png' alt='CSV Cleaner Icon'></img> 
            <h3>CSV Cleaner</h3>
            <p className="project-description">A Python script to clean and preprocess CSV files, handling missing values, duplicates, and inconsistent data formats.</p>
            <div className="project-links">
                <a href="https://github.com/AdityaKulkarni2706/csv-cleaner" target="_blank" rel="noopener noreferrer" className="btn">GitHub Repo</a>
                {/* <a href="#link-to-demo" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Live Demo</a> */}
            </div>
          </div>

          
          <div className="project-card">
            <img className='project-icon' src='linear_reg_icon.jpg' alt='Linear Regression Icon'></img>
            <h3>Linear Regression from Scratch</h3>
            <p className="project-description">Implementation of a Linear Regression model using NumPy, covering gradient descent and evaluation metrics for educational purposes.</p>
            <div className="project-links">
                <a href="https://github.com/AdityaKulkarni2706/regression-analysis" target="_blank" rel="noopener noreferrer" className="btn">GitHub Repo</a>
            </div>
          </div>


          <div className="project-card">
            <img className='project-icon' src='gen_icon.png' alt='Custom Dataset Generator Icon'></img>
            <h3>Custom Dataset Generator</h3>
            <p className="project-description">A tool to generate synthetic datasets with customizable parameters for machine learning experimentation and testing.</p>
            <div className="project-links">
                <a href="https://github.com/AdityaKulkarni2706/dataset-gen" target="_blank" rel="noopener noreferrer" className="btn">GitHub Repo</a>
            </div>
          </div>
          {/* Add more project-card divs as needed */}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2 className="section-title">Contact Me</h2>
        <p className="contact-description">
          Feel free to reach out if you have any questions or just want to connect!
        </p>
        <div className="contact-links">
          <a href="mailto:kulkaat@mail.uc.edu" className="btn btn-primary">Email Me</a>
          <a href="https://www.linkedin.com/in/adi-2006-kulkarni/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">LinkedIn</a>
          <a href="https://github.com/AdityaKulkarni2706" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">GitHub</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Aditya. All rights reserved.</p>
        {/* You can add more links here, like privacy policy, etc. */}
      </footer>
    </div>
  );
}

export default App;