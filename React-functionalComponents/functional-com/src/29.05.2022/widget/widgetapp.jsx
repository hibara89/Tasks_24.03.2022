import React from "react";
import Accordion from "./accordion";

const items = [
  {
    title: "What is React",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React",
    content: "React is a favourite js library among engineers",
  },
  {
    title: "How do you use React",
    content: "By creating components",
  },
];

const WidgetApp = () => {
  return (
    <div>
      <br />
      <Accordion items={items} />
    </div>
  );
};

export default WidgetApp;
