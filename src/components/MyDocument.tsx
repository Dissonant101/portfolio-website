import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
  PDFViewer,
} from '@react-pdf/renderer';
import { useEffect } from 'react';
import { FormData } from './Resume';
import EmailIcon from '../resources/email-icon.png';
import PhoneIcon from '../resources/phone-icon.png';

const styles = StyleSheet.create({
  viewer: {
    width: '100%',
    height: '100%',
  },
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
  },
  titleSection: {
    color: 'white',
    backgroundColor: 'orange',
    width: '100%',
    height: '20%',
    padding: 20,
  },
  bodySection: {
    color: 'black',
    width: '100%',
    margin: 10,
    padding: 50,
    flexGrow: 1,
    flexWrap: 'wrap',
  },
  icon: {
    width: 20,
    height: 20,
    margin: 5,
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
          <View style={styles.titleSection}>
            <Text style={{ fontSize: 30, paddingBottom: 5 }}>
              {firstName} {lastName}
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <Image style={styles.icon} src={EmailIcon} />
              <Text>{email}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Image style={styles.icon} src={PhoneIcon} />
              <Text>{phoneNumber}</Text>
            </View>
          </View>
          <View style={styles.bodySection}>
            <View
              style={{ fontSize: 24, textAlign: 'center', borderBottom: 1 }}
            >
              <Text>Experience</Text>
            </View>
            <Text>{experience}</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default MyDocument;
