import React from "react";

const Experience = () => {
  return (
    <div id="Experience" className="p-6 md:p-12 lg:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold text-center mb-8">
        Experience
      </h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* First Experience (Technical Support Engineer, GlowTouch) */}
        <div className="flex flex-col sm:flex-row gap-6 bg-slate-950 bg-opacity-45 rounded-lg p-6 items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwNNfs1YXAjsnM4SwePctmRVD-ffOHSI2ZQg&s"
            alt="GlowTouch"
            className="w-16 h-16 sm:w-20 sm:h-20"
          />
          <div className="text-white text-center sm:text-left">
            <h2 className="text-lg font-semibold">
              Technical Support Engineer, GlowTouch
            </h2>
            <p className="text-sm font-thin">Jul 2024 - Sept 2024</p>
            <ul className="text-sm p-2 mt-2">
              <li>- Worked on Technical Troubleshooting</li>
              <li>- Managed Multitasking and Goal Achievement</li>
            </ul>
            <h3 className="text-sm font-semibold mt-2">Skills:</h3>
            <ul className="text-sm p-2 mt-1">
              <li>• Technical Troubleshooting</li>
              <li>• Multitasking and Goal Achievement</li>
              <li>• Computer Networks</li>
            </ul>
          </div>
        </div>

        {/* Second Experience (Web Development Intern, Zephyr Technologies) */}
        <div className="flex flex-col sm:flex-row gap-6 bg-slate-950 bg-opacity-45 rounded-lg p-6 items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9CS9qZqgW1qFF40W7vNcklo4b6EeKlw664Q&s"
            alt="Zephyr Technologies"
            className="w-16 h-16 sm:w-20 sm:h-20"
          />
          <div className="text-white text-center sm:text-left">
            <h2 className="text-lg font-semibold">
              Web Development Intern, Zephyr Technologies
            </h2>
            <p className="text-sm font-thin">Dec 2023 - Feb 2024</p>
            <ul className="text-sm p-2 mt-2">
              <li>- Worked on Web Development Project: E-Commerce</li>
            </ul>
            <h3 className="text-sm font-semibold mt-2">Skills:</h3>
            <ul className="text-sm p-2 mt-1">
              <li>• HTML</li>
              <li>• CSS</li>
              <li>• JavaScript</li>
              <li>• React</li>
              <li>• MongoDB</li>
              <li>• Express</li>
              <li>• Node.js</li>
            </ul>
          </div>
        </div>

        {/* Third Experience (Machine Learning Intern, Blueline Computers) */}
        <div className="flex flex-col sm:flex-row gap-6 bg-slate-950 bg-opacity-45 rounded-lg p-6 items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa6sWm6B2kkLE5vDrIuWPc3BRp5Hvg3R2yjw&s"
            alt="Blueline Computers"
            className="w-16 h-16 sm:w-20 sm:h-20"
          />
          <div className="text-white text-center sm:text-left">
            <h2 className="text-lg font-semibold">
              Machine Learning Intern, Blueline Computers
            </h2>
            <p className="text-sm font-thin">Sept 2022 - Oct 2022</p>
            <ul className="text-sm p-2 mt-2">
              <li>- Worked on Machine Learning Project: House Rent AI</li>
            </ul>
            <h3 className="text-sm font-semibold mt-2">Skills:</h3>
            <ul className="text-sm p-2 mt-1">
              <li>• Deep learning techniques</li>
              <li>• LSTM Algorithm</li>
              <li>• NumPy</li>
              <li>• Pandas</li>
              <li>• scikit-learn</li>
              <li>• TensorFlow</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
