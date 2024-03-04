import React, { useEffect, useState } from "react";
import { Document, Page, Text, View, Image } from "@react-pdf/renderer";
import { useLocalStorage } from "../../hooks/useLocalStorage";

import { styles } from "./PreliminarPDFStyles";
import { Row } from "../../components/pdfTablaASCE/Row";


let totales = {};

const PreliminarPDF: React.FC = () => {
  const [totalesState, setTotalesState] = useState(null);
  const [dataDictamenLocal, setDataDictamenLocal] = useLocalStorage(
    "dataDictamenLocal",
    null
  );
  const [totalesLocal, setTotalesLocal] = useLocalStorage(`Totales_Local`, null);

  
  // Obtener las fotos capturadas
  const getCapturedPhotos = () => {
    const capturedPhotos = JSON.parse(localStorage.getItem('capturedPhotos')) || [];
    return capturedPhotos;
  };

  // Renderizar las fotos capturadas en el PDF
  const renderCapturedPhotos = () => {
    const capturedPhotos = getCapturedPhotos();
    return capturedPhotos.map((photo, index) => (
      <Image key={index} src={photo} style={styles.capturedPhoto} />
    ));
  };

  const getOriginalFuncionalBySection = (section: string) => {
    const _original = (
      (totalesLocal[section].maximo *
        totalesLocal[section].originalidad_sin_control_electronico) /
      totalesLocal[section].divisores[0]
    ).toFixed(1);

    const _funcional = (
      (totalesLocal[section].maximo *
        totalesLocal[section].funcionalidad_sin_control_electronico) /
      totalesLocal[section].divisores[0]
    ).toFixed(1);

    totales = {
      ...totales,
      [`${section}`]: {
        maximo: totalesLocal[section].maximo,
        original: _original,
        funcional: _funcional,
      },
    };
  };

  const getTotales = () => {
    let TotalMaximo = 0,
      TotalOriginal = 0,
      TotalFuncional = 0;

    Object.keys(totales).map((section) => {
      TotalMaximo += totales[section].maximo;
      TotalOriginal += parseFloat(totales[section].original);
      TotalFuncional += parseFloat(totales[section].funcional);
    });

    totales = {
      ...totales,
      [`Totales`]: {
        maximo: TotalMaximo,
        original: TotalOriginal,
        funcional: TotalFuncional,
      },
    };
  };

  useEffect(() => {
    totales = {};
    console.log(totalesLocal);
    getOriginalFuncionalBySection(
      "Sistemas Alternos de Motor y Generales Motor"
    );
    getOriginalFuncionalBySection("Generales Motor");
    getOriginalFuncionalBySection("Sistemas Automotrices");
    getOriginalFuncionalBySection("Carroceria");
    getOriginalFuncionalBySection("Interiores");

    getTotales();
    setTotalesState(totales);
    console.log(totales);
  }, []);

  const obtenerFechaFormateada = (): string => {
    const opcionesFecha = { year: "numeric", month: "long", day: "numeric" };
    const fecha = new Date().toLocaleDateString("es-MX", opcionesFecha);
    return fecha;
  };

  return (
    //Componente principal de react-pdf
    <Document>
      {/* Todo documento PDF debe tener al menos una página.
      Se pueden agregar mas paginas usando este coponente 'Page'.
      El atributo size es para definir el tamaño de la hoja.
       */}
      <Page size="A4" style={styles.page}>
        {/* Fecha del dicatamen, (Toma la fecha actual) */}
        <View>
          <Text style={styles.date}>
            {/* Obtiene el nombre del lugar donde se hizo el dictamen */}
            {/* Obtiene la fecha actual con obtenerFechaFormateada()*/}
            {dataDictamenLocal.datos_tramite_dictamen.Cita_Dictamen}, Hgo. a{" "}
            {obtenerFechaFormateada()}
          </Text>
        </View>

        {/* Titulo y Subtitulo del Reporte PDF*/}
        <View>
          <Text style={styles.title}>Preliminar Dictamen Auto Antiguo</Text>
          <Text style={styles.subtitle}>(Autorización para emplacamiento)</Text>
        </View>

        {/* Seccion datos principales*/}
        <View style={styles.section}>
          <Text style={styles.section_title}>
            En base a la revisión llevada a cabo a la unidad de Auto Antiguo
            descrita acontinuacion:
          </Text>

          {/* Tabla con los datos principales del vehiculo*/}
          <View style={styles.tableMainData}>
            {/* Marca y Submarca del vehiculo*/}
            <View style={styles.tableRow}>
              <TableCellMainData
                title="Marca:"
                data={` ${dataDictamenLocal.data_vehiculo.marca}`}
              />
              <TableCellMainData
                title="Submarca:"
                data={` ${dataDictamenLocal.data_vehiculo.submarca}`}
              />
            </View>

            {/* Modelo y Segemento del vehiculo*/}
            <View style={styles.tableRow}>
              <TableCellMainData
                title="Modelo:"
                data={` ${dataDictamenLocal.data_vehiculo.modelo}`}
              />
              <TableCellMainData
                title="Segmento:"
                data={` ${dataDictamenLocal.data_vehiculo.segmento}`}
              />
            </View>

            {/* NIV y tipo de vehiculo*/}
            <View style={styles.tableRow}>
              <TableCellMainData
                title="NIV:"
                data={` ${dataDictamenLocal.data_vehiculo.noSerie}`}
              />
              <TableCellMainData
                title="Vehiculo:"
                data={` ${dataDictamenLocal.data_vehiculo.vehiculo}`}
              />
            </View>

            {/* Clasificacion AA del vehiculo*/}
            <View style={styles.tableRow}>
              <TableCellMainData
                title="Clasificacion AA:"
                data={` ${dataDictamenLocal.data_vehiculo.vehiculo}`}
              />
            </View>
          </View>
        </View>

        {/* Seccion nombre del propietario*/}
        <View style={styles.section}>
          <Text
            style={styles.section_title}
          >{`Cuyo propietarios es: ${dataDictamenLocal.datos_propietario.propietario}`}</Text>
        </View>

        {/* Seccion valroes*/}
        <View style={styles.section}>
          <Text style={styles.section_title}>
            Y, tomado en cuenta el analisis de los datos obtenidos, se pudieron
            observar los siguientes valores:
          </Text>
          <View style={styles.tableValuations}>
            {/* Encabezados de la tabla de valoraciones */}
            <View style={styles.tableRowBorder}>
              <Text
                style={[
                  styles.tableCellHeaderBlue,
                  styles.tableRowRight,
                  { textAlign: "right", width: "40%" },
                ]}
              >
                Áreas Constructivas
              </Text>
              <Text style={[styles.tableCellHeaderBlue, styles.tableRowRight]}>
                Máximo
              </Text>
              <Text style={[styles.tableCellHeaderBlue, styles.tableRowRight]}>
                Original
              </Text>
              <Text style={styles.tableCellHeaderBlue}>Funcional</Text>
            </View>

            {/* Filas de la tabla de valoraciones */}
            <Row
              title="Sistemas de Motor:"
              maximo={
                totalesState &&
                totalesState["Sistemas Alternos de Motor y Generales Motor"]
                  .maximo
              }
              original={
                totalesState &&
                totalesState["Sistemas Alternos de Motor y Generales Motor"]
                  .original
              }
              funcional={
                totalesState &&
                totalesState["Sistemas Alternos de Motor y Generales Motor"]
                  .funcional
              }
            />

            <Row
              title="Generales de Motor:"
              maximo={totalesState && totalesState["Generales Motor"].maximo}
              original={
                totalesState && totalesState["Generales Motor"].original
              }
              funcional={
                totalesState && totalesState["Generales Motor"].funcional
              }
            />

            <Row
              title="Sistemas Automotrices:"
              maximo={
                totalesState && totalesState["Sistemas Automotrices"].maximo
              }
              original={
                totalesState && totalesState["Sistemas Automotrices"].original
              }
              funcional={
                totalesState && totalesState["Sistemas Automotrices"].funcional
              }
            />

            <Row
              title="Carrocería:"
              maximo={totalesState && totalesState["Carroceria"].maximo}
              original={totalesState && totalesState["Carroceria"].original}
              funcional={totalesState && totalesState["Carroceria"].funcional}
            />

            <Row
              title="Interiores:"
              maximo={totalesState && totalesState["Interiores"].maximo}
              original={totalesState && totalesState["Interiores"].original}
              funcional={totalesState && totalesState["Interiores"].funcional}
            />

            <Row
              title="Total:"
              maximo={totalesState && totalesState["Totales"].maximo}
              original={
                totalesState && totalesState["Totales"].original.toFixed(1)
              }
              funcional={
                totalesState && totalesState["Totales"].funcional.toFixed(1)
              }
            />
          </View>
        </View>

        {/* Seccion valroes*/}
        <View style={styles.section}>
          <Text style={styles.section_title}>
            Por lo anterior, se dictamina que el Vehiculo arriba descrito reúne
            las características de Auto Antiguo, enmarcadas en los lineamientos
            a la ley de Control Vehicular del Estado de Hidalgo y en los
            requerimientos establecidos por la Secretaria de Movilidad del
            Gobierno del Estado de Hidalgo. Por lo tanto, se autoriza la
            colocacion del holograma de identificación de Auto Antiguo, que
            obedece al proceso de Diactamen:
          </Text>
        </View>

        {/* Seccion holograma*/}
        <View style={styles.section}>
          <Text style={styles.hologram}>AA-001-2022</Text>
        </View>

        {/* Seccion sede*/}
        <View style={styles.section}>
          <Text style={styles.section_title}>
            {`Con este documento y la obtención del respectivo holograma, puede efectuar su trámite de placas de Auto Antiguo, en la sede ${dataDictamenLocal.datos_sede_oficial_hidalgo_pago.sede}  de la Oficina Hidalgo Pago.`}
          </Text>
        </View>

        {/* Seccion atentamente*/}
        <View style={styles.footer}>
          <Text style={styles.footer_textBold}>ATENTAMENTE</Text>
          <Text style={styles.footer_textBold}>
            "UNA UNIVERSIDAD PARA LA INVESTIGACIÓN"
          </Text>
        </View>

        {/* Seccion firma*/}
        <View style={styles.footer}>
          <View style={styles.firm}></View>
          <Text style={styles.footer_textNormal}>
            I. ALBERTO HERNÁNDEZ MORALES
          </Text>
          <Text style={styles.footer_textNormal}>TÉCNICO RESPONSABLE</Text>
        </View>
      </Page>
      

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.section_title}>Fotos Capturadas:</Text>
          <View style={styles.capturedPhotosContainer}>
            {renderCapturedPhotos()}
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PreliminarPDF;

// Componente para crear las celdas de la tabla de datos principales
// Recibe un titulo y un dato
// Se morstrara algo como esto:
// Marca: Chevrolet
// Titulo: Dato
const TableCellMainData: React.FC<{ title: string; data: string }> = ({
  title,
  data,
}) => {
  return (
    <>
      <Text style={styles.tableCellHeader}>{title}</Text>
      <Text style={styles.tableCell}>{data}</Text>
    </>
  );
};
