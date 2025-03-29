'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function AiChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hi there! I\'m ApexNova\'s AI consultant. How can I help you today? I can answer questions about our services, provide recommendations, or schedule a call with a human consultant.'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Pre-defined responses for the AI demo
  const aiResponses: Record<string, string> = {
    services: "ApexNova offers a range of consulting services including strategic business consulting, marketing optimization, operational efficiency, digital transformation, website development, and data analytics. Each service is enhanced with AI to deliver superior results.",
    pricing: "Our consulting packages start at $2,500 for an initial assessment and strategy. Website development projects typically range from $3,500 to $15,000 depending on complexity. Would you like to discuss a specific service?",
    process: "Our process begins with an AI-powered business analysis to identify your needs, followed by a tailored proposal. After approval, we implement solutions with regular check-ins and deliver detailed reports on progress and results.",
    schedule: "I'd be happy to schedule a call with one of our consultants. Please provide your name, email, and preferred time, and we'll confirm the appointment. Alternatively, you can use our booking system at apexnovaconsulting.com/schedule.",
    website: "Our website development services include UX/UI design, responsive development, SEO optimization, and AI-powered analytics integration. We specialize in creating high-conversion sites that generate leads and enhance your brand.",
    marketing: "Our marketing optimization services use AI to analyze your current strategies, identify opportunities, and implement data-driven campaigns that target your ideal customers with precision.",
    ai: "We leverage AI across all our services to provide deeper insights, automate repetitive tasks, and deliver personalized strategies. Our AI systems analyze market trends, customer behavior, and operational data to give you a competitive edge."
  };

  // Simulate AI response generation
  const generateResponse = async (userMessage: string) => {
    setIsLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simple keyword matching for the demo
    const userMessageLower = userMessage.toLowerCase();
    let response = "I'm not sure I understand. Could you rephrase your question? I can help with information about our services, pricing, process, or scheduling a call with a human consultant.";
    
    if (userMessageLower.includes('service') || userMessageLower.includes('offer') || userMessageLower.includes('do you do')) {
      response = aiResponses.services;
    } else if (userMessageLower.includes('price') || userMessageLower.includes('cost') || userMessageLower.includes('how much')) {
      response = aiResponses.pricing;
    } else if (userMessageLower.includes('process') || userMessageLower.includes('how does it work') || userMessageLower.includes('steps')) {
      response = aiResponses.process;
    } else if (userMessageLower.includes('schedule') || userMessageLower.includes('call') || userMessageLower.includes('appointment') || userMessageLower.includes('talk to human')) {
      response = aiResponses.schedule;
    } else if (userMessageLower.includes('website') || userMessageLower.includes('web development') || userMessageLower.includes('site')) {
      response = aiResponses.website;
    } else if (userMessageLower.includes('market') || userMessageLower.includes('advertising') || userMessageLower.includes('promotion')) {
      response = aiResponses.marketing;
    } else if (userMessageLower.includes('ai') || userMessageLower.includes('artificial intelligence') || userMessageLower.includes('machine learning')) {
      response = aiResponses.ai;
    }
    
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === '') return;
    
    // Add user message
    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInput('');
    
    // Generate AI response
    await generateResponse(userMessage);
  };

  // Auto-scroll to the bottom of the chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex flex-col h-[500px]">
      {/* Chat header */}
      <div className="bg-primary p-4">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
          </div>
          <div>
            <h4 className="text-white font-medium">ApexNova AI Consultant</h4>
            <p className="text-white/70 text-sm">Online • Responds instantly</p>
          </div>
        </div>
      </div>
      
      {/* Chat messages */}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.role === 'user'
                  ? 'bg-primary text-white rounded-tr-none'
                  : 'bg-white text-secondary-800 shadow-sm rounded-tl-none'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start mb-4">
            <div className="bg-white text-secondary-800 max-w-[80%] rounded-lg rounded-tl-none p-3 shadow-sm">
              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      {/* Chat input */}
      <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4 bg-white">
        <div className="flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 border border-gray-300 rounded-l-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            disabled={isLoading}
          />
          <button
            type="submit"
            className="bg-primary text-white rounded-r-md px-4 py-2 font-medium hover:bg-primary-600 transition-colors"
            disabled={isLoading}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
} 