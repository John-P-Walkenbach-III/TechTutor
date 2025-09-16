import { Routes, Route } from 'react-router-dom';
import Layout from '/src/components/Layout.jsx';
import Home from './pages/Home';
import LessonPage from './pages/LessonPage.jsx';
import StudyGuide from './pages/StudyGuide.jsx';
import Quizzes from './pages/Quizzes.jsx';
import Badges from './pages/Badges.jsx';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import Quiz from './pages/Quiz.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import MeetInstructor from './pages/MeetInstructor.jsx';
import WebDevelopment from './pages/WebDevelopment.jsx';
import PrintableQuiz from './pages/PrintableQuiz.jsx';
import PrintableAnswerKey from './pages/PrintableAnswerKey.jsx';
 
function App() {
  return (
    <Routes>
      {/* Routes with the main layout (including sidebar) */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route 
          path="computer-basics" 
          element={<LessonPage 
            category="computer-basics" 
            title="Computer Basics" 
            description="Start from scratch. Learn what a computer is, its main parts, and how to use it." 
          />} 
        />
        <Route 
          path="mobile-basics" 
          element={<LessonPage 
            category="mobile-basics" 
            title="Mobile Phone Basics" 
            description="Master your smartphone, whether it's an iPhone or an Android." 
          />} 
        />
        <Route 
          path="windows-nav" 
          element={<LessonPage 
            category="windows-nav" 
            title="Windows Navigation" 
            description="Learn to navigate Windows to find and manage your files and applications." 
          />} 
        />
        <Route 
          path="internet-connectivity" 
          element={<LessonPage 
            category="internet-connectivity" 
            title="Internet & Connectivity" 
            description="Learn the essentials of getting online, browsing safely, and using email." 
          />} 
        />
        <Route 
          path="computer-tips" 
          element={<LessonPage 
            category="computer-tips" 
            title="Computer Tips" 
            description="Practical advice for maintaining and speeding up your computer." 
          />} 
        />
        <Route 
          path="tips-tricks" 
          element={<LessonPage 
            category="tips-tricks" 
            title="Phone Tips & Tricks" 
            description="Learn how to get the most out of your smartphone with these helpful tips and tricks." 
          />} 
        />
        <Route 
          path="advanced-pc" 
          element={<LessonPage 
            category="advanced-pc" 
            title="Level Up Your PC Skills" 
            description="Go beyond the basics with these guides on more advanced computer topics." 
          />} 
        />
        <Route path="quizzes" element={<Quizzes />} />
        <Route path="quizzes/answer-key" element={<PrintableAnswerKey />} />
        <Route path="badges" element={<Badges />} />
        <Route path="quiz/:quizId" element={<Quiz />} />  
        <Route path="quiz/:quizId/print" element={<PrintableQuiz />} /> {/* Add this line */}
      
        <Route path="web-development" element={<WebDevelopment />} /> {/* Add this line */}
        <Route path="meet-instructor" element={<MeetInstructor />} />
        <Route path="study/:topicId" element={<StudyGuide />} />
      </Route>

      {/* Standalone routes for authentication */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;
