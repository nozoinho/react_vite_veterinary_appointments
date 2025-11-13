import { useState, useEffect } from "react";
import Error from "./Error";

const UserForm = ({ patients, setPatients, patient }) => {
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [email, setEmail] = useState("");
  const [dischargeDate, setDischargeDate] = useState("");
  const [symptoms, setSymptoms] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      // check if the object contains information
      setName(patient.name);
      setOwner(patient.owner);
      setEmail(patient.email);
      setDischargeDate(patient.dischargeDate);
      setSymptoms(patient.symptoms);
    }
  }, [patient]);

  const generateId = () => {
    const random = Math.random().toString(36).substring(2);
    const dateTime = Date.now().toString(36);

    return random + dateTime;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validating form fields
    if ([name, owner, email, dischargeDate, symptoms].includes("")) {
      //console.log("Blank fields");
      setError(true);
      return;
    }

    //console.log("Filled out fields");
    setError(false);

    const objectPatient = {
      name,
      owner,
      email,
      dischargeDate,
      symptoms,
    };

    if (patient.id) {
      // Registered patient
      objectPatient.id = patient.id;
      const UpdatedPatients = patients.map((patientState) =>
        patientState.id === patient.id ? objectPatient : patientState
      );
      setPatients(UpdatedPatients);
    } else {
      // new patient
      objectPatient.id = generateId();
      setPatients([...patients, objectPatient]);
    }

    // Reset form fields
    patient.id = null;
    setName("");
    setOwner("");
    setEmail("");
    setDischargeDate("");
    setSymptoms("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">
        Patient Tracking
      </h2>
      <p className="text-lg mt-5 text-center mb-10">
        Add patients and {""}
        <span className="text-indigo-600 font-bold">Manage them</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && (
          <Error>
            <p>All fields are required</p>
          </Error>
        )}
        <div className="mb-5">
          <label
            htmlFor="pet"
            className="block text-gray-700 uppercase font-bold"
          >
            Pet Name
          </label>
          {/* A block element takes up the full available horizontal space */}
          <input
            id="pet"
            type="text"
            placeholder="Pet Name"
            className="border-2 w-full p-3 mt-2 placeholder-gray-400 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="owner"
            className="block text-gray-700 uppercase font-bold"
          >
            Owner Name
          </label>
          <input
            id="owner"
            type="text"
            placeholder="Owner Name"
            className="border-2 w-full p-3 mt-2 placeholder-gray-400 rounded-md"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Owner Email"
            className="border-2 w-full p-3 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="discharge"
            className="block text-gray-700 uppercase font-bold"
          >
            Discharge Date
          </label>
          <input
            id="discharge"
            type="date"
            //placeholder="Discharge Date"
            className="border-2 w-full p-3 mt-2 placeholder-gray-400 rounded-md"
            value={dischargeDate}
            onChange={(e) => setDischargeDate(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="symptoms"
            className="block text-gray-700 uppercase font-bold"
          >
            Symptoms
          </label>
          <textarea
            id="symptoms"
            placeholder="Describe the Symptoms"
            className="border-2 w-full p-3 mt-2 placeholder-gray-400 rounded-md"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer"
          value={patient.id ? "Edit Patient" : "Add Patient"}
        />
      </form>
    </div>
  );
};
export default UserForm;
