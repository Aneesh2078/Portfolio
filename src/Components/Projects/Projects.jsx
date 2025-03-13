import React from "react";
import ProjectCard from "./ProjectCard";
import ticTacToeImg from "../../assets/tic-tac-toe.png";
import calculatorImg from "../../assets/calculator.png";
import todoListImg from "../../assets/todo-list.png";
import stopwatchImg from "../../assets/stopwatch.png";
import ticTacToeVideo from "../../assets/TictacToe.mp4";
import calculatorVideo from "../../assets/Calculator.mp4";
import todoListVideo from "../../assets/Todo List.mp4";
import stopwatchVideo from "../../assets/Stopwatch.mp4";

const Projects = () => {
  return (
    <div id="Projects" className="padding-10 md:padding-24 text-white">
      {/* Title with Shadow */}
      <h1 className="text-2xl md:text-4xl text-white font-bold shadow-lg padding-2 inline-block rounded-lg">
        Projects
      </h1>

      {/* Wrapper div with shadow effect */}
      <div className="padding-y-12 padding-x-8 flex flex-wrap gap-5">
        <div className="shadow-2xl shadow-blue-500 rounded-xl p-4">
          <ProjectCard
            title="Tic Tac Toe (Using Kotlin)"
            main="This is a Tic Tac Toe game implemented as a website."
            img={ticTacToeImg}
            githubLink="https://github.com/Aneesh2078/PRODIGY-_AD_4"
            demoVideo={ticTacToeVideo}
          />
        </div>

        <div className="shadow-2xl shadow-blue-500 rounded-xl p-4">
          <ProjectCard
            title="Calculator (Using Kotlin)"
            main="This is a calculator application developed using Kotlin."
            img={calculatorImg}
            githubLink="https://github.com/Aneesh2078/PRODIGY_AD_01"
            demoVideo={calculatorVideo}
          />
        </div>

        <div className="shadow-2xl shadow-blue-500 rounded-xl p-4">
          <ProjectCard
            title="Todo List (Using Java)"
            main="This is a Todo List application developed using Java."
            img={todoListImg}
            githubLink="https://github.com/Aneesh2078/PRODIGY_AD_02"
            demoVideo={todoListVideo}
          />
        </div>

        <div className="shadow-2xl shadow-blue-500 rounded-xl p-4">
          <ProjectCard
            title="Stopwatch (Using Kotlin & Java)"
            main="This is a stopwatch application developed using both Kotlin and Java."
            img={stopwatchImg}
            githubLink="https://github.com/Aneesh2078/PRODIGY_AD_03"
            demoVideo={stopwatchVideo}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
