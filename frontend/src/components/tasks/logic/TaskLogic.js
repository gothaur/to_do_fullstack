import { useState } from "react";

function TaskLogic() {
  const [cardClass, setCardClass] = useState("secondary");

  const handleCardClick = (cardId) => {
    console.log("klik " + cardId);
  };

  const handleOnCardMouseEnter = (cardId) => {
    setCardClass("primary");
  };

  const handleOnCardMouseLeave = (task) => {
    setCardClass(`${task.completed ? "success" : "secondary"}`);
  };

  return {
    cardClass,
    handleCardClick,
    handleOnCardMouseEnter,
    handleOnCardMouseLeave,
  };
}

export default TaskLogic;
