import { useEffect, useState } from "react";
import UserForm from "./components/UserForm";
import Header from "./components/Header";
import PatientList from "./components/PatientList";

function App() {
  const [patients, setPatients] = useState(
    JSON.parse(localStorage.getItem("patients")) ?? []
  );
  const [patient, setPatient] = useState({});

  /* useEffect(() => {
    const getLS = () => {
      const patientsLS = JSON.parse(localStorage.getItem("patients")) ?? [];
      setPatients(patientsLS);
    };
    getLS();
  }, []); */

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const deletePatient = (id) => {
    setPatients(patients.filter((patient) => patient.id !== id));
  };

  return (
    <div className="container mx-auto mt-20 pb-1">
      <Header />
      <div className="mt-12 md:flex">
        <UserForm
          patients={patients}
          setPatients={setPatients}
          patient={patient}
        />
        <PatientList
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  );
}

export default App;
