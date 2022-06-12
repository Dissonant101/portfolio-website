import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from '@react-pdf/renderer';
import { useEffect } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { FormData } from './Resume';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
    padding: 50,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    flexWrap: 'wrap',
  },
  viewer: {
    width: '100%',
    height: '100%',
  },
});

const MyDocument = ({
  firstName,
  lastName,
  email,
  phoneNumber,
  experience,
}: FormData) => {
  useEffect(() => {
    console.log(firstName);
  });

  return (
    <PDFViewer style={styles.viewer}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>
              Name: {firstName} {lastName}
            </Text>
            <Text>Email: {email}</Text>
            <Text>Phone Number: {phoneNumber}</Text>
            <Text>Experience:</Text>
            <Text>{experience}</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default MyDocument;
