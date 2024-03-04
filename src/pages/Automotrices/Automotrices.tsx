import BtnsPage from "../../components/BtnsPage";

const Automotrices: React.FC = () => {
  //Declaro cada formulario que tendra la sección de Automotrices
  //Por ende es necesario pasar la ruta de la pagina sin "/" y un nombre para el formulario
  const sections = [
    { route: "direccion", name: "Direction" },
    { route: "suspension", name: "Suspension" },
    { route: "chassis", name: "Chassis" },
    { route: "frenos", name: "Frenos" },
    { route: "trasmision", name: "Trasmision" },
  ];
  return (
    //Este componente creara botones para poder ingresar a los diferentes formulario usando el objeto sections entonce
    //unicamente mandamos el arreglo sections y como sectionTitle sera el titulo de la sección
    <BtnsPage items={sections} sectionTitle="Sistemas Automotrices" />
  );
};

export default Automotrices;
