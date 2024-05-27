import { Redirect, Route, Switch } from "react-router-dom";
import { IonApp, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import Datos from "./pages/Datos/Datos";
import DatosVehiculo from "./pages/Datos/DatosVehiculo";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { Suspense, lazy } from "react";

const DatosTramiteDictamen = lazy(
  () => import("./pages/Datos/DatosTramiteDictamen")
);
const DatosPropietario = lazy(() => import("./pages/Datos/DatosPropietario"));
const DatosSedeOficinaHidalgoPago = lazy(
  () => import("./pages/Datos/DatosSedeOficinaHidalgoPago")
);
const SistemasMotor = lazy(() => import("./pages/SistemasMotor/SistemasMotor"));
const SistemaCargaArranque = lazy(
  () => import("./pages/SistemasMotor/SistemaCargaArranque")
);
const SistemaAdmisionAire = lazy(
  () => import("./pages/SistemasMotor/SistemaAdmisionAire")
);
const SistemaEmisionGases = lazy(
  () => import("./pages/SistemasMotor/SistemaEmisionGases")
);
const SistemaEnfriamento = lazy(
  () => import("./pages/SistemasMotor/SistemaEnfriamento")
);
const SistemaEncendidoIgnicion = lazy(
  () => import("./pages/SistemasMotor/SistemaEncendidoIgnicion")
);
const SistemaInyeccionCombustible = lazy(
  () => import("./pages/SistemasMotor/SistemaInyeccionCombustible")
);
const SistemaEvaporativo = lazy(
  () => import("./pages/SistemasMotor/SistemaEvaporativo")
);
const Juntas = lazy(() => import("./pages/GeneralesMotor/Juntas"));
const GeneralesMotor = lazy(
  () => import("./pages/GeneralesMotor/GeneralesMotor")
);
const Tapones = lazy(() => import("./pages/GeneralesMotor/Tapones"));
const Filtros = lazy(() => import("./pages/GeneralesMotor/Filtros"));
const TapasDepositos = lazy(
  () => import("./pages/GeneralesMotor/TapasDepositos")
);
const Sujeciones = lazy(() => import("./pages/GeneralesMotor/Sujeciones"));
const Automotrices = lazy(() => import("./pages/Automotrices/Automotrices"));
const Direccion = lazy(() => import("./pages/Automotrices/Direccion"));
const Suspencion = lazy(() => import("./pages/Automotrices/Suspencion"));
const Frenos = lazy(() => import("./pages/Automotrices/Frenos"));
const Trasmision = lazy(() => import("./pages/Automotrices/Trasmision"));
const Chassis = lazy(() => import("./pages/Automotrices/Chassis"));
const Carroceria = lazy(() => import("./pages/Carroceria/Carroceria"));
const Pintura = lazy(() => import("./pages/Carroceria/Pintura"));
const LienzosPartesColision = lazy(
  () => import("./pages/Carroceria/LienzosPartesColision")
);
const CristalesVentanas = lazy(
  () => import("./pages/Carroceria/CristalesVentanas")
);
const CerrajeriasEnclaves = lazy(
  () => import("./pages/Carroceria/CerrajeriasEnclaves")
);
const Ruedas = lazy(() => import("./pages/Carroceria/Ruedas"));
const Accesorios = lazy(() => import("./pages/Carroceria/Accesorios"));
const Molduras = lazy(() => import("./pages/Carroceria/Molduras"));
const Luces = lazy(() => import("./pages/Carroceria/Luces"));
const Interiores = lazy(() => import("./pages/Interiores/Interiores"));
const Asientos = lazy(() => import("./pages/Interiores/Asientos"));
const Tablero = lazy(() => import("./pages/Interiores/Tablero"));
const PuertasLienzosFijos = lazy(
  () => import("./pages/Interiores/PuertasLienzosFijos")
);
const DomoTraseroCajuela = lazy(
  () => import("./pages/Interiores/DomoTraseroCajuela")
);
const LucesInteriores = lazy(
  () => import("./pages/Interiores/LucesInteriores")
);
const TapiceriasAlfombrados = lazy(
  () => import("./pages/Interiores/TapiceriasAlfombrados")
);
const Evaluciones = lazy(() => import("./pages/Evaluaciones/Evaluaciones"));

const Preliminar = lazy(() => import("./pages/Preliminar/Preliminar"));

import Loading from "./components/Loading";
import { MyProvider } from "./context/DictamenContext";
import Forms from "./pages/Forms";

setupIonicReact();

const App: React.FC = () => (
  <MyProvider>
    <IonApp>
      <Suspense fallback={<Loading />}>
        <IonReactRouter>
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>

            <Route exact path="/">
              <Redirect to="/home" />
            </Route>

            <Route path="/forms/:id">
              <Forms />
            </Route>

            <Route path="/forms">
              <Forms />
            </Route>

            <Route path="/datos" component={Datos} />

            <Route path="/datosVehiculo">
              <DatosVehiculo />
            </Route>

            <Route path="/datosTramiteDictamen">
              <DatosTramiteDictamen />
            </Route>

            <Route path="/datosPropietario">
              <DatosPropietario />
            </Route>

            <Route path="/datosSedeOficialHidalgo">
              <DatosSedeOficinaHidalgoPago />
            </Route>

            <Route path="/sistemasMotor">
              <SistemasMotor />
            </Route>

            <Route path="/sistemaCargaArranque">
              <SistemaCargaArranque />
            </Route>

            <Route path="/sistemaAdmisionAire">
              <SistemaAdmisionAire />
            </Route>

            <Route path="/sistemaEmisionGases">
              <SistemaEmisionGases />
            </Route>

            <Route path="/sistemaEnfriamento">
              <SistemaEnfriamento />
            </Route>

            <Route path="/sistemaEncendidoIgnicion">
              <SistemaEncendidoIgnicion />
            </Route>

            <Route path="/sistemaInyeccionCombustible">
              <SistemaInyeccionCombustible />
            </Route>

            <Route path="/sistemaEvaporativo">
              <SistemaEvaporativo />
            </Route>

            <Route path="/generalesMotor">
              <GeneralesMotor />
            </Route>

            <Route path="/juntas">
              <Juntas />
            </Route>

            <Route path="/tapones">
              <Tapones />
            </Route>

            <Route path="/filtros">
              <Filtros />
            </Route>

            <Route path="/tapasDepositos">
              <TapasDepositos />
            </Route>

            <Route path="/sujeciones">
              <Sujeciones />
            </Route>

            <Route path="/automotrices">
              <Automotrices />
            </Route>

            <Route path="/direccion">
              <Direccion />
            </Route>

            <Route path="/suspension">
              <Suspencion />
            </Route>

            <Route path="/chassis">
              <Chassis />
            </Route>

            <Route path="/chassis">
              <Chassis />
            </Route>

            <Route path="/frenos">
              <Frenos />
            </Route>

            <Route path="/trasmision">
              <Trasmision />
            </Route>

            {/* ===== C a r r o c e r i a ===== */}
            <Route path="/carroceria">
              <Carroceria />
            </Route>

            <Route path="/pintura">
              <Pintura />
            </Route>

            <Route path="/lienzosPartesColision">
              <LienzosPartesColision />
            </Route>

            <Route path="/cristalesVentanas">
              <CristalesVentanas />
            </Route>

            <Route path="/cerrajeriasEnclaves">
              <CerrajeriasEnclaves />
            </Route>

            <Route path="/ruedas">
              <Ruedas />
            </Route>

            <Route path="/accesorios">
              <Accesorios />
            </Route>

            <Route path="/molduras">
              <Molduras />
            </Route>

            <Route path="/luces">
              <Luces />
            </Route>

            {/* ===== I n t e r i o r e s ===== */}
            <Route path="/interiores">
              <Interiores />
            </Route>

            <Route path="/asientos">
              <Asientos />
            </Route>

            <Route path="/tablero">
              <Tablero />
            </Route>

            <Route path="/puertasLienzosFijos">
              <PuertasLienzosFijos />
            </Route>

            <Route path="/domoTraseroCajuela">
              <DomoTraseroCajuela />
            </Route>

            <Route path="/lucesInteriores">
              <LucesInteriores />
            </Route>

            <Route path="/tapiceriasAlfombrados">
              <TapiceriasAlfombrados />
            </Route>

            {/*======== Evaluaciones ========*/}
            <Route path="/evaluaciones">
              <Evaluciones />
            </Route>

            <Route path="/preliminar">
              <Preliminar />
            </Route>
          </Switch>
        </IonReactRouter>
      </Suspense>
    </IonApp>
  </MyProvider>
);

export default App;

/*
const DatosTramiteDictamen = lazy(() => import("./pages/Datos/DatosTramiteDictamen"));
const DatosPropietario = lazy(() => import("./pages/Datos/DatosPropietario"));
const DatosSedeOficinaHidalgoPago = lazy(() => import("./pages/Datos/DatosSedeOficinaHidalgoPago"));
const SistemasMotor = lazy(() => import("./pages/SistemasMotor/SistemasMotor"));
const SistemaCargaArranque = lazy(() => import("./pages/SistemasMotor/SistemaCargaArranque"));
const SistemaAdmisionAire = lazy(() => import("./pages/SistemasMotor/SistemaAdmisionAire"));
const SistemaEmisionGases = lazy(() => import("./pages/SistemasMotor/SistemaEmisionGases"));
const SistemaEnfriamento = lazy(() => import("./pages/SistemasMotor/SistemaEnfriamento"));
const SistemaEncendidoIgnicion = lazy(() => import("./pages/SistemasMotor/SistemaEncendidoIgnicion"));
const SistemaInyeccionCombustible = lazy(() => import("./pages/SistemasMotor/SistemaInyeccionCombustible"));
const SistemaEvaporativo = lazy(() => import("./pages/SistemasMotor/SistemaEvaporativo"));
const Juntas = lazy(() => import("./pages/GeneralesMotor/Juntas"));
const GeneralesMotor = lazy(() => import("./pages/GeneralesMotor/GeneralesMotor"));
const Tapones = lazy(() => import("./pages/GeneralesMotor/Tapones"));
const Filtros = lazy(() => import("./pages/GeneralesMotor/Filtros"));
const TapasDepositos = lazy(() => import("./pages/GeneralesMotor/TapasDepositos"));
const Sujeciones = lazy(() => import("./pages/GeneralesMotor/Sujeciones"));
const Automotrices = lazy(() => import("./pages/Automotrices/Automotrices"));
const Direccion = lazy(() => import("./pages/Automotrices/Direccion"));
const Suspencion = lazy(() => import("./pages/Automotrices/Suspencion"));
const Frenos = lazy(() => import("./pages/Automotrices/Frenos"));
const Trasmision = lazy(() => import("./pages/Automotrices/Trasmision"));
const Chassis = lazy(() => import("./pages/Automotrices/Chassis"));
const Carroceria = lazy(() => import("./pages/Carroceria/Carroceria"));
const Pintura = lazy(() => import("./pages/Carroceria/Pintura"));
const LienzosPartesColision = lazy(() => import("./pages/Carroceria/LienzosPartesColision"));
const CristalesVentanas = lazy(() => import("./pages/Carroceria/CristalesVentanas"));
const CerrajeriasEnclaves = lazy(() => import("./pages/Carroceria/CerrajeriasEnclaves"));
const Ruedas = lazy(() => import("./pages/Carroceria/Ruedas"));
const Accesorios = lazy(() => import("./pages/Carroceria/Accesorios"));
const Molduras = lazy(() => import("./pages/Carroceria/Molduras"));
const Luces = lazy(() => import("./pages/Carroceria/Luces"));
const Interiores = lazy(() => import("./pages/Interiores/Interiores"));
const Asientos = lazy(() => import("./pages/Interiores/Asientos"));
const Tablero = lazy(() => import("./pages/Interiores/Tablero"));
const PuertasLienzosFijos = lazy(() => import("./pages/Interiores/PuertasLienzosFijos"));
const DomoTraseroCajuela = lazy(() => import("./pages/Interiores/DomoTraseroCajuela"));
const LucesInteriores = lazy(() => import("./pages/Interiores/LucesInteriores"));
const TapiceriasAlfombrados = lazy(() => import("./pages/Interiores/TapiceriasAlfombrados"));
*/
