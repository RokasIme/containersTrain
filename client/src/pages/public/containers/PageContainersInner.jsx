import { useParams } from "react-router";
import { PageTitle } from "../../../components/page-title/PageTitle";

import { useContext } from "react";
import { BoxesList } from "../../../components/boxes/BoxesList";
import { BoxesContext } from "../../../context/boxes/boxesContext";

export function PageContainersInner() {
  const { boxes } = useContext(BoxesContext);
  const params = useParams();

  const boxesInContainer = boxes.filter((b) => b.container_id === +params.id);

  return (
    <div className="container">
      <PageTitle title={"Container Nr:." + params.id} />
      <BoxesList data={boxesInContainer} />
    </div>
  );
}
