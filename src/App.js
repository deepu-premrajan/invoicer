import Footer from "./components/Footer";
import Notes from "./components/Notes";
import Table from "./components/Table";
import Header from "./components/Header";
import PersonalInformation from "./components/PersonalInformation";
import ClientInformation from "./components/ClientInformation";
import InvoiceInformation from "./components/InvoiceInformation";

function App() {
  const handlePrint = () => {
    window.print();
  };
  return (
    <>
      <main className="m-5 p-5 bg-white rounded shadow">
        <div>
          <Header handlePrint={handlePrint} />
          <PersonalInformation />
          <ClientInformation />
          <InvoiceInformation />
          <Table />
          <Notes />
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
