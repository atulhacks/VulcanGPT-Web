import React, { useState } from 'react';
import { 
  Book, 
  Download, 
  Code, 
  Settings, 
  Shield, 
  Github, 
  Search,
  Terminal,
  Copy,
  CheckCircle,
  ExternalLink,
  ChevronRight,
  FileText
} from 'lucide-react';

export const Documentation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: <Book className="w-4 h-4" />
    },
    {
      id: 'installation',
      title: 'Installation',
      icon: <Download className="w-4 h-4" />
    },
    {
      id: 'quick-start',
      title: 'Quick Start',
      icon: <Code className="w-4 h-4" />
    },
    {
      id: 'api-providers',
      title: 'API Providers',
      icon: <Settings className="w-4 h-4" />
    },
    {
      id: 'local-models',
      title: 'Local Models',
      icon: <Terminal className="w-4 h-4" />
    },
    {
      id: 'security',
      title: 'Security Features',
      icon: <Shield className="w-4 h-4" />
    },
    {
      id: 'github-integration',
      title: 'GitHub Integration',
      icon: <Github className="w-4 h-4" />
    },
    {
      id: 'web-search',
      title: 'Web Search',
      icon: <Search className="w-4 h-4" />
    }
  ];

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const CodeBlock: React.FC<{ code: string; language?: string; id: string }> = ({ code, language = 'bash', id }) => (
    <div className="relative bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
        <span className="text-sm text-gray-400">{language}</span>
        <button
          onClick={() => copyToClipboard(code, id)}
          className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors duration-200"
        >
          {copiedCode === id ? (
            <CheckCircle className="w-4 h-4 text-green-500" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
          <span className="text-sm">{copiedCode === id ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm text-gray-300">{code}</code>
      </pre>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'introduction':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Introduction to Vulcan GPT</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Vulcan GPT is an advanced AI framework engineered to explore the frontiers of language model interactions 
                with enhanced capabilities. It provides a powerful, unrestricted, and seamless AI-driven conversation experience.
              </p>
              
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-3 flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Documentation Version
                </h3>
                <p className="text-gray-300">
                  This documentation is for Vulcan GPT version 1.0.0. Make sure you're using the latest version 
                  for the most up-to-date information.
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4">Key Features</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Cloud models: DeepSeek API (default), OpenAI, Anthropic, and OpenRouter</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Local models: Run AI models directly on your device without API keys</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Real-time web search integration</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>GitHub integration for repository management</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Enhanced security features</span>
                </li>
              </ul>
            </div>
          </div>
        );

      case 'installation':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Installation Guide</h2>
              
              <h3 className="text-2xl font-semibold text-white mb-4">Prerequisites</h3>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Python 3.8 or higher</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>pip (Python package installer)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Git (optional, for cloning the repository)</span>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-white mb-4">Quick Installation</h3>
              
              <h4 className="text-xl font-semibold text-white mb-3">Windows</h4>
              <CodeBlock 
                code="run.bat" 
                language="batch"
                id="windows-install"
              />

              <h4 className="text-xl font-semibold text-white mb-3 mt-6">Linux / macOS</h4>
              <CodeBlock 
                code={`chmod +x run.sh
./run.sh`}
                language="bash"
                id="linux-install"
              />

              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6 mt-6">
                <h4 className="text-lg font-semibold text-yellow-400 mb-2">What the installer does:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Creates a virtual environment in the main folder</li>
                  <li>• Installs all required dependencies</li>
                  <li>• Installs llama-cpp-python for local models</li>
                  <li>• Starts the Vulcan GPT application</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'quick-start':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Quick Start Guide</h2>
              
              <h3 className="text-2xl font-semibold text-white mb-4">First Run</h3>
              <p className="text-gray-300 mb-6">
                When you first run Vulcan GPT, you'll be prompted to enter your API key. You can choose from multiple providers:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  { name: 'DeepSeek', url: 'https://platform.deepseek.com/api_keys', recommended: true },
                  { name: 'OpenAI', url: 'https://platform.openai.com/api-keys' },
                  { name: 'Anthropic', url: 'https://console.anthropic.com/' },
                  { name: 'OpenRouter', url: 'https://openrouter.ai/keys' }
                ].map((provider) => (
                  <div key={provider.name} className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-white">{provider.name}</h4>
                      {provider.recommended && (
                        <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                          Recommended
                        </span>
                      )}
                    </div>
                    <a 
                      href={provider.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-400 hover:text-red-300 text-sm flex items-center"
                    >
                      Get API Key <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4">Basic Commands</h3>
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex items-center space-x-4">
                    <span className="text-green-400 w-16">/new</span>
                    <span className="text-gray-300">Start a new conversation</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-green-400 w-16">/export</span>
                    <span className="text-gray-300">Export the current conversation</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-green-400 w-16">/prompt</span>
                    <span className="text-gray-300">Change the system prompt</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-green-400 w-16">/help</span>
                    <span className="text-gray-300">Display available commands</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-green-400 w-16">/exit</span>
                    <span className="text-gray-300">Exit the chat session</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'api-providers':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">API Providers</h2>
              <p className="text-gray-300 mb-6">
                Vulcan GPT supports multiple API providers simultaneously, allowing you to choose the best model for your needs.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full bg-gray-900/50 border border-gray-800 rounded-lg">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left p-4 text-white">Provider</th>
                      <th className="text-left p-4 text-white">Models</th>
                      <th className="text-left p-4 text-white">Features</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-800">
                      <td className="p-4 text-gray-300">DeepSeek</td>
                      <td className="p-4 text-gray-300">DeepSeek-Chat, DeepSeek-Coder</td>
                      <td className="p-4 text-gray-300">Advanced coding, strong reasoning</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="p-4 text-gray-300">OpenAI</td>
                      <td className="p-4 text-gray-300">GPT-4, GPT-3.5-Turbo</td>
                      <td className="p-4 text-gray-300">General purpose, strong reasoning</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="p-4 text-gray-300">Anthropic</td>
                      <td className="p-4 text-gray-300">Claude 3 Opus, Sonnet, Haiku</td>
                      <td className="p-4 text-gray-300">Long context, nuanced responses</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-gray-300">OpenRouter</td>
                      <td className="p-4 text-gray-300">Multiple models</td>
                      <td className="p-4 text-gray-300">Access to many models via one API</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case 'local-models':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Local Models</h2>
              <p className="text-gray-300 mb-6">
                Vulcan GPT supports running AI models locally without requiring API keys, using the llama-cpp-python library.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-4">Installation</h3>
              <CodeBlock 
                code={`# Install with local models support
pip install llama-cpp-python

# For GPU acceleration (CUDA)
CMAKE_ARGS="-DLLAMA_CUBLAS=on" pip install llama-cpp-python --no-cache-dir`}
                language="bash"
                id="local-models-install"
              />

              <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-6 mt-6">
                <h4 className="text-lg font-semibold text-orange-400 mb-2">Hardware Requirements</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• <strong>RAM:</strong> 8GB minimum, 16GB+ recommended</li>
                  <li>• <strong>CPU:</strong> Modern multi-core processor</li>
                  <li>• <strong>GPU:</strong> Optional, but recommended for larger models</li>
                  <li>• <strong>Storage:</strong> 4-20GB per model</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4 mt-8">Recommended Models</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { category: 'Low-end Hardware', models: ['TinyLlama', 'Phi-2'], size: '2-4GB' },
                  { category: 'Mid-range Hardware', models: ['Llama-2-7B', 'Mistral-7B'], size: '4-8GB' },
                  { category: 'High-end Hardware', models: ['Llama-2-13B', 'CodeLlama-13B'], size: '8GB+' }
                ].map((tier) => (
                  <div key={tier.category} className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">{tier.category}</h4>
                    <p className="text-sm text-gray-400 mb-3">Size: {tier.size}</p>
                    <ul className="space-y-1">
                      {tier.models.map((model) => (
                        <li key={model} className="text-gray-300 text-sm">• {model}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'security':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Security Features</h2>
              <p className="text-gray-300 mb-6">
                Vulcan GPT implements multiple layers of security to protect your data, API keys, and conversations.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-4">API Key Security</h3>
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Encryption at Rest</h4>
                <p className="text-gray-300 mb-4">
                  All API keys are encrypted using AES-256 encryption before being stored locally. The encryption key is derived from your system's hardware fingerprint.
                </p>
                <CodeBlock 
                  code={`# API keys are encrypted using Fernet (AES-256)
from cryptography.fernet import Fernet
import hashlib
import platform

# Generate encryption key from system fingerprint
def get_system_key():
    system_info = platform.node() + platform.processor()
    return hashlib.sha256(system_info.encode()).digest()

# Encrypt API key before storage
cipher = Fernet(base64.urlsafe_b64encode(get_system_key()))
encrypted_key = cipher.encrypt(api_key.encode())`}
                  language="python"
                  id="encryption-example"
                />
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4">API Key Rotation</h3>
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 mb-6">
                <p className="text-gray-300 mb-4">
                  Vulcan GPT supports automatic API key rotation to enhance security. This feature can be enabled in the configuration settings.
                </p>
                <ul className="space-y-2 text-gray-300 mb-4">
                  <li>• <strong>Automatic Rotation:</strong> Keys are rotated based on configurable intervals</li>
                  <li>• <strong>Usage Monitoring:</strong> Track API key usage and detect anomalies</li>
                  <li>• <strong>Backup Keys:</strong> Maintain backup keys for seamless rotation</li>
                  <li>• <strong>Audit Logging:</strong> Log all key rotation events for security auditing</li>
                </ul>
                <CodeBlock 
                  code={`# Enable API key rotation in config.json
{
  "security": {
    "api_key_rotation": {
      "enabled": true,
      "rotation_interval_days": 30,
      "backup_keys_count": 2,
      "audit_logging": true
    }
  }
}`}
                  language="json"
                  id="rotation-config"
                />
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4">Conversation Security</h3>
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Secure Mode</h4>
                <p className="text-gray-300 mb-4">
                  Enable secure mode for sensitive conversations. In this mode:
                </p>
                <ul className="space-y-2 text-gray-300 mb-4">
                  <li>• Conversations are not saved to disk</li>
                  <li>• Memory is cleared after each session</li>
                  <li>• Network traffic is encrypted with additional layers</li>
                  <li>• Temporary files are securely wiped</li>
                </ul>
                <CodeBlock 
                  code={`# Start Vulcan GPT in secure mode
python VulcanGPT.py --secure-mode

# Or enable via command during chat
/secure-mode enable`}
                  language="bash"
                  id="secure-mode"
                />
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4">Data Privacy</h3>
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-green-400 mb-3">Privacy Guarantees</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• <strong>Local Processing:</strong> When using local models, no data leaves your device</li>
                  <li>• <strong>No Telemetry:</strong> Vulcan GPT does not collect usage statistics or telemetry</li>
                  <li>• <strong>Conversation Ownership:</strong> All conversations are stored locally and owned by you</li>
                  <li>• <strong>API Compliance:</strong> Follows provider privacy policies when using cloud models</li>
                  <li>• <strong>Data Deletion:</strong> Complete data deletion tools available</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4 mt-8">Security Best Practices</h3>
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
                <ul className="space-y-3 text-gray-300">
                  <li>• <strong>Regular Updates:</strong> Keep Vulcan GPT updated to the latest version</li>
                  <li>• <strong>API Key Management:</strong> Regularly rotate API keys and monitor usage</li>
                  <li>• <strong>Secure Environment:</strong> Run on trusted devices with updated security software</li>
                  <li>• <strong>Network Security:</strong> Use secure networks and consider VPN for sensitive work</li>
                  <li>• <strong>Backup Security:</strong> Encrypt conversation backups if stored externally</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'github-integration':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">GitHub Integration</h2>
              <p className="text-gray-300 mb-6">
                Vulcan GPT includes powerful GitHub integration that allows you to interact with repositories, manage issues, and analyze code directly from your AI conversations.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-4">Setup and Configuration</h3>
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">1. Generate Personal Access Token</h4>
                <p className="text-gray-300 mb-4">
                  First, create a GitHub Personal Access Token (PAT) with the necessary permissions:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-gray-300 mb-4">
                  <li>Go to <a href="https://github.com/settings/tokens" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300">GitHub Settings → Developer settings → Personal access tokens</a></li>
                  <li>Click "Generate new token (classic)"</li>
                  <li>Select the following scopes:
                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                      <li><code className="bg-gray-800 px-2 py-1 rounded">repo</code> - Full repository access</li>
                      <li><code className="bg-gray-800 px-2 py-1 rounded">read:user</code> - Read user profile</li>
                      <li><code className="bg-gray-800 px-2 py-1 rounded">user:email</code> - Access user email</li>
                    </ul>
                  </li>
                  <li>Copy the generated token (you won't see it again!)</li>
                </ol>

                <h4 className="text-lg font-semibold text-white mb-3 mt-6">2. Configure in Vulcan GPT</h4>
                <CodeBlock 
                  code={`# From the main menu, select "Integrations" → "GitHub Integration"
# Or use the command during a chat session:
/github setup

# Enter your GitHub username and Personal Access Token when prompted`}
                  language="bash"
                  id="github-setup"
                />
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4">Available Features</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Repository Management</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• List all repositories with details</li>
                    <li>• View repository statistics</li>
                    <li>• Access repository files and structure</li>
                    <li>• Clone repository information</li>
                  </ul>
                </div>

                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Issue Management</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Create new issues with labels</li>
                    <li>• List existing issues</li>
                    <li>• Update issue status</li>
                    <li>• Add comments to issues</li>
                  </ul>
                </div>

                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Code Analysis</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Analyze code structure</li>
                    <li>• Review pull requests</li>
                    <li>• Generate documentation</li>
                    <li>• Code quality assessment</li>
                  </ul>
                </div>

                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Collaboration</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Team member management</li>
                    <li>• Branch information</li>
                    <li>• Commit history analysis</li>
                    <li>• Release management</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4">Command Reference</h3>
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Repository Commands</h4>
                    <CodeBlock 
                      code={`# List all repositories
/github repos

# Get repository details
/github repo <username>/<repository>

# List repository files
/github files <username>/<repository>

# Get file content
/github file <username>/<repository> <file-path>`}
                      language="bash"
                      id="repo-commands"
                    />
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Issue Commands</h4>
                    <CodeBlock 
                      code={`# List issues
/github issues <username>/<repository>

# Create new issue
/github create-issue <username>/<repository> "Issue Title" "Issue Description"

# Add labels to issue
/github label-issue <username>/<repository> <issue-number> "bug,enhancement"

# Close issue
/github close-issue <username>/<repository> <issue-number>`}
                      language="bash"
                      id="issue-commands"
                    />
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Analysis Commands</h4>
                    <CodeBlock 
                      code={`# Analyze repository structure
/github analyze <username>/<repository>

# Review pull request
/github review-pr <username>/<repository> <pr-number>

# Generate documentation
/github docs <username>/<repository>

# Get commit history
/github commits <username>/<repository>`}
                      language="bash"
                      id="analysis-commands"
                    />
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4">Advanced Usage</h3>
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold text-blue-400 mb-3">AI-Powered Code Review</h4>
                <p className="text-gray-300 mb-4">
                  Vulcan GPT can perform intelligent code reviews by analyzing your repositories:
                </p>
                <CodeBlock 
                  code={`# Example: AI code review conversation
You: "Review the latest changes in my project repository"
Vulcan GPT: *analyzes recent commits and provides detailed feedback*

You: "Create an issue for the performance optimization we discussed"
Vulcan GPT: *creates a detailed GitHub issue with optimization suggestions*

You: "Generate documentation for the new API endpoints"
Vulcan GPT: *analyzes code and generates comprehensive API documentation*`}
                  language="text"
                  id="ai-review-example"
                />
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4">Security and Permissions</h3>
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-yellow-400 mb-3">Important Security Notes</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• <strong>Token Storage:</strong> GitHub tokens are encrypted and stored locally</li>
                  <li>• <strong>Scope Limitation:</strong> Only request necessary permissions for your use case</li>
                  <li>• <strong>Token Rotation:</strong> Regularly rotate your GitHub tokens for security</li>
                  <li>• <strong>Audit Logs:</strong> GitHub provides audit logs for all API activities</li>
                  <li>• <strong>Rate Limiting:</strong> Vulcan GPT respects GitHub's API rate limits</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'web-search':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Web Search Integration</h2>
              <p className="text-gray-300 mb-6">
                Vulcan GPT includes real-time web search capabilities that allow the AI to access current information from the internet, enhancing its knowledge with up-to-date data.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-4">Search Providers</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Brave Search (Primary)</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Privacy-focused search engine</li>
                    <li>• No tracking or data collection</li>
                    <li>• High-quality search results</li>
                    <li>• API rate limits: 2000 queries/month (free tier)</li>
                  </ul>
                  <div className="mt-4">
                    <a 
                      href="https://brave.com/search/api/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-red-400 hover:text-red-300 text-sm flex items-center"
                    >
                      Get Brave Search API Key <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </div>

                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Fallback Options</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• DuckDuckGo (no API key required)</li>
                    <li>• SearX instances (self-hosted)</li>
                    <li>• Custom search endpoints</li>
                    <li>• Offline mode with cached results</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4">Configuration</h3>
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Setup Brave Search API</h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-300 mb-4">
                  <li>Visit <a href="https://brave.com/search/api/" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300">Brave Search API</a></li>
                  <li>Sign up for a free account</li>
                  <li>Generate your API key</li>
                  <li>Configure in Vulcan GPT:</li>
                </ol>
                <CodeBlock 
                  code={`# From main menu: Settings → Web Search → Configure API
# Or use command during chat:
/search setup

# Enter your Brave Search API key when prompted
# Test the connection with:
/search test`}
                  language="bash"
                  id="search-setup"
                />

                <h4 className="text-lg font-semibold text-white mb-3 mt-6">Configuration Options</h4>
                <CodeBlock 
                  code={`# config.json - Web Search Settings
{
  "web_search": {
    "enabled": true,
    "primary_provider": "brave",
    "fallback_provider": "duckduckgo",
    "max_results": 5,
    "result_length": "medium",
    "safe_search": "moderate",
    "timeout_seconds": 10,
    "cache_results": true,
    "cache_duration_hours": 24
  }
}`}
                  language="json"
                  id="search-config"
                />
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4">Usage Examples</h3>
              <div className="space-y-6">
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Automatic Search Integration</h4>
                  <p className="text-gray-300 mb-4">
                    Vulcan GPT automatically performs web searches when it detects queries that require current information:
                  </p>
                  <CodeBlock 
                    code={`You: "What's the latest news about AI developments?"
Vulcan GPT: *Automatically searches for recent AI news*
"Based on recent search results, here are the latest AI developments..."

You: "What's the current price of Bitcoin?"
Vulcan GPT: *Searches for current Bitcoin price*
"According to the latest data, Bitcoin is currently trading at..."

You: "How's the weather in New York today?"
Vulcan GPT: *Searches for current weather information*
"Current weather conditions in New York show..."`}
                    language="text"
                    id="auto-search-example"
                  />
                </div>

                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Manual Search Commands</h4>
                  <p className="text-gray-300 mb-4">
                    You can also trigger searches manually using specific commands:
                  </p>
                  <CodeBlock 
                    code={`# Basic search
/search "latest Python 3.12 features"

# Search with specific parameters
/search "machine learning tutorials" --results 10 --safe strict

# Search and summarize
/search-summarize "climate change 2024 reports"

# Search for code examples
/search-code "FastAPI authentication examples"

# Search recent news
/search-news "artificial intelligence" --days 7`}
                    language="bash"
                    id="manual-search-commands"
                  />
                </div>

                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Advanced Search Features</h4>
                  <CodeBlock 
                    code={`# Search with filters
/search "React hooks tutorial" --site:github.com --type:code

# Search specific time range
/search "COVID-19 statistics" --time:week

# Search with location
/search "restaurants" --location:"San Francisco, CA"

# Search and compare
/search-compare "Python vs JavaScript performance 2024"

# Search and fact-check
/search-verify "Is the Earth flat?" --sources:scientific`}
                    language="bash"
                    id="advanced-search"
                  />
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4">Search Result Processing</h3>
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold text-blue-400 mb-3">AI-Enhanced Results</h4>
                <p className="text-gray-300 mb-4">
                  Vulcan GPT processes search results intelligently:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• <strong>Content Summarization:</strong> Automatically summarizes long articles</li>
                  <li>• <strong>Relevance Ranking:</strong> Ranks results based on query relevance</li>
                  <li>• <strong>Fact Extraction:</strong> Extracts key facts and figures</li>
                  <li>• <strong>Source Credibility:</strong> Evaluates source reliability</li>
                  <li>• <strong>Duplicate Removal:</strong> Filters out duplicate information</li>
                  <li>• <strong>Context Integration:</strong> Integrates search results with conversation context</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4">Privacy and Performance</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-green-400 mb-3">Privacy Features</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• No search history stored by default</li>
                    <li>• Anonymous search queries</li>
                    <li>• Local result caching</li>
                    <li>• Configurable data retention</li>
                    <li>• VPN/Proxy support</li>
                  </ul>
                </div>

                <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-orange-400 mb-3">Performance Optimization</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Intelligent caching system</li>
                    <li>• Parallel search processing</li>
                    <li>• Result compression</li>
                    <li>• Bandwidth optimization</li>
                    <li>• Offline fallback mode</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4 mt-8">Troubleshooting</h3>
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-yellow-400 mb-3">Common Issues</h4>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <strong>Search not working:</strong>
                    <ul className="list-disc list-inside ml-4 mt-1 text-sm">
                      <li>Check internet connection</li>
                      <li>Verify API key is valid</li>
                      <li>Check API rate limits</li>
                      <li>Try fallback provider</li>
                    </ul>
                  </div>
                  <div>
                    <strong>Slow search results:</strong>
                    <ul className="list-disc list-inside ml-4 mt-1 text-sm">
                      <li>Reduce number of results</li>
                      <li>Enable result caching</li>
                      <li>Use more specific queries</li>
                      <li>Check network speed</li>
                    </ul>
                  </div>
                  <div>
                    <strong>Poor result quality:</strong>
                    <ul className="list-disc list-inside ml-4 mt-1 text-sm">
                      <li>Refine search terms</li>
                      <li>Use search filters</li>
                      <li>Try different providers</li>
                      <li>Adjust safe search settings</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center py-12">
            <p className="text-gray-400">Select a section from the sidebar to view documentation.</p>
          </div>
        );
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-900/20 via-black to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              <span className="text-red-500">Documentation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive guides and API references to help you get the most out of Vulcan GPT
            </p>
          </div>
        </div>
      </section>

      {/* Documentation Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Contents</h3>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors duration-200 ${
                        activeSection === section.id
                          ? 'bg-red-500/20 text-red-400 border-l-2 border-red-500'
                          : 'text-gray-400 hover:text-white hover:bg-gray-800'
                      }`}
                    >
                      {section.icon}
                      <span className="text-sm">{section.title}</span>
                      {activeSection === section.id && (
                        <ChevronRight className="w-4 h-4 ml-auto" />
                      )}
                    </button>
                  ))}
                </nav>

                {/* Quick Links */}
                <div className="mt-8 pt-6 border-t border-gray-800">
                  <h4 className="text-sm font-semibold text-white mb-3">Quick Links</h4>
                  <div className="space-y-2">
                    <a
                      href="https://github.com/atulhacks/VulcanGPT"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-white text-sm transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub Repository</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <a
                      href="https://github.com/atulhacks/VulcanGPT/releases"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-white text-sm transition-colors duration-200"
                    >
                      <Download className="w-4 h-4" />
                      <span>Latest Release</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
                {renderContent()}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};