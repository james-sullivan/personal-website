import React from 'react';
import './App.css';
import profilePicture from './profile-picture.jpeg';
import clocktowerScreenshot from './clocktower-screenshot.png';

function App() {
  const researchProjects = [
    {
      title: "How do AI Agents Work Together When They Can't Trust Each Other?",
      url: "http://tiny.cc/1zvm001",
      details: [
        "Discovered limitations in AI cooperation where models failed to develop sophisticated team coordination strategies even when given complete trust and shared objectives, revealing critical gaps in current AI agent collaboration capabilities",
        "Identified and documented \"groupthink\" phenomenon where AI agents propagated hallucinated game rules across multiple players, demonstrating concerning vulnerability in multi-agent systems that could amplify misinformation"
      ],
      image: clocktowerScreenshot
    },
    {
      title: "Discovered a CBRN Jailbreak for Frontier Language Models",
      url: "http://tiny.cc/2zvm001",
      details: [
        "Tested active jailbreak vulnerability affecting major AI models with Claude Sonnet 4 and Gemini 2.5 Pro models showing highest susceptibility while OpenAI's GPT and o-series models demonstrated strongest resistance to safety bypasses",
        "Revealed significant variation in AI safety measures across providers, with vulnerable models producing detailed instructions for dangerous activities including explosives, biological weapons, and cyberattacks, leading to responsible disclosure and industry awareness"
      ]
    },
    {
      title: "Developmental Stages in Multi-Problem Grokking",
      url: "http://tiny.cc/290ozz",
      details: [
        "Demonstrated that different problem types show independent grokking behavior based on their proportion of problems in the training data, and that more dominant problem types cause an earlier decline in model complexity during training as shown by the learning coefficient",
        "Used developmental interpretability techniques, including learning coefficient estimation, to analyze developmental stages in a transformer model trained on multiple modular arithmetic tasks"
      ]
    }
  ];

  const workExperience = [
    {
      title: "Anthropic | Machine Learning Engineer [Contract]",
      period: "Part-Time | August 2025 – Present",
      details: ["Built LLM pipelines to create datasets for evaluating and training models"]
    },
    {
      title: "Oracle Cloud Infrastructure | Software Engineer",
      period: "May 2023 – Present | Chicago, IL",
      details: [
        "Saved a customer $23 million in annual storage costs by developing and implementing a Python script to update object storage policies across multiple production environments, fulfilling critical contractual obligations.",
        "Implemented, tested, and deployed a critical data privacy feature for two large scale Go services to block unauthorized traffic, protecting the data privacy of over a hundred million daily users",
        "Successfully scaled Kubernetes infrastructure to meet 65% increase in holiday demand for Go based microservices",
        "Analyzed Kubernetes resource utilization issues across multiple services and presented best practices org-wide to improve resource utilization and service stability.",
        "Hardened the security of eight containers for two services by running containers as non-root users, disallowing privilege escalation, and mounting their filesystems as read only."
      ]
    },
    {
      title: "Supervised Program for Alignment Research | AI Safety Researcher",
      period: "Part Time | February 2025 – May 2025",
      details: [
        "Ran ensemble experiments with dozens of models across several benchmarks like GPQA, CodeContests, Cybench, GSM8K, ifeval, MATH, Humaneval and MiniF2F.",
        "Demonstrated up to a 10% performance increase from ensembling LLMs across the Humaneval, MiniF2f and GPQA Diamond benchmarks.",
        "Researching how ensembles of models should be considered in pre-deployment evaluations and Responsible Scaling Policies."
      ]
    },
    {
      title: "Amazon | Software Development Engineer",
      period: "May 2022 – March 2023 | Chicago, IL",
      details: [
        "Eliminated 108 weeks of engineering work by proposing, writing, and getting sign-off on design documents to migrate local configuration into Amazon Config Store for five Java Spring microservices.",
        "Reduced retail items sent to landfill in the Australian marketplace by 55% by deploying accounting code to enable automated bookkeeping of inventory donated."
      ]
    },
    {
      title: "CAE USA | Software Engineer",
      period: "June 2021 – May 2022 | Chicago, IL",
      details: [
        "Built C++ containerized microservices to process geospatial data.",
        "Saved ten days of productivity per year by containerizing the building of an in-house C++ framework on Linux using Docker and a Batch script.",
        "Delivered automated tests to bring a containerized C++ microservice from 0% to 80% code coverage using Google Test to enable it to be deployed through a CI/CD pipeline."
      ]
    },
    {
      title: "Stern Pinball | Software Engineer",
      period: "Part Time | June 2016 – April 2023 | Elk Grove Village, IL",
      details: [
        "Delivered a new game mode for the Teenage Mutant Turtles pinball machine by writing rules documents, collaborating with artists, and implementing C++ code on Linux",
        "Owned and delivered the C++ software for the embedded systems in Star Wars, Iron Maiden, and TMNT's topper accessories to control LEDs and motors"
      ]
    }
  ];

  const education = [
    "Illinois State University | B.S Computer Science | Minor in Math | 3.9 GPA",
    "Alignment Research Engineer Accelerator 6.0 (ARENA) | September 2025",
    "AI Safety Fundamentals: Alignment Course | BlueDot Impact | September 2024",
    "Certified Kubernetes Administrator | The Linux Foundation | March 2024",
    "Certified Kubernetes Application Developer | The Linux Foundation | April 2023"
  ];


  return (
    <div className="App">
      <div className="main-content">
        <aside className="sidebar">
          <div className="profile-section">
            <img src={profilePicture} alt="James Sullivan" className="profile-picture" />
            <p className="profile-subtitle">Software Engineer and AI Safety Researcher</p>
            <div className="contact-info">
              <h3>Contact</h3>
              <p>
                <a href="mailto:mail@jamessullivan.me" className="email-link">
                  mail@jamessullivan.me
                </a>
              </p>
              <p>
                <a 
                  href="https://www.linkedin.com/in/jamessullivan092/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="linkedin-link"
                >
                  LinkedIn Profile
                </a>
              </p>
              <p className="location">Chicago, IL</p>
            </div>
          </div>
        </aside>
        
        <main className="content">
          <h1 className="name-heading">James Sullivan</h1>
          
          <section className="research-section">
            <h2>Research</h2>
            <div className="research-list">
              {researchProjects.map((project, index) => (
                <div key={index} className="research-item">
                  <h3 className="research-title">
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="research-link"
                    >
                      {project.title}
                    </a>
                  </h3>
                  {project.image && (
                    <a 
                      href="https://james-sullivan.github.io/botc-visualizer/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <img 
                        src={project.image} 
                        alt="Research screenshot" 
                        className="research-image"
                      />
                    </a>
                  )}
                  <ul className="details-list">
                    {project.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="experience-section">
            <h2>Work Experience</h2>
            <div className="experience-list">
              {workExperience.map((job, index) => (
                <div key={index} className="experience-item">
                  <h3 className="job-title">{job.title}</h3>
                  <p className="job-period">{job.period}</p>
                  <ul className="details-list">
                    {job.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="education-section">
            <h2>Education & Certifications</h2>
            <div className="education-list">
              {education.map((edu, index) => (
                <div key={index} className="education-item">
                  {edu}
                </div>
              ))}
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}

export default App;
