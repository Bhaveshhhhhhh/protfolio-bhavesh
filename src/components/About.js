import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#271839] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Bhavesh Choudhary, nice to meet you. Please take a look
              around.
            </p>
          </div>
          <div>
            <p>
              I specialize in developing web applications using{" "}
              <b>MongoDB, ExpressJS, ReactJS, and NodeJS </b>- collectively
              known as the MERN stack. Over the years, I have developed a deep
              understanding of the intricacies of these technologies, and I have
              honed my skills in developing full-stack applications that are
              optimized for performance and user experience. I have a passion
              for delivering high-quality code that meets the needs of clients
              and end-users alike, and I'm always looking for new challenges to
              help me grow as a developer. What would you do if you had a
              software expert available at your fingertips?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
