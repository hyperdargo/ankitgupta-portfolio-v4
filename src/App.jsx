import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faServer, faCode, faShieldHalved, faTerminal, faGraduationCap, faBriefcase, faTools } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { TypeAnimation } from 'react-type-animation';

function App() {
  const [activeSection, setActiveSection] = useState('terminal');

  const terminalCommands = {
    help: `Available commands:
  aboutme    - Display information about me
  skills   - List technical skills
  projects - Show my projects
  education - Show education history
  experience - Show work experience
  services - List available services
  contact  - Display contact information
  clear    - Clear the terminal`,
    ls: `Available commands:
  aboutme    - Display information about me
  skills   - List technical skills
  projects - Show my projects
  education - Show education history
  experience - Show work experience
  services - List available services
  contact  - Display contact information
  clear    - Clear the terminal`,
   aboutme: `Ankit Gupta
Cybersecurity Enthusiast | Ethical Hacker | Developer

📍 Location: Damak-9, Jhapa, Nepal
🎓 Education: Bachelor's in Ethical Hacking & Cybersecurity (Softwarica College)

🧠 Passionate about uncovering vulnerabilities, defending digital assets, and pushing the boundaries of security.

💼 I thrive in building secure web applications, automating tasks with bots, and managing game servers.
🔍 Always learning, experimenting, and sharing insights through content creation and open-source contributions.`,
    
    education: `📘 Education Timeline:

🎓 Bachelor's Degree (2023 - Present)
   Institution: Softwarica College of IT
   Focus: Ethical Hacking & Cybersecurity
   Status: Currently Enrolled

📗 Higher Secondary Education (2020 - 2022)
   School: Jhapa Model English School
   Major: Management with Computer Science

📘 Primary & Lower Secondary (2005 - 2019)
   Jhapa Model English School
   Completed foundational academic education`,
    
    experience: `🧩 Work & Project Experience:

💼 Freelance Content Creator
   Platform: YouTube (Dargo Tamber)
   - Created content around anime and gaming culture
   - Skills: Editing, graphic design, audience growth

💼 Game Server Administrator
   Environment: Self-hosted VPS
   - Deployed & optimized multiple game servers
   - Managed uptime, performance, and player support

💼 Software & Web Developer
   Platform: GitHub Portfolio
   - Built Discord bots, geolocation tools, and security apps
   - Combined functionality with security best practices`,
    
    services: `🛠️ Professional Services Offered:

🌐 Web Development
   - Custom-built, responsive websites
   - Security-oriented full-stack solutions

🤖 Discord & Bot Development
   - Automation bots, moderation tools
   - Custom CTF challenges & community features

🛡️ Security Consulting
   - Basic penetration tests
   - Security hardening & best practice audits

🖥️ Server & VPS Management
   - Web/game server deployment
   - Monitoring, troubleshooting, performance tuning`,
    
    skills: `🧠 Technical Skills:

• Ethical Hacking & Penetration Testing
• Linux Administration & Bash Scripting
• Web Application Security (OWASP Top 10)
• Full-Stack Web Development (HTML/CSS/JS, React)
• Programming: Python, C
• Networking & Server Management
• VPS Setup & Optimization`,
    
    projects: `🚀 Featured Projects:

🔍 Geolocation Tool
   - Python script for IP-based tracking
   - Uses APIs for real-time geolocation
   - GitHub: https://github.com/hyperdargo/geolocation

🎮 Discord CTF Bot
   - Security-focused challenge bot for Discord servers
   - Encourages gamified learning in cybersecurity
   - GitHub: https://github.com/hyperdargo/Discord-CTF-Bot

🖼️ Steganography Tool
   - Hide/reveal messages inside images
   - Built with Python & tkinter GUI
   - GitHub: https://github.com/hyperdargo/Steganography-Tool`,
    
    contact: `📬 Contact Information:

📷 Instagram: https://www.instagram.com/_ankit_shah_dt_/
💬 Discord Server: https://discord.com/invite/JYNCNAxPx7
💻 GitHub: https://github.com/hyperdargo
📧 Email: ankitgupta@gmail.com
🌐 Portfolio Server: https://panel.ankitgupta.com.np`
  };

  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'system', content: 'Welcome to DargoTamber\'s interactive terminal portfolio' },
    { type: 'system', content: 'Type "help" or "ls" for available commands' }
  ]);
  const [command, setCommand] = useState('');

  const handleCommand = (cmd) => {
    const newHistory = [...terminalHistory, { type: 'command', content: cmd }];
    
    const trimmedCmd = cmd.toLowerCase().trim();
    if (trimmedCmd === 'clear') {
      setTerminalHistory([
        { type: 'system', content: 'Welcome to DargoTamber\'s interactive terminal portfolio' },
        { type: 'system', content: 'Type "help" or "ls" for available commands' }
      ]);
    } else if (terminalCommands[trimmedCmd]) {
      newHistory.push({ type: 'output', content: terminalCommands[trimmedCmd] });
      setTerminalHistory(newHistory);
    } else if (trimmedCmd) {
      newHistory.push({ type: 'error', content: `Command not found: ${trimmedCmd}` });
      setTerminalHistory(newHistory);
    }
    
    setCommand('');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      <header className="bg-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-2xl font-bold">Ankit Gupta</h1>
              <TypeAnimation
                sequence={[
                  'Ethical Hacker',
                  2000,
                  'Security Researcher',
                  2000,
                  'Web Developer',
                  2000
                ]}
                wrapper="span"
                speed={50}
                className="text-green-400"
                repeat={Infinity}
              />
            </motion.div>
            <div className="flex space-x-4">
  <a
    href="https://raw.githubusercontent.com/hyperdargo/ankitgupta-portfolio-v4/main/src/CV.pdf"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FontAwesomeIcon
      icon={faFileAlt}
      className="text-2xl hover:text-green-400 transition-colors"
    />
  </a>

  <a
    href="https://github.com/hyperdargo"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FontAwesomeIcon
      icon={faGithub}
      className="text-2xl hover:text-green-400 transition-colors"
    />
  </a>

  <a
    href="https://docs.ankitgupta.com.np/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FontAwesomeIcon
      icon={faBook}
      className="text-2xl hover:text-green-400 transition-colors"
    />
  </a>
</div>

          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="bg-gray-800 rounded-lg p-6 font-mono flex flex-col" style={{ height: '600px' }}>
          <div className="flex items-center gap-2 mb-4 border-b border-gray-700 pb-2">
            <FontAwesomeIcon icon={faTerminal} className="text-green-400" />
            <span className="text-green-400">Terminal</span>
          </div>
          
          <div className="flex-grow overflow-y-auto mb-4 pr-2" style={{ maxHeight: '500px' }}>
            {terminalHistory.map((entry, index) => (
              <div key={index} className={`mb-2 ${entry.type === 'error' ? 'text-red-400' : entry.type === 'command' ? 'text-blue-400' : 'text-green-400'}`}>
                {entry.type === 'command' && (
                  <div className="flex">
                    <span className="text-green-400">dargo@portfolio:~$ </span>
                    <pre className="inline whitespace-pre-wrap">{entry.content}</pre>
                  </div>
                )}
                {entry.type !== 'command' && (
                  <pre className="whitespace-pre-wrap">{entry.content}</pre>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center border-t border-gray-700 pt-2">
            <span className="text-green-400">dargo@portfolio:~$ </span>
            <input
              type="text"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleCommand(command)}
              className="flex-1 bg-transparent border-none outline-none ml-2 text-white"
              autoFocus
            />
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 py-4 mt-auto">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2025 DargoTamber. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
