import React, { useState } from "react";

const Text = ({ textString, maxLength }) => {
  const [isTextHidden, setIsTextHidden] = useState(true);

  const showReadMore = () => {
    setIsTextHidden(isTextHidden ? false : true);
  };

  return (
    <div>
      {isTextHidden ? textString.substring(0, maxLength) : textString}{" "}
      <span style={{ color: "blue" }} onClick={() => showReadMore()}>
        {isTextHidden ? "...read more" : "show less"}
      </span>
    </div>
  );
};

export default Text;
