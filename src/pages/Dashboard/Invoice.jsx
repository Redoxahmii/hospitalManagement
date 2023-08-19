import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { useEffect, useState } from "react";

// Create styles
const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    padding: 30,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    border: 1,
    borderColor: "#000",
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
    textDecoration: "underline",
  },
  content: {
    fontSize: 12,
    marginBottom: 5,
  },
  footer: {
    marginTop: 30,
    textAlign: "center",
    fontSize: 12,
  },
});

// Create Document Component
const MyDocument = ({ invoiceData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View>
        <Text style={styles.header}>Hospital Invoice</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Patient Information</Text>
        <Text style={styles.content}>
          Patient Name: {`${invoiceData.firstName} ${invoiceData.lastName}`}
        </Text>
        <Text style={styles.content}>Age: {invoiceData.age}</Text>
        <Text style={styles.content}>Gender: {invoiceData.gender}</Text>
        <Text style={styles.content}>Email: {invoiceData.email}</Text>
        <Text style={styles.content}>Phone: {invoiceData.phone}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Billing Details</Text>
        <Text style={styles.content}>Invoice Number: INV-001</Text>
        <Text style={styles.content}>Invoice Date: 2023-08-19</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Treatment Details</Text>
        <Text style={styles.content}>Treatment: Medical Checkup</Text>
        <Text style={styles.content}>Doctor: Dr. Smith</Text>
        <Text style={styles.content}>Date: 2023-08-20</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Charges</Text>
        <Text style={styles.content}>Consultation Fee: $50</Text>
        <Text style={styles.content}>Lab Tests: $100</Text>
        <Text style={styles.content}>Medication: $75</Text>
      </View>
      <View style={styles.footer}>
        <Text>Total Amount: $225</Text>
        <Text>Payment Due Date: 2023-08-30</Text>
        <Text>Accepted Payment Methods: Credit Card, Cash</Text>
      </View>
    </Page>
  </Document>
);
export default function Invoice() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      setUsers(data.users[0]);
    };
    fetchUsers();
  }, []);

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <div>
          <PDFDownloadLink
            document={<MyDocument invoiceData={users} />}
            fileName="movielist.pdf"
            className="btn btn-primary"
          >
            {" "}
            Download Invoice
          </PDFDownloadLink>
        </div>
        <div className="">
          <PDFViewer className="w-[50vw] h-[50vh]">
            <MyDocument invoiceData={users} />
          </PDFViewer>
        </div>
      </div>
    </>
  );
}
