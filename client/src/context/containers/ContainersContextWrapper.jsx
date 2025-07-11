import { useContext, useEffect, useState } from "react";
import { initialContainersContext } from "./initialContainersContext";
import { ContainersContext } from "./ContainersContext";
import { UserContext } from "../user/UserContext";

export function ContainersContextWrapper(props) {
  const [containers, setContainers] = useState(initialContainersContext.publicContainers);

  const { isLoggedIn } = useContext(UserContext);

  useEffect(() => {
    if (!isLoggedIn) {
      fetchContainers();
    }
  }, [isLoggedIn]);

  function fetchContainers() {
    fetch("http://localhost:5445/api/public/containers", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setContainersList(data.list);
        }
      })
      .catch(console.error);
  }

  function setContainersList(data) {
    setContainers(() => data);
  }

  function adminRefreshContainer() {
    fetchContainers();
  }

  function adminDeleteContainer(id) {
    setContainers((list) => list.filter((c) => c.id !== id));
  }

  const value = {
    containers,
    setContainersList,
    adminRefreshContainer,
    adminDeleteContainer,
  };

  return <ContainersContext.Provider value={value}>{props.children}</ContainersContext.Provider>;
}
