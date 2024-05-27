import React, { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface Dictamen {
  [key: string]: any;
}

interface Data {
  [key: string]: any;
}

interface DictamenContextData {
  dataDictamen: Dictamen | null;
  setDataDictamen: (dictamen: Dictamen) => void;
  totalesEvaluacion: Data | null;
  setTotalesEvaluacion: (data: Data) => void;
  totalesLocal: Data | null;
  setTotalesLocal: (data: Data) => void;
}

export const MyContext = createContext<DictamenContextData>({
  dataDictamen: null,
  setDataDictamen: () => {},
  totalesEvaluacion: null,
  setTotalesEvaluacion: () => {},
  totalesLocal: null,
  setTotalesLocal: () => {},
});

export const MyProvider = ({ children }) => {
  // const [dataDictamen, setDataDictamen] = useState({});
  const [totalesEvaluacion, setTotalesEvaluacion] = useState({});
  const [dataDictamen, setDataDictamen] = useLocalStorage(
    "dataDictamenLocal",
    null
  );
  const [totalesLocal, setTotalesLocal] = useLocalStorage(
    `Totales_Local`,
    null
  );
  // console.log(dataDictamen);

  return (
    <MyContext.Provider
      value={{
        dataDictamen,
        setDataDictamen,
        totalesEvaluacion,
        setTotalesEvaluacion,
        totalesLocal,
        setTotalesLocal,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
