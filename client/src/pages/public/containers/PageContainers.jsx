import { useContext } from "react";
import { PageTitle } from "../../../components/page-title/PageTitle";
import { ContainersContext } from "../../../context/containers/ContainersContext";
import { ContainerList } from "../../../components/containers/ContainersList";

export function PageContainers() {
  const { containers } = useContext(ContainersContext);

  return (
    <div className="container">
      <PageTitle title="All Containers " />
      <ContainerList data={containers} />
    </div>
  );
}
