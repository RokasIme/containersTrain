import { useEffect, useState } from "react";
import { initialBoxesContext } from "./initialBoxesContext";

import { BoxesContext } from "./boxesContext";

export function BoxesContextWrapper(props) {
  const [boxes, setBoxes] = useState(initialBoxesContext.boxes);

  useEffect(() => {
    fetchBoxes();
  }, []);

  function fetchBoxes() {
    fetch("http://localhost:5445/api/public/boxes", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setBoxesList(data.list);
        }
      })
      .catch(console.error);
  }

  function setBoxesList(data) {
    setBoxes(() => data);
  }

  function adminDeleteBox(id) {
    setBoxes((list) => list.filter((m) => m.id !== id));
  }

  function adminRefreshBoxes() {
    fetchBoxes();
  }

  const value = {
    boxes,
    setBoxesList,
    adminDeleteBox,
    adminRefreshBoxes,
  };

  return <BoxesContext.Provider value={value}>{props.children}</BoxesContext.Provider>;
}
