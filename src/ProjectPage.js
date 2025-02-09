import React from 'react';
import hr from './images/HrPortal.png';
import shoe from './images/shoe_shop.png';
import chat from './images/chatApp.png';

const ProjectPage = () => {
  return (
    <div className="project-page">
      <h1 className="page-title">PROJECT WORK</h1>

      <div className="project-grid">
        {/* HRMS Project */}
        <div className="project-card">
          <img src={hr} alt="HRMS Project" className="project-image" />
          <div className="project-info">
            <h2>Human Resource Management System</h2>
            <p>
              HRMS is a web-based application leveraging **React** ⚛️ for dynamic frontend interfaces,
              **Node.js** 🌐 for scalable backend operations, and **MongoDB** 📊 for robust data management.
              It centralizes employee information, attendance tracking, payroll processing, and performance evaluations
              into a unified platform, optimizing HR operations efficiently.
            </p>
            <a href="https://github.com/Gopinath2408/Hrportal-Management-System" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        </div>

        {/* Online Shoe Mart Project */}
        <div className="project-card">
          <img src={shoe} alt="Online Shoe Mart" className="project-image" />
          <div className="project-info">
            <h2>Online Shoe Mart</h2>
            <p>
              A user-friendly **e-commerce platform** 🌐 built with **HTML, CSS, JavaScript**, and **MySQL Database** 📊.
              Enables seamless browsing, product selection, account management, and secure transactions 💳 for online shoe purchases.
            </p>
            <a href="https://github.com/Gopinath2408/Online-Shoe-Mart" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        </div>


        <div className="project-card">
          <img src={chat} alt="HRMS Project" className="project-image" />
          <div className="project-info">
            <h2>Chat Application</h2>
            <p>
              Here’s your Chat Application description with similar styling and stickers:

              **Chat Application** 💬 is a real-time messaging platform built with **React** ⚛️ for an interactive frontend and **Firebase** 🔥 for seamless backend communication. Instead of using WebSockets, it leverages **Firebase Realtime Database** 📡 to store and retrieve messages instantly. Multiple users can join the same chat room using a shared **Room ID** 🔗, enabling effortless group conversations.
            </p>
            <a href="https://github.com/Gopinath2408/ChatApp" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectPage;
