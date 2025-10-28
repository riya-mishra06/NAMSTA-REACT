import { useState } from "react";

const Section = ({ title, description, isVisible, toggleVisibility }) => {
  return (
    <div className="border border-gray-300 rounded-lg shadow-sm bg-white p-4 m-4 transition-all duration-300 hover:shadow-md">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <button
          onClick={toggleVisibility}
          className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
        >
          {isVisible ? "Hide" : "Show"}
        </button>
      </div>
      {isVisible && (
        <p className="mt-3 text-gray-700 leading-relaxed">{description}</p>
      )}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("about");

  const toggleSection = (section) => {
    setVisibleSection((prev) => (prev === section ? null : section));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Instamart
        </h1>

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
