import { useEffect, useState } from "react";

export const useDate = () => {
  const [date, setDate] = useState("");
  useEffect(() => {
    const today = new Date();
    const date = today.toLocaleDateString("en-US", {
      dateStyle: "full",
    });

    setDate(`${date} `);
  }, []);
  return date;
};
