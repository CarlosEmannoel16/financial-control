import "./index.css";

export const Tag = (params: { label: string; type: "pago" | "vencido" }) => {
  return (
    <>
      {params.type === "pago" ? (
        <span className="badge text-bg-success">{params.label}</span>
      ) : (
        <span className="badge text-bg-danger">Danger</span>
      )}
    </>
  );
};
