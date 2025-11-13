const Patient = ({ patient, setPatient, deletePatient }) => {
  //console.log(paciente);
  const { name, owner, email, dischargeDate, symptoms, id } = patient;

  const handleDelete = () => {
    if (confirm("Do you wanto to delete this patient?")) {
      deletePatient(id);
    }
  };

  return (
    <>
      <div className="bg-white mx-5 px-5 py-10 rounded-xl shadow-md mb-5">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Name: {""}
          <span className="font-normal normal-case">{name}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Owner: {""}
          <span className="font-normal normal-case">{owner}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Email: {""}
          <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Discharge Date: {""}
          <span className="font-normal normal-case">{dischargeDate}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Symptoms: {""}
          <span className="font-normal normal-case">{symptoms}</span>
        </p>
        <div className="flex justify-between">
          <button
            type="button"
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-400 uppercase font-bold text-center text-white rounded-lg"
            onClick={() => setPatient(patient)}
          >
            Edit
          </button>
          <button
            type="button"
            className="py-2 px-10 bg-red-600 hover:bg-red-400 uppercase font-bold text-center text-white rounded-lg"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};
export default Patient;
