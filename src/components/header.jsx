import React from "react";
import { useDate } from "../utils/hooks/useDate";

const Header = () => {
  const date = useDate();
  return (
    <div>
      <h2 className="font-bold text-2xl">Today's Task</h2>
      <span className="text-sm">{date}</span>
    </div>
  );
};

export default Header;
