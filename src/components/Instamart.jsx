import { useState } from "react";

const Section = ({ title, description, isVisible, toggleVisibility }) => {
  return (
    <div className="border-2 border-gray-200 dark:border-gray-700 rounded-xl shadow-md bg-white dark:bg-gray-800 p-6 m-4 transition-all duration-300 hover:shadow-xl hover:border-blue-400 dark:hover:border-blue-500">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          {title}
        </h3>
        <button
          onClick={toggleVisibility}
          className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center gap-2"
        >
          <span>{isVisible ? "Hide" : "Show"}</span>
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${
              isVisible ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
      
      {/* Smooth Expand/Collapse Animation */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isVisible ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pt-4 border-t-2 border-gray-200 dark:border-gray-700">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("about");

  const toggleSection = (section) => {
    setVisibleSection((prev) => (prev === section ? null : section));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 py-12">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Enhanced Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-6xl">🛒</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Instamart
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Your instant grocery delivery partner
          </p>
        </div>

        {/* Sections */}
        <Section
          title="About Instamart"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, porro aliquid. Nostrum ratione delectus deleniti totam possimus nobis omnis non commodi."
          isVisible={visibleSection === "about"}
          toggleVisibility={() => toggleSection("about")}
        />

        <Section
          title="Team Instamart"
          description="Our team is passionate about creating fast, reliable grocery delivery experiences."
          isVisible={visibleSection === "team"}
          toggleVisibility={() => toggleSection("team")}
        />

        <Section
          title="Careers"
          description="Join Instamart to work with a growing team focused on innovation in quick commerce."
          isVisible={visibleSection === "careers"}
          toggleVisibility={() => toggleSection("careers")}
        />
      </div>
    </div>
  );
};

export default Instamart;