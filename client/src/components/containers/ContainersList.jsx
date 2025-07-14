import { ContainerCard } from "./ContainersCard";

export function ContainerList({ data }) {
  if (!Array.isArray(data)) {
    return <div>Loading containers...</div>;
  }

  return (
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
      {data.map((item) => (
        <ContainerCard key={item.id} data={item} />
      ))}
    </div>
  );
}
