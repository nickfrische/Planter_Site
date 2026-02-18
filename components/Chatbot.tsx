'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const quickActions = [
  { label: 'SUBSCRIPTIONS', message: 'Tell me about planter subscriptions' },
  { label: 'SERVICE AREAS', message: 'What areas do you serve?' },
  { label: 'GET STARTED', message: 'How do I get started?' },
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    {
      text: 'Hi! How can we help you today?',
      isUser: false,
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = (text?: string) => {
    const messageText = text || inputValue;
    if (!messageText.trim()) return;

    setMessages([...messages, { text: messageText, isUser: true }]);
    setInputValue('');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: 'Thanks for your message! A team member will respond shortly. You can also call us at (248) 555-0123 or request a consultation through our contact form.',
          isUser: false,
        },
      ]);
    }, 1000);
  };

  const handleQuickAction = (message: string) => {
    handleSend(message);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 max-w-[calc(100vw-2rem)] sm:max-w-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-[calc(100vw-2rem)] sm:w-[360px] max-w-[360px] bg-white rounded-lg shadow-2xl overflow-hidden"
          >
            <div className="bg-forest-600 text-white p-4 flex justify-between items-center">
              <span className="font-semibold">CHAT WITH US</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors"
                aria-label="Close chat"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="h-[70vh] max-h-[500px] sm:h-[400px] flex flex-col">
              <div className="flex-1 p-4 overflow-y-auto space-y-3">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-2 rounded-lg ${
                        msg.isUser
                          ? 'bg-forest-600 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              {messages.length === 1 && (
                <div className="px-4 pb-3 flex flex-wrap gap-2">
                  {quickActions.map((action) => (
                    <button
                      key={action.label}
                      onClick={() => handleQuickAction(action.message)}
                      className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
                    >
                      {action.label}
                    </button>
                  ))}
                </div>
              )}

              <div className="p-4 border-t border-gray-200">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent outline-none"
                  />
                  <button
                    onClick={() => handleSend()}
                    className="px-4 py-2 bg-forest-600 text-white rounded-lg hover:bg-forest-700 transition-colors"
                    aria-label="Send message"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-forest-600 text-white rounded-full shadow-lg hover:bg-forest-700 transition-colors flex items-center justify-center"
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </motion.button>
    </div>
  );
}
