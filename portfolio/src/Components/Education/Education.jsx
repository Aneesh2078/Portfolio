import React from "react";

const Education = () => {
  return (
    <div id="Education" className="p-6 md:p-16 text-white">
      <h1 className="text-2xl md:text-4xl font-bold">Education</h1>
      <div className="py-8 px-6">
        <ul className="list-none">
          <li className="py-2">
            <h2 className="text-xl md:text-2xl font-semibold">
              Master of Computer Applications (MCA) (Expected: 2026)
            </h2>
            <p className="text-sm md:text-md">Poornaprajna Institute Of Management, Udupi</p>
          </li>

          <li className="py-2">
            <h2 className="text-xl md:text-2xl font-semibold">
              Bachelor of Computer Applications (BCA) (2024)
            </h2>
            <p className="text-sm md:text-md">St. Mary's College, Shirva</p>
          </li>

          <li className="py-2">
            <h2 className="text-xl md:text-2xl font-semibold">PUC (2022)</h2>
            <p className="text-sm md:text-md">Jnana Ganga Pre-University College, Moodubelle</p>
          </li>

          <li className="py-2">
            <h2 className="text-xl md:text-2xl font-semibold">SSLC (2019)</h2>
            <p className="text-sm md:text-md">Government High School, Volakadu, Udupi</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
