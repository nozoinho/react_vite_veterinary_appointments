import { useEffect } from "react";
import Patient from "./Patient";

const PatientList = ({ patients, setPatient, deletePatient }) => {
  /*   useEffect(() => {
    if (pacientes.length > 0) console.log("new patient");
  }, [patients]); */

  return (
    <>
      {patients && patients.length ? (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">
          <h2 className="font-black text-3xl text-center">Patient List</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Manage your {""}
            <span className="text-indigo-600 font-bold">Patients and Appointments</span>
          </p>
          {patients.map((patient) => (
            <Patient
              key={patient.id}
              patient={patient}
              setPatient={setPatient}
              deletePatient={deletePatient}
            />
          ))}
        </div>
      ) : (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen">
          <h2 className="font-black text-3xl text-center">There are no Patients.</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Start by adding patients {""}
            <span className="text-indigo-600 font-bold">
              and they will appear here
            </span>
          </p>
        </div>
      )}
    </>
  );
};
export default PatientList;
