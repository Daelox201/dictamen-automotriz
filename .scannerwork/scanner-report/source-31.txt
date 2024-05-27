import BtnsPage from "../../components/BtnsPage";

const Carroceria: React.FC = () => {
  //Declaro cada formulario que tendra la sección de Automotrices
  //Por ende es necesario pasar la ruta de la pagina sin "/" y un nombre para el formulario
  const sections = [
    { route: "pintura", name: "Pintura" },
    { route: "lienzosPartesColision", name: "Lienzos y Partes de Colision" },
    { route: "cristalesVentanas", name: "Cristales y Ventanas" },
    { route: "cerrajeriasEnclaves", name: "Cerrajerias y Enclaves" },
    { route: "ruedas", name: "Ruedas" },
    { route: "accesorios", name: "Accesorios" },
    { route: "molduras", name: "Molduras" },
    { route: "luces", name: "Luces" },
  ];

  return (
    //Este componente creara botones para poder ingresar a los diferentes formulario usando el objeto sections
    <BtnsPage items={sections} sectionTitle="Carrocería" />
  );
};

export default Carroceria;
