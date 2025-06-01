import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 pt-9"
    >
      <div>
        <h1 className="text-5xl font-bold mb-8 text-center text-gray-800">
          About Me
        </h1>

        <p className="text-xl mb-6 text-gray-700 leading-relaxed">
          Hello, I'm <strong> Shubham Yadav</strong>, a dedicated<strong>  Full Stack Developer</strong> with a strong focus on
          the MERN Stack and React Native. I specialize in building modern, scalable,
          and user-friendly web and mobile applications. With a solid IT background,
          I am committed to crafting impactful and visually striking software solutions
          that deliver great user experiences on both Web and Android platforms.
        </p>

        <h2 className="text-green-600 font-semibold text-3xl mb-4">
          Education
        </h2>
        <ul className="list-disc list-inside mb-6 text-xl text-gray-600">
          <li>
            <strong>B.Tech (C.S.E)</strong> - Dr. A.P.J. Abdul Kalam Technical University, Uttar Pradesh (2021–2024) – 7.48 CGPA
          </li>
          <li>
            <strong>Diploma (Mechanical Engineering)</strong> - BTEUP Lucknow (2018–2021) – 73.5%
          </li>
          <li>
            <strong>Intermediate</strong> - UP Board (2017–2018) – 57%
          </li>
          <li>
            <strong>High School</strong> - UP Board (2015–2016) – 76.6%
          </li>
        </ul>

        <h2 className="text-green-600 font-semibold text-3xl mb-4">
          Skills & Technologies
        </h2>
        <ul className="list-disc list-inside mb-6 text-xl text-gray-600">
          <li>JavaScript, HTML, CSS, Python</li>
          <li>React, Redux Toolkit, React Native, Tailwind CSS, Bootstrap</li>
          <li>Node.js, Express.js, GraphQL, MongoDB</li>
          <li>Git, GitHub, VS Code, Chrome DevTools</li>
          <li>Shopify, WordPress (basic)</li>
        </ul>

        <h2 className="text-green-600 font-semibold text-3xl mb-4">
          Experience
        </h2>
        <p className="text-xl mb-6 text-gray-600">
          <strong>Junior React Developer</strong> – Codbos Software Solutions Pvt. Ltd.<br />
          <em>Dec 2024 – Present</em>
        </p>
        <ul className="list-disc list-inside mb-6 text-xl text-gray-600">
          <li>Developed responsive educational websites using React, Redux Toolkit, and Tailwind CSS.</li>
          <li>Integrated dynamic components like course listings, galleries, enquiry forms, Google Maps, and social media.</li>
          <li>Converted Bootstrap templates into reusable React components.</li>
          <li>Implemented secure authentication and API integration using Axios.</li>
        </ul>

        <h2 className="text-green-600 font-semibold text-3xl mb-4">
          Projects Highlight
        </h2>
        <ul className="list-disc list-inside mb-6 text-xl text-gray-600">
          <li>
            <strong>Arena Animation:</strong> SEO-optimized education website built with React, Tailwind, Node.js, and MongoDB.{" "}
            <a
              href="https://arenaanimationfaridabad.com/"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </li>
          <li>
            <strong>P2PTask:</strong> C2C product delivery app with user auth and order/trip management using React and Laravel backend.{" "}
            <a
              href="https://p2ptask.com/"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </li>
          <li>
            <strong>LMS:</strong> Full-featured learning management system using MERN stack.{" "}
            <a
              href="https://github.com/shubhamyadav638/LMS"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
          </li>
        </ul>

        <h2 className="text-green-600 font-semibold text-3xl mb-4">
          Certifications & Training
        </h2>
        <ul className="list-disc list-inside mb-6 text-xl text-gray-600">
          <li>Python Training – Codbos Software Solutions, Lucknow (45 Days)</li>
          <li>Python Intern – PyIntern (28 Days)</li>
          <li>MERN Stack Training – TCS-iON (July 2024)</li>
          <li>Full Stack Internship – CETPA Infotech, Noida (July–Dec 2024)</li>
        </ul>

        <h2 className="text-green-600 font-semibold text-3xl mb-4">
          Awards & Achievements
        </h2>
        <ul className="list-disc list-inside mb-6 text-xl text-gray-600">
          <li>Participated in Annual Function (2022–23)</li>
          <li>Runner-up in College Tug of War Tournament</li>
        </ul>

        <h2 className="text-green-600 font-semibold text-3xl mb-4">
          Mission Statement
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          My mission is to leverage my technical skills in both web and mobile development,
          I strive to blend creativity with clean code to deliver powerful, scalable applications.
          I believe in lifelong learning and am dedicated to staying ahead in web and mobile technologies.
          My mission is to create solutions that not only function well but also leave a lasting user impact.
        </p>
      </div>
    </div>
  );
}

export default About;

