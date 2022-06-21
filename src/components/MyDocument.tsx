import { useEffect, useState } from 'react';
import {
  Document,
  Page,
  Text,
  View,
  Image,
  PDFViewer,
} from '@react-pdf/renderer';
import { FormData } from './Resume';
import EmailIcon from '../resources/email-icon.png';
import PhoneIcon from '../resources/phone-icon.png';
import axios from 'axios';

const MyDocument = ({
  style,
  firstName,
  lastName,
  email,
  phoneNumber,
  summary,
  experience,
  reference,
}: FormData) => {
  const [styles, setStyles] = useState({
    viewer: {},
    page: {},
    titleSection: {},
    name: {},
    info: {},
    body: {},
    bodyTitle: {},
    bodySection: {},
    icon: {},
  });

  const getStyles = async (name: string) => {
    const response = await axios.get(
      'http://ec2-3-17-146-230.us-east-2.compute.amazonaws.com/api/stylesheet/' +
        name +
        '.json'
    );
    setStyles(response.data);
  };

  useEffect(() => {
    // getStyles(style);
    setStyles({
      viewer: {
        width: '100%',
        height: '100%',
      },
      page: {
        backgroundColor: '#FFFFFF',
      },
      titleSection: {
        color: 'white',
        backgroundColor: 'orange',
        width: '100%',
        height: '20%',
        padding: 20,
      },
      name: {
        fontSize: 30,
        paddingBottom: 5,
      },
      info: {
        fontSize: 16,
      },
      body: {
        margin: 10,
        borderBottom: 2,
        borderBottomColor: 'orange',
        flexDirection: 'col',
        flexGrow: 1,
      },
      bodyTitle: {},
      bodySection: {
        color: 'black',
        width: '100%',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 20,
        paddingRight: 20,
      },
      icon: {
        width: 20,
        height: 20,
        margin: 5,
      },
    });
  }, []);

  const experiences = experience.map((a, index) => {
    return (
      <Text key={index} style={{ padding: 6 }}>
        {experience[index].experience}
      </Text>
    );
  });

  const references = reference.map((a, index) => {
    return (
      <Text key={index} style={{ padding: 6 }}>
        {reference[index].reference}
      </Text>
    );
  });

  return (
    <PDFViewer style={styles.viewer}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.titleSection}>
            <Text style={styles.name}>
              {firstName} {lastName}
            </Text>
            <View style={styles.info}>
              <Image style={styles.icon} src={EmailIcon} />
              <Text>{email}</Text>
            </View>
            <View style={styles.info}>
              <Image style={styles.icon} src={PhoneIcon} />
              <Text>{phoneNumber}</Text>
            </View>
          </View>
          <View style={styles.body}>
            <View style={styles.bodyTitle}>
              <Text>Professional Summary</Text>
            </View>
            <View style={styles.bodySection}>
              <Text>{summary}</Text>
            </View>
          </View>
          <View style={styles.body}>
            <View style={styles.bodyTitle}>
              <Text>Past Experience</Text>
            </View>
            <View style={styles.bodySection}>{experiences}</View>
          </View>
          <View style={styles.body}>
            <View style={styles.bodyTitle}>
              <Text>References</Text>
            </View>
            <View style={styles.bodySection}>{references}</View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default MyDocument;
