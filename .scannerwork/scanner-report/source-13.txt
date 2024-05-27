import { Text, View } from "@react-pdf/renderer";
import React from "react";
import { styles } from "../../pages/Preliminar/PreliminarPDFStyles";

interface Props {
  title: String;
  maximo: string;
  original: string;
  funcional: string;
}

export const Row: React.FC<Props> = ({
  title,
  maximo,
  original,
  funcional,
}) => {
  return (
    <View style={styles.tableRowBorder}>
      <Text style={[styles.tableCellHeaderValue, styles.tableRowRight]}>
        {title}
      </Text>
      <Text style={[styles.tableCellData, styles.tableRowRight]}>{maximo}</Text>
      <Text style={[styles.tableCellData, styles.tableRowRight]}>
        {original}
      </Text>
      <Text style={styles.tableCellData}>{funcional}</Text>
    </View>
  );
};
