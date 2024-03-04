import BtnsPage from "../../components/BtnsPage";

const Interiores: React.FC = () => {
  const sections = [
    { route: "asientos", name: "Asientos" },
    { route: "tablero", name: "Tablero" },
    { route: "puertasLienzosFijos", name: "Puertas y/o Lienzos Fijos" },
    { route: "domoTraseroCajuela", name: "Domo Trasero y/o Cajuela" },
    { route: "lucesInteriores", name: "Luces Interiores" },
    { route: "tapiceriasAlfombrados", name: "Tapicerias y Alfombrados" },
  ];

  return (
    //Este componente creara botones para poder ingresar a los diferentes formulario usando el objeto sections
    <BtnsPage items={sections} sectionTitle="Interiores" />
  );
};

export default Interiores;
