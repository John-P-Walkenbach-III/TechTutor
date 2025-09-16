import { topics } from './topics.js';
import { quizzes } from './quizzes.js';

// Helper function to get all topic IDs for a category
const topicIdsByCategory = topics.reduce((acc, topic) => {
  if (!acc[topic.category]) {
    acc[topic.category] = [];
  }
  acc[topic.category].push(topic.id);
  return acc;
}, {});

// Helper function to get all quiz IDs that have questions
const allQuizIds = quizzes
  .filter(q => q.questions && q.questions.length > 0)
  .map(q => q.id);

export const badgeData = [
  // Topic Completion Badges
  {
    id: 'comp-basics-badge',
    name: 'Computer Basics Pioneer',
    description: 'Completed all study guides in the Computer Basics section.',
    icon: '💻',
    condition: (completed) => {
      const ids = topicIdsByCategory['computer-basics'] || [];
      return ids.length > 0 && ids.every(id => completed.topics.includes(id));
    }
  },
  {
    id: 'mobile-basics-badge',
    name: 'Mobile Maestro',
    description: 'Completed all study guides in the Mobile Phone Basics section.',
    icon: '📱',
    condition: (completed) => {
      const ids = topicIdsByCategory['mobile-basics'] || [];
      return ids.length > 0 && ids.every(id => completed.topics.includes(id));
    }
  },
  {
    id: 'win-nav-badge',
    name: 'Windows Navigator',
    description: 'Completed all study guides in the Windows Navigation section.',
    icon: '🧭',
    condition: (completed) => {
      const ids = topicIdsByCategory['windows-nav'] || [];
      return ids.length > 0 && ids.every(id => completed.topics.includes(id));
    }
  },
  {
    id: 'computer-tips-badge',
    name: 'PC Pro',
    description: 'Completed all study guides in the Computer Tips section.',
    icon: '🛠️',
    condition: (completed) => {
      const ids = topicIdsByCategory['computer-tips'] || [];
      return ids.length > 0 && ids.every(id => completed.topics.includes(id));
    }
  },
  {
    id: 'internet-connectivity-badge',
    name: 'Online Navigator',
    description: 'Completed all study guides in the Internet & Connectivity section.',
    icon: '🌐',
    condition: (completed) => {
      const ids = topicIdsByCategory['internet-connectivity'] || [];
      return ids.length > 0 && ids.every(id => completed.topics.includes(id));
    }
  },
  {
    id: 'tips-tricks-badge',
    name: 'Tech Savvy',
    description: 'Completed all study guides in the Phone Tips & Tricks section.',
    icon: '💡',
    condition: (completed) => {
      const ids = topicIdsByCategory['tips-tricks'] || [];
      return ids.length > 0 && ids.every(id => completed.topics.includes(id));
    }
  },
  {
    id: 'advanced-pc-badge',
    name: 'PC Power User',
    description: 'Completed all study guides in the Level Up Your PC Skills section.',
    icon: '🚀',
    condition: (completed) => {
      const ids = topicIdsByCategory['advanced-pc'] || [];
      return ids.length > 0 && ids.every(id => completed.topics.includes(id));
    }
  },
  {
    id: 'web-dev-badge',
    name: 'Web Architect',
    description: 'Completed all study guides in the Web Development section.',
    icon: '🏗️',
    condition: (completed) => {
      const ids = topicIdsByCategory['web-development'] || [];
      return ids.length > 0 && ids.every(id => completed.topics.includes(id));
    }
  },
  // Quiz Completion Badges
  {
    id: 'quiz-comp-basics-1-badge',
    name: 'Computer Whiz',
    description: 'Passed the "What is a Computer?" quiz.',
    icon: '🧠',
    condition: (completed) => completed.quizzes.includes('comp-basics-1')
  },
  {
    id: 'quiz-comp-basics-2-badge',
    name: 'Hardware Hero',
    description: 'Passed the "Parts of a Computer" quiz.',
    icon: '⚙️',
    condition: (completed) => completed.quizzes.includes('comp-basics-2')
  },
  {
    id: 'quiz-comp-basics-3-badge',
    name: 'Spec Specialist',
    description: 'Passed the "Understanding Computer Specs" quiz.',
    icon: '📈',
    condition: (completed) => completed.quizzes.includes('comp-basics-3')
  },
  {
    id: 'quiz-mobile-1-badge',
    name: 'iPhone Expert',
    description: 'Passed the "iPhone Fundamentals" quiz.',
    icon: '🍏',
    condition: (completed) => completed.quizzes.includes('mobile-basics-1')
  },
  {
    id: 'quiz-mobile-2-badge',
    name: 'Android Ace',
    description: 'Passed the "Android Fundamentals" quiz.',
    icon: '🤖',
    condition: (completed) => completed.quizzes.includes('mobile-basics-2')
  },
  {
    id: 'quiz-win-nav-1-badge',
    name: 'Desktop Dominator',
    description: 'Passed the "Navigating the Desktop" quiz.',
    icon: '🖱️',
    condition: (completed) => completed.quizzes.includes('win-nav-1')
  },
  {
    id: 'quiz-win-nav-2-badge',
    name: 'File Commander',
    description: 'Passed the "Using File Explorer" quiz.',
    icon: '📁',
    condition: (completed) => completed.quizzes.includes('win-nav-2')
  },
  {
    id: 'quiz-computer-tips-1-badge',
    name: 'Performance Pro',
    description: 'Passed the "Speeding Up Your Computer" quiz.',
    icon: '🚀',
    condition: (completed) => completed.quizzes.includes('computer-tips-1')
  },
  {
    id: 'quiz-computer-tips-2-badge',
    name: 'Maintenance Mechanic',
    description: 'Passed the "PC Maintenance" quiz.',
    icon: '🔧',
    condition: (completed) => completed.quizzes.includes('computer-tips-2')
  },
  {
    id: 'quiz-computer-tips-3-badge',
    name: 'Digital Defender',
    description: 'Passed the "Online Safety" quiz.',
    icon: '🔒',
    condition: (completed) => completed.quizzes.includes('internet-connectivity-1')
  },
  {
    id: 'quiz-computer-tips-4-badge',
    name: 'Email Expert',
    description: 'Passed the "Email Basics" quiz.',
    icon: '📧',
    condition: (completed) => completed.quizzes.includes('internet-connectivity-2')
  },
  {
    id: 'quiz-internet-connectivity-3-badge',
    name: 'Web Wanderer',
    description: 'Passed the "Web Browsing Basics" quiz.',
    icon: '🧭',
    condition: (completed) => completed.quizzes.includes('internet-connectivity-3')
  },
  {
    id: 'quiz-internet-connectivity-4-badge',
    name: 'Connection Captain',
    description: 'Passed the "Wi-Fi & Mobile Data" quiz.',
    icon: '📶',
    condition: (completed) => completed.quizzes.includes('internet-connectivity-4')
  },
  {
    id: 'quiz-internet-connectivity-5-badge',
    name: 'Security Sentinel',
    description: 'Passed the "Antivirus & Firewalls" quiz.',
    icon: '🛡️',
    condition: (completed) => completed.quizzes.includes('internet-connectivity-5')
  },
  {
    id: 'quiz-computer-tips-5-badge',
    name: 'Account Admin',
    description: 'Passed the "Managing User Accounts" quiz.',
    icon: '🔑',
    condition: (completed) => completed.quizzes.includes('computer-tips-5')
  },
  {
    id: 'quiz-tips-2-badge',
    name: 'Battery Boss',
    description: 'Passed the "Improving Phone Battery Life" quiz.',
    icon: '🔋',
    condition: (completed) => completed.quizzes.includes('tips-tricks-2')
  },
  {
    id: 'quiz-tips-tricks-3-badge',
    name: 'Android Power User',
    description: 'Passed the "Advanced Android Features" quiz.',
    icon: '⚡',
    condition: (completed) => completed.quizzes.includes('tips-tricks-3')
  },
  {
    id: 'quiz-tips-tricks-4-badge',
    name: 'Payment Pro',
    description: 'Passed the "Using Your Phone\'s Digital Wallet" quiz.',
    icon: '💳',
    condition: (completed) => completed.quizzes.includes('tips-tricks-4')
  },
  {
    id: 'quiz-tips-tricks-5-badge',
    name: 'Home Screen Stylist',
    description: 'Passed the "Customizing Your Home Screen" quiz.',
    icon: '🎨',
    condition: (completed) => completed.quizzes.includes('tips-tricks-5')
  },
  {
    id: 'quiz-tips-tricks-6-badge',
    name: 'Notification Ninja',
    description: 'Passed the "Notification Settings" quiz.',
    icon: '🔕',
    condition: (completed) => completed.quizzes.includes('tips-tricks-6')
  },
  {
    id: 'quiz-tips-tricks-7-badge',
    name: 'Assistant Admiral',
    description: 'Passed the "Mastering Google Assistant" quiz.',
    icon: '🗣️',
    condition: (completed) => completed.quizzes.includes('tips-tricks-7')
  },
  {
    id: 'quiz-tips-tricks-8-badge',
    name: 'Privacy Protector',
    description: 'Passed the "App Permissions" quiz.',
    icon: '🛡️',
    condition: (completed) => completed.quizzes.includes('tips-tricks-8')
  },
  {
    id: 'quiz-tips-tricks-9-badge',
    name: 'Memory Guardian',
    description: 'Passed the "Google Photos" quiz.',
    icon: '🖼️',
    condition: (completed) => completed.quizzes.includes('tips-tricks-9')
  },
  {
    id: 'quiz-advanced-pc-1-badge',
    name: 'Extension Expert',
    description: 'Passed the "Power Up Your Browser with Extensions" quiz.',
    icon: '🧩',
    condition: (completed) => completed.quizzes.includes('advanced-pc-1')
  },
  {
    id: 'quiz-advanced-pc-2-badge',
    name: 'Cloud Commander',
    description: 'Passed the "Understanding Cloud Storage" quiz.',
    icon: '☁️',
    condition: (completed) => completed.quizzes.includes('advanced-pc-2')
  },
  {
    id: 'quiz-advanced-pc-3-badge',
    name: 'Security Guardian',
    description: 'Passed the "Securing Your Accounts with 2FA" quiz.',
    icon: '🔐',
    condition: (completed) => completed.quizzes.includes('advanced-pc-3')
  },
  {
    id: 'quiz-advanced-pc-4-badge',
    name: 'Windows Wizard',
    description: 'Passed the "Unlock God Mode" quiz.',
    icon: '🪄',
    condition: (completed) => completed.quizzes.includes('advanced-pc-4')
  },
  {
    id: 'quiz-web-dev-1-badge',
    name: 'HTML Apprentice',
    description: 'Passed the "Introduction to HTML" quiz.',
    icon: '📝',
    condition: (completed) => completed.quizzes.includes('web-dev-1')
  },
  {
    id: 'quiz-web-dev-2-badge',
    name: 'CSS Stylist',
    description: 'Passed the "Introduction to CSS" quiz.',
    icon: '🎨',
    condition: (completed) => completed.quizzes.includes('web-dev-2')
  },
  {
    id: 'quiz-web-dev-3-badge',
    name: 'JS Scripter',
    description: 'Passed the "Introduction to JavaScript" quiz.',
    icon: '📜',
    condition: (completed) => completed.quizzes.includes('web-dev-3')
  },
  {
    id: 'quiz-master-badge',
    name: 'Quiz Master',
    description: 'Completed all available quizzes.',
    icon: '🏆',
    condition: (completed) => {
      const ids = allQuizIds;
      return ids.length > 0 && ids.every(id => completed.quizzes.includes(id));
    }
  }
];