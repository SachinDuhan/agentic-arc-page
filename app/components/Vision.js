import { FaNetworkWired, FaCode, FaTerminal, FaTools } from "react-icons/fa";

export default function Vision() {
  return (
    <section className="vision" id="vision">
      <div className="container">
        <h2>Our Vision</h2>
        <p className="vision-text">
          &ldquo;To create a community that develops skilled innovators who build
          intelligent and responsible AI agents, promote research and innovation,
          and bridge the gap between academic learning and real-world industry
          applications.&rdquo;
        </p>

        <div className="skills-grid">
          <div className="skill-card">
            <FaNetworkWired className="skill-icon" />
            <h3>Agentic Systems</h3>
            <p>Designing the core components of autonomous systems.</p>
          </div>
          <div className="skill-card">
            <FaCode className="skill-icon" />
            <h3>Modern Frameworks</h3>
            <p>Building AI agents using LangChain, CrewAI, and AutoGen.</p>
          </div>
          <div className="skill-card">
            <FaTerminal className="skill-icon" />
            <h3>Prompt Engineering</h3>
            <p>Mastering agent control and structured reasoning.</p>
          </div>
          <div className="skill-card">
            <FaTools className="skill-icon" />
            <h3>Tool Integration</h3>
            <p>Connecting agents to external APIs and automation tools.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
