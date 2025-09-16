import React from 'react';
import { useAuth } from '../context/AuthContext';
import './MeetInstructor.css';

function MeetInstructor() {
  const { currentUser } = useAuth();

  const instructorEmail = "johnwalkenbach1@gmail.com";
  let mailtoLink = `mailto:${instructorEmail}`;

  if (currentUser) {
    const subject = encodeURIComponent("Question from TechTutor Student");
    const body = encodeURIComponent(`Sent from: ${currentUser.email}\n\n`);
    mailtoLink = `mailto:${instructorEmail}?subject=${subject}&body=${body}`;
  }

  return (
    <div className="instructor-container">
      <div className="instructor-card">
        <div className="instructor-header">
          <img 
            src="/john-placeholder.jpg" // We'll add this image in a moment
            alt="John, your instructor" 
            className="instructor-photo"
          />
          <div className="instructor-title">
            <h1>Meet Your Instructor</h1>
            <h2>John W.</h2>
          </div>
        </div>
        <div className="instructor-bio">
          <p>
            Hello! I'm John, and at 52 years young, I'm excited to be your guide on this journey to digital literacy. My passion is helping people feel confident and empowered when using technology.
          </p>
          <p>
            While this is my first formal teaching role, I've spent years helping friends and family with their tech, and I've designed these courses to be simple, clear, and practical. I believe that everyone can master the basics of computers and smartphones, and I'm here to support you every step of the way.
          </p>
          <p>
            When I'm not teaching, I enjoy watching NFL, Listening to Rock Music, and exploring new tech gadgets. I look forward to helping you achieve your goals! YOU GOT THIS!!
          </p>
        </div>
      </div>

      <div className="contact-card">
        <h2>Contact Me</h2>
        <p>
          If you have any questions, comments, or topics you want to study,{' '}
          <a href={mailtoLink}>
            send me an email
          </a>.
        </p>
      </div>
    </div>
  );
}

export default MeetInstructor;