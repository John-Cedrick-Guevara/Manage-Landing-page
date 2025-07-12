import React from "react";

const About = () => {
  const about = [
    {
      heading: "Track company-wide progress",
      description:
        "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the done to the smallest of details. Never lose sight of the bigger picture again.",
    },
    {
      heading: "Advanced built-in reports",
      description:
        "Set internal devlivery estimates and track progress toward company goals. Our customizable dashboards helps your build build out the reports your need to keep key stakeholders informed.",
    },
    {
      heading: "Everything you need in one place",
      description:
        "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an-all-in-one team productivity solution.",
    },
  ];

  return (
    <section className="py-4 lg:flex items-start justify-around max-w-5xl mx-auto">
      {/* heading */}
      <div className="w-full max-w-xs lg: lg:max-w-sm mx-auto max-lg:text-center space-y-3">
        <h1 className="text-blue-950 text-2xl lg:text-3xl font-bold max-lg:px-10">
          What's different about Manage?
        </h1>
        <p className="text-slate-400 lg:text-lg lg:w-xs">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-mage for modern digital product
          teams.
        </p>
      </div>

      {/* list of things */}
      <div className="space-y-12 max-lg:mt-12 mx-auto max-lg:max-w-md">
        {about.map((item, index) => (
          <div key={index} className="max-lg:pl-4 max-w-lg ">
            {/* heading */}
            <div className="max-lg:bg-orange-50 rounded-l-full flex items-center gap-4">
              <h1 className="bg-orange-400 text-white py-2 px-6 font-bold rounded-full w-fit">
                {index + 1 > 10 ? index : "0" + (index + 1)}
              </h1>

              <h1 className="text-blue-950 font-semibold text-lg text-start ">
                {item.heading}
              </h1>
            </div>

            {/* description */}
            <p className="text-slate-400 pt-2 pr-4 lg:pl-20">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
