import React from "react";

const ProgrammingSkills = () => {
  const skills = ["HTML", "React", "PHP", "Android Studio"];

  return (
    <div id="ProgrammingSkills" className="p-6 md:p-16 text-white">
      <h1 className="text-2xl md:text-4xl font-bold">Programming Skills</h1>
      <div className="py-8 px-6">
        <div>
          {skills.map((skill, index) => (
            <div key={index} className="py-2">
              <h2 className="text-xl md:text-2xl">{skill}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgrammingSkills;