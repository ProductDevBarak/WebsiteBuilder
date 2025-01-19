import React, { useEffect, useState } from "react";
// import 'grapesjs/dist/css/grapes.min.css';
import "./editor.css";
import grapesjs from "grapesjs";
import gsWebpage from "grapesjs-preset-webpage";
import gsCustome from "grapesjs-custom-code";
import gsTap from "grapesjs-tabs";
import { chatResponse } from "../../utils/canvas";

const Editor = () => {
  const defaultHtml = (`
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Portfolio</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <header class="header">
            <div class="container">
                <h1>My Portfolio</h1>
                <nav>
                    <ul class="nav-list">
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    
        <section id="about" class="about">
            <div class="container">
                <h2>About Me</h2>
                <p>Hello! I'm a web developer with a passion for creating modern, user-friendly websites.</p>
            </div>
        </section>
    
        <section id="projects" class="projects">
            <div class="container">
                <h2>Projects</h2>
                <div class="project-list">
                    <div class="project">
                        <h3>Project 1</h3>
                        <p>A brief description of the project.</p>
                    </div>
                    <div class="project">
                        <h3>Project 2</h3>
                        <p>A brief description of the project.</p>
                    </div>
                    <div class="project">
                        <h3>Project 3</h3>
                        <p>A brief description of the project.</p>
                    </div>
                </div>
            </div>
        </section>
    
        <section id="contact" class="contact">
            <div class="container">
                <h2>Contact Me</h2>
                <form action="#" method="POST" class="contact-form">
                    <input type="text" name="name" placeholder="Your Name" required>
                    <input type="email" name="email" placeholder="Your Email" required>
                    <textarea name="message" placeholder="Your Message" required></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </section>
    
        <footer class="footer">
            <div class="container">
                <p>© 2025 Your Name. All rights reserved.</p>
            </div>
        </footer>
    </body>
    `);
  const defaultCss = (`/* General Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    line-height: 1.6;
    color: #333;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
}

/* Header */
.header {
    background: #333;
    color: #fff;
    padding: 1rem 0;
}

.header h1 {
    text-align: center;
    margin-bottom: 1rem;
}

.nav-list {
    display: flex;
    justify-content: center;
    list-style: none;
    gap: 1rem;
}

.nav-list a {
    color: #fff;
    text-decoration: none;
}

.nav-list a:hover {
    text-decoration: underline;
}

/* About Section */
.about {
    padding: 2rem 0;
    text-align: center;
}

.about h2 {
    margin-bottom: 1rem;
}

/* Projects Section */
.projects {
    background: #f9f9f9;
    padding: 2rem 0;
}

.project-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
}

.project {
    background: #fff;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    width: calc(33% - 1rem);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.project h3 {
    margin-bottom: 0.5rem;
}

/* Contact Section */
.contact {
    padding: 2rem 0;
    text-align: center;
}

.contact-form {
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.contact-form input,
.contact-form textarea,
.contact-form button {
    padding: 0.8rem;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
}

.contact-form button {
    background: #333;
    color: #fff;
    border: none;
    cursor: pointer;
}

.contact-form button:hover {
    background: #555;
}

/* Footer */
.footer {
    background: #333;
    color: #fff;
    text-align: center;
    padding: 1rem 0;
    margin-top: 2rem;
}

/* Responsive Styles */
@media (max-width: 768px) {
    .project {
        width: calc(50% - 1rem);
    }
}

@media (max-width: 480px) {
    .project {
        width: 100%;
    }
}`);
  const [pluginLoaded, setPluginLoaded] = useState(false);
  const [editor, setEditor] = useState(null);
  const [prompt, setPrompt] = useState("");

  useEffect(() => {
    if (!pluginLoaded) {
      setPluginLoaded(true);
    } else if (!editor) {
      const e = grapesjs.init({
        color: "white",
        height: "99vh",
        width: "auto",
        container: "#g",
        fromElement: true,
        plugins: [gsWebpage, gsCustome, gsTap],
        storageManager: {
          type: "remote",
          urlStore:
            "http://173.249.14.149:3001/api/Dashboards/5ef370de14213070188a41eb/grapes?access_token=B6IES26pZSvpX4J8c8q4wmseASpRtmBOtvXzztH57NDDJXxO94qE7VbtJ7y718GZ",
          urlLoad:
            "http://173.249.14.149:3001/api/Dashboards/5ef370de14213070188a41eb/grapes?access_token=B6IES26pZSvpX4J8c8q4wmseASpRtmBOtvXzztH57NDDJXxO94qE7VbtJ7y718GZ",
          autosave: false,
          autoload: true,
          contentTypeJson: true,
          storeComponents: true,
          allowScripts: 1,
          storeStyles: true,
          storeHtml: true,
          storeCss: true,
        },
      });
      e.setComponents(defaultHtml);
      e.setStyle(defaultCss);
      setEditor(e);
    }
  }, [pluginLoaded, editor]);

  const handleChange = (e) => {
    setPrompt(e.target.value);
  };
  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      setPrompt(e.target.value);
      const response = await chatResponse(prompt);
      console.log(response);
    }
  };
  
  return (
    <div className="flex flex-col h-screen">
      <div id="g" className="flex-1" />
      <div className="p-2 border-b border-gray-300 bg-gray-50">
        <label htmlFor="promptInput" className="text-sm font-bold">
          Enter Prompt:
        </label>
        <input
          type="text"
          id="promptInput"
          placeholder="Enter your prompt..."
          value={prompt}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="w-full p-2 mt-1 rounded-md border border-gray-300"
        />
      </div>
    </div>
  );
};

export default Editor;
