import React from "react";
import Text from "./text";

const textString =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quam beatae porro consequatur rerum? Quos, hic, cupiditate tenetur ducimus perferendis nobis tempora ea nihil aut dignissimos iure reiciendis dolor tempore perspiciatis ut vel voluptatibus sed iusto unde maxime praesentium. Molestiae consectetur rem at sapiente qui vitae nihil nemo!";

const maxLength = 150;

const TextApp = () => {
  return (
    <div>
      <Text textString={textString} maxLength={maxLength} />
    </div>
  );
};

export default TextApp;
