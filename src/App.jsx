import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faServer, faCode, faShieldHalved, faTerminal, faGraduationCap, faBriefcase, faTools, faBook, faCloud, faBrain, faMusic, faImage, faDatabase, faRocket, faUserSecret, faLock, faNetworkWired, faRobot } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { TypeAnimation } from 'react-type-animation';

function App() {
  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'system', content: 'Welcome to DargoTamber\'s interactive terminal portfolio' },
    { type: 'system', content: 'Type "help" or "ls" for available commands' },
    { type: 'system', content: 'Try "matrix" for something special!' }
  ]);
  const [command, setCommand] = useState('');

  const terminalCommands = {
    help: `📖 Available Commands:
  aboutme      - Display information about me
  skills       - List technical skills
  projects     - Show my projects
  education    - Show education history
  experience   - Show work experience
  services     - List available services
  contact      - Display contact information
  social       - Show social media links
  achievements - List achievements & certifications
  techstack    - View my complete tech stack
  matrix       - Display matrix animation (try it!)
  fortune      - Get random tech wisdom
  status       - Check my current status
  date         - Show current date & time
  whoami       - Identify yourself
  clear        - Clear the terminal
  exit         - Just kidding, you can't exit! 😄`,
    
    ls: `📁 Available Commands:
  aboutme      - Display information about me
  skills       - List technical skills
  projects     - Show my projects
  education    - Show education history
  experience   - Show work experience
  services     - List available services
  contact      - Display contact information
  social       - Show social media links
  achievements - List achievements & certifications
  techstack    - View my complete tech stack
  matrix       - Display matrix animation
  fortune      - Get random tech wisdom
  status       - Check my current status
  date         - Show current date & time
  whoami       - Identify yourself
  clear        - Clear the terminal`,
    
    aboutme: `👤 Ankit Gupta
🎯 Cybersecurity Enthusiast | Ethical Hacker | Full-Stack Developer | AI Integration Specialist

📍 Location: Kathmandu, Nepal
📧 Email: guptaa39@uni.coventry.ac.uk
🌐 Portfolio: ankitgupta.com.np
🔗 LinkedIn: linkedin.com/in/dargotamber

🎓 Education: BSc (Hons) Ethical Hacking and Cybersecurity @ Coventry University
📅 Year: Third-Year Student (Mar 2023 – Mar 2026)

🧠 Passionate about:
• Building secure AI-powered applications
• Deploying production-ready cloud infrastructure
• Ethical hacking and penetration testing
• Real-time systems and audio streaming
• Technical documentation and system architecture

💼 Currently leading DTEmpire platform serving 10,000+ daily interactions`,
    
    skills: `💻 Technical Skills:

🔹 Languages: Python, JavaScript, Node.js, Bash, SQL, PHP, HTML/CSS, LaTeX
🔹 Frameworks: Express.js, Discord.js, React, Flask, RESTful APIs, WebSocket, Canvas API
🔹 Cloud & DevOps: Oracle Cloud, VPS Management, Docker, Linux Administration, Nginx, PM2, Git/GitHub
🔹 Security Tools: Metasploit, Burp Suite, Wireshark, Nmap, Nessus, OWASP ZAP, John the Ripper, Hashcat
🔹 Databases: MongoDB, MySQL, PostgreSQL, Lavalink
🔹 AI/ML Integration: OpenAI API, Claude API, Grok, DeepSeek, Pollinations AI
🔹 Focus Areas: API Security, Cloud Security, DevSecOps, Real-time Systems`,
    
    projects: `🚀 Featured Projects:

🤖 DTEmpire AI Terminal - Multi-AI Interface Platform
   - Integrated 12+ AI models (GPT-5, Claude, Grok, DeepSeek)
   - 10,000+ daily interactions with 99.7% uptime
   - Express.js backend with real-time monitoring
   - GitHub: https://github.com/hyperdargo/dtempire-ai-terminal

🎵 DTEmpire Music Bot & Lavalink Infrastructure
   - Production Lavalink v4 server supporting 500+ concurrent users
   - YouTube and Spotify integration
   - Live monitoring at live-monitor.ankitgupta.com.np
   - GitHub: https://github.com/hyperdargo/dtempire-music

🖼️ DTEmpire AI Image Generator
   - Processes 5,000+ images weekly
   - Multiple AI models (Flux, Turbo, Kontext)
   - Image caching reducing API calls by 40%
   - Live Site: https://ai-image.ankitgupta.com.np

📚 DTEmpire Documentation Platform
   - Matrix-themed UI with Canvas API animations
   - 95+ Google Lighthouse performance score
   - 10+ documented services with live status
   - Live Site: https://docs.ankitgupta.com.np/

🔒 Oracle Cloud Security Implementation
   - Defense-in-depth strategies reducing attack surface by 60%
   - IDS/IPS, SSL/TLS, automated monitoring
   - Role-based access control implementation`,
    
    education: `📚 Education Timeline:

🎓 Bachelor's Degree (Mar 2023 - Mar 2026)
   Institution: Coventry University (Softwarica College Partnership)
   Program: BSc (Hons) Ethical Hacking and Cybersecurity
   Status: Third-Year Student
   Location: Kathmandu, Nepal

📗 Higher Secondary Education (2020 - 2022)
   School: Jhapa Model English School
   Major: Management with Computer Science

📘 Primary & Lower Secondary (2005 - 2019)
   Jhapa Model English School
   Completed foundational academic education`,
    
    experience: `💼 Professional Experience:

🚀 DTEmpire Platform Lead (Current)
   - Built and maintain AI platform with 10,000+ daily interactions
   - Deployed 6+ live services with 99%+ uptime
   - Developed Discord bot reducing manual moderation by 65%

🔧 Freelance Content Creator (YouTube: Dargo Tamber)
   - Created anime and gaming content
   - Skills: Video editing, graphic design, audience engagement

🎮 Game Server Administrator
   - Self-hosted VPS management
   - Server deployment, optimization, and player support

🛡️ Security Research & CTFs
   - API Security Fundamentals (2025)
   - 100+ challenges on HackTheBox and TryHackMe
   - Web exploitation, cryptography, reverse engineering`,
    
    services: `🛠️ Professional Services:

🌐 Full-Stack Web Development
   - Security-oriented web applications
   - Performance optimization (95+ Lighthouse score)

🤖 Discord Bot Development
   - Custom AI-powered bots
   - Music streaming infrastructure
   - Community management tools

☁️ Cloud Security & Infrastructure
   - Oracle Cloud deployment
   - Security hardening and monitoring
   - VPS management and optimization

🔒 Security Consulting
   - API security assessment
   - Penetration testing
   - Security best practices implementation

🤖 AI Integration Services
   - Multi-model AI platform development
   - Custom AI solutions
   - API integration and optimization`,
    
    contact: `📬 Contact Information:

📧 Email: guptaa39@uni.coventry.ac.uk
🌐 Portfolio: ankitgupta.com.np
🔗 LinkedIn: linkedin.com/in/dargotamber
💻 GitHub: github.com/hyperdargo
📷 Instagram: instagram.com/_ankit_shah_dt_
💬 Discord Server: discord.gg/JYNCNAxPx7
📚 Documentation: docs.ankitgupta.com.np`,
    
    social: `🌐 Social Links:

💻 GitHub: https://github.com/hyperdargo
🔗 LinkedIn: https://linkedin.com/in/dargotamber
📷 Instagram: https://instagram.com/_ankit_shah_dt_
💬 Discord: https://discord.gg/JYNCNAxPx7
📺 YouTube: https://youtube.com/@dargotamber
🐦 Twitter/X: https://x.com/dargotamber
📚 Documentation: https://docs.ankitgupta.com.np`,
    
    achievements: `🏆 Achievements & Certifications:

🎯 API Security Fundamentals (2025)
   - Expertise in RESTful API security
   - OWASP API Top 10 mitigation

🔐 CTF Competitions
   - 100+ challenges solved on HackTheBox
   - TryHackMe completion certificates
   - Web exploitation, cryptography, reverse engineering

⭐ Open Source Contributions
   - Maintain 6+ GitHub repositories
   - 50+ stars across projects
   - Active community engagement

🚀 Production Deployments
   - 6+ live services with 99%+ uptime
   - 10,000+ daily user interactions
   - Scalable cloud infrastructure`,
    
    techstack: `🛠️ Complete Tech Stack:

🔹 Programming Languages
   Python • JavaScript • Node.js • Bash • SQL • PHP • HTML/CSS • LaTeX

🔹 Frameworks & Libraries
   Express.js • Discord.js • React • Flask • RESTful APIs • WebSocket • Canvas API

🔹 Cloud & Infrastructure
   Oracle Cloud • Docker • Nginx • PM2 • VPS Management • Linux Administration

🔹 Security Tools
   Metasploit • Burp Suite • Wireshark • Nmap • Nessus • OWASP ZAP • John the Ripper

🔹 Databases
   MongoDB • MySQL • PostgreSQL • Lavalink

🔹 AI/ML Stack
   OpenAI API • Claude API • Grok • DeepSeek • Pollinations AI • Multi-model Orchestration`,
    
    matrix: `🌌 THE MATRIX HAS YOU...

01001001 00100111 01101101 00100000 01001001 01101110 00100000
01010100 01101000 01100101 00100000 01001101 01100001 01110100 01110010 01101001 01111000

01110100 01110010 01111001 00100000 01101100 01101111 01100111 01100111 01101001 01101110 01100111
01101001 01101110 00100000 01110111 01101001 01110100 01101000 00111010 00100000

> ssh root@dtempire.ai
> Password: ************

🌐 Welcome to the DTEmpire mainframe...
🔓 Access Level: ADMIN
📊 System Status: OPERATIONAL
🤖 AI Models Online: 12/12
👥 Active Users: 10,342
🕐 Uptime: 99.7%

Remember: There is no spoon. The system is more than just code.`,
    
    fortune: [
      "💡 Debugging is like being the detective in a crime movie where you are also the murderer.",
      "🧠 In cybersecurity, the best firewall is between your ears.",
      "🚀 First, solve the problem. Then, write the code.",
      "🔐 Security is not a product, but a process.",
      "🤖 AI won't replace you, but someone using AI might.",
      "🌐 The cloud is just someone else's computer.",
      "💻 Code is like humor. When you have to explain it, it's bad.",
      "🔧 It works on my machine! - Every developer's favorite phrase",
      "🎯 The best error message is the one that never shows up.",
      "⚡ There are only 10 types of people in the world: those who understand binary and those who don't.",
      "🔍 The most secure system is the one that's turned off and buried in concrete.",
      "🚀 Keep it simple, secure, and scalable."
    ],
    
    status: `🟢 SYSTEM STATUS: ONLINE

👤 User: dargo@dtempire
🎯 Status: Coding with passion
💼 Current Projects: 4 active
🤖 AI Models: 12/12 online
☁️ Servers: All systems operational
📊 Uptime: 99.7% (30-day average)
👥 Daily Users: 10,000+
🔓 Security: All green
💾 Memory: 68% used
🔥 CPU: 42% load

🎮 Side Quest: Learning reverse engineering
📚 Reading: OWASP Web Security Testing Guide
🎵 Listening: Lo-fi coding beats
☕ Fuel: Black coffee, 3rd cup today`,
    
    date: `📅 Current Date & Time:
${new Date().toLocaleString('en-US', { 
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  timeZoneName: 'short'
})}

⏰ Time in Kathmandu, Nepal: ${new Date().toLocaleString('en-US', { 
  timeZone: 'Asia/Kathmandu',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false 
})}

🌍 Server Time: UTC ${new Date().getUTCHours().toString().padStart(2, '0')}:${new Date().getUTCMinutes().toString().padStart(2, '0')}`,
    
    whoami: `👤 User Identification:

Username: dargo
Real Name: Ankit Gupta
Role: Cybersecurity Student & Full-Stack Developer
Access Level: ROOT
Location: Kathmandu, Nepal
Shell: /bin/bash (with extra security)
Groups: developers, hackers, sysadmins, dreamers

💭 Current Mission: Build secure, scalable systems
🎯 Objective: Learn, create, secure, repeat
🔐 Security Clearance: LEVEL 3 - Ethical Hacker
🚀 Status: Always learning, always building

Remember with great power comes great responsibility. Use your skills wisely!`
  };

  const handleCommand = (cmd) => {
    const newHistory = [...terminalHistory, { type: 'command', content: cmd }];
    
    const trimmedCmd = cmd.toLowerCase().trim();
    
    if (trimmedCmd === 'clear') {
      setTerminalHistory([
        { type: 'system', content: 'Welcome to DargoTamber\'s interactive terminal portfolio' },
        { type: 'system', content: 'Type "help" or "ls" for available commands' },
        { type: 'system', content: 'Try "matrix" for something special!' }
      ]);
    } else if (trimmedCmd === 'fortune') {
      const randomFortune = terminalCommands.fortune[Math.floor(Math.random() * terminalCommands.fortune.length)];
      newHistory.push({ type: 'output', content: `🎲 ${randomFortune}` });
      setTerminalHistory(newHistory);
    } else if (terminalCommands[trimmedCmd]) {
      if (Array.isArray(terminalCommands[trimmedCmd])) {
        newHistory.push({ type: 'output', content: `🎲 ${terminalCommands[trimmedCmd][0]}` });
      } else {
        newHistory.push({ type: 'output', content: terminalCommands[trimmedCmd] });
      }
      setTerminalHistory(newHistory);
    } else if (trimmedCmd === 'exit' || trimmedCmd === 'quit') {
      newHistory.push({ type: 'error', content: 'Command "exit" disabled. You\'re stuck here with me! 😄' });
      setTerminalHistory(newHistory);
    } else if (trimmedCmd === 'sudo') {
      newHistory.push({ type: 'error', content: 'Nice try! I\'m not giving you root access that easily. 😏' });
      setTerminalHistory(newHistory);
    } else if (trimmedCmd === 'hack') {
      newHistory.push({ type: 'error', content: '🚫 Access Denied: Ethical hackers only! Try "help" for legal commands.' });
      setTerminalHistory(newHistory);
    } else if (trimmedCmd === 'secret') {
      newHistory.push({ type: 'output', content: 'You found a secret command! 🎉\n\nTry these special commands:\n• "matrix" - Enter the Matrix\n• "fortune" - Get tech wisdom\n• "status" - Check system status\n• "whoami" - Identify yourself\n\nHappy exploring!' });
      setTerminalHistory(newHistory);
    } else if (trimmedCmd) {
      newHistory.push({ type: 'error', content: `Command not found: ${trimmedCmd}\nType "help" for available commands.` });
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
                  'Full-Stack Developer',
                  2000,
                  'AI Integration Specialist',
                  2000,
                  'Cloud Security Engineer',
                  2000
                ]}
                wrapper="span"
                speed={50}
                className="text-green-400"
                repeat={Infinity}
              />
            </motion.div>
            <div className="flex space-x-4">
              <a href="https://raw.githubusercontent.com/hyperdargo/ankitgupta-portfolio-v4/main/src/CV.pdf" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFileAlt} className="text-2xl hover:text-green-400 transition-colors" title="Download CV" />
              </a>
              <a href="https://github.com/hyperdargo" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="text-2xl hover:text-green-400 transition-colors" title="GitHub" />
              </a>
              <a href="https://docs.ankitgupta.com.np/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faBook} className="text-2xl hover:text-green-400 transition-colors" title="Documentation" />
              </a>
              <a href="https://linkedin.com/in/dargotamber" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="text-2xl hover:text-green-400 transition-colors" title="LinkedIn" />
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
            <div className="flex ml-auto gap-2">
              <FontAwesomeIcon icon={faBrain} className="text-purple-400 text-sm" title="AI Specialist" />
              <FontAwesomeIcon icon={faShieldHalved} className="text-blue-400 text-sm" title="Security Expert" />
              <FontAwesomeIcon icon={faCloud} className="text-yellow-400 text-sm" title="Cloud Engineer" />
              <FontAwesomeIcon icon={faCode} className="text-red-400 text-sm" title="Full-Stack Developer" />
            </div>
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
              placeholder="Type 'help' for commands..."
            />
            <button 
              onClick={() => handleCommand(command)}
              className="ml-2 bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm"
            >
              Execute
            </button>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 py-4 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2025 DargoTamber. All rights reserved.</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <span className="text-gray-400 text-sm">Try: </span>
              <button onClick={() => handleCommand('fortune')} className="text-green-400 hover:text-green-300 text-sm">fortune</button>
              <button onClick={() => handleCommand('status')} className="text-green-400 hover:text-green-300 text-sm">status</button>
              <button onClick={() => handleCommand('matrix')} className="text-green-400 hover:text-green-300 text-sm">matrix</button>
              <button onClick={() => handleCommand('whoami')} className="text-green-400 hover:text-green-300 text-sm">whoami</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
