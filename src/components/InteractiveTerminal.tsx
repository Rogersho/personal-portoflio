import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HistoryItem {
  command: string;
  output: string | React.ReactNode;
}

export const InteractiveTerminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'welcome',
      output: (
        <div>
          <div>⚡ Rogers Cyber Terminal v2.4.0 [x86_64-apple-darwin]</div>
          <div>Type <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>help</span> to view all available commands.</div>
        </div>
      )
    }
  ]);

  const terminalBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only scroll the terminal container itself when user types commands (skip on initial load)
    if (history.length > 1 && terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let outputResult: string | React.ReactNode = '';

    switch (cmd) {
      case 'help':
        outputResult = (
          <div>
            <div style={{ color: 'var(--color-secondary)', fontWeight: 600 }}>Available Commands:</div>
            <div>• <span style={{ color: 'var(--color-primary)' }}>whoami</span> : Executive background & leadership</div>
            <div>• <span style={{ color: 'var(--color-primary)' }}>skills</span> : Display core technology matrix & proficiency</div>
            <div>• <span style={{ color: 'var(--color-primary)' }}>projects</span> : List production apps & platforms</div>
            <div>• <span style={{ color: 'var(--color-primary)' }}>contact</span> : Display direct phone, email & social links</div>
            <div>• <span style={{ color: 'var(--color-primary)' }}>quote</span> : Read developer manifesto</div>
            <div>• <span style={{ color: 'var(--color-primary)' }}>clear</span> : Reset the terminal output</div>
          </div>
        );
        break;

      case 'whoami':
        outputResult = PORTFOLIO_DATA.terminalCommands.whoami;
        break;

      case 'skills':
        outputResult = PORTFOLIO_DATA.terminalCommands.skills;
        break;

      case 'projects':
        outputResult = (
          <div>
            <div>🚀 {PORTFOLIO_DATA.terminalCommands.projects}</div>
            <div style={{ marginTop: '6px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Tip: Switch to the Projects tab for category filtering and full metrics!
            </div>
          </div>
        );
        break;

      case 'contact':
        outputResult = PORTFOLIO_DATA.terminalCommands.contact;
        break;

      case 'quote':
        outputResult = PORTFOLIO_DATA.terminalCommands.quote;
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        outputResult = `command not found: "${cmd}". Type "help" for a list of valid commands.`;
        break;
    }

    setHistory((prev) => [...prev, { command: input, output: outputResult }]);
    setInput('');
  };

  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <div className="t-btn t-red"></div>
          <div className="t-btn t-yellow"></div>
          <div className="t-btn t-green"></div>
        </div>
        <div className="terminal-title" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <TerminalIcon size={14} style={{ color: 'var(--color-primary)' }} />
          roger@nexastack-terminal:~
        </div>
        <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
          zsh 5.9
        </div>
      </div>

      <div className="terminal-body" ref={terminalBodyRef}>
        {history.map((item, index) => (
          <div key={index} className="terminal-line">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span className="terminal-prompt">roger@nexastack:~$</span>
              <span style={{ color: '#fff', fontWeight: 600 }}>{item.command}</span>
            </div>
            <div style={{ marginTop: '4px', paddingLeft: '16px', color: '#cbd5e1' }}>
              {item.output}
            </div>
          </div>
        ))}

        <form onSubmit={handleCommandSubmit} className="terminal-input-form">
          <span className="terminal-prompt">roger@nexastack:~$</span>
          <input
            type="text"
            className="terminal-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help'..."
          />
          <button type="submit" style={{ background: 'none', border: 'none', color: 'var(--color-primary)', cursor: 'pointer' }}>
            <CornerDownLeft size={16} />
          </button>
        </form>
      </div>
    </div>
  );
};
