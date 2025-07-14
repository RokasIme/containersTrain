import { BoxCard } from "./BoxCard";

export function BoxesList({ data }) {
  return (
    <div className="container">
      <div id="box" className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {data.map((box) => (
          <BoxCard key={box.id} data={box} />
        ))}
      </div>
    </div>
  );
}
