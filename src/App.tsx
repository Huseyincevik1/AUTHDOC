import  { useState } from "react";
import { useDocumentContract } from "./hooks/useDocumentContract";
import { ethers } from "ethers";
import Navbar from '../src/components/layout/Navbar/Navbar.jsx';
import Header from '../src/components/layout/Header/Header.jsx';
const App = () => {
  const { contract, signer } = useDocumentContract();
  const [studentName, setStudentName] = useState("");
  const [studentAddress, setStudentAddress] = useState("");

  const handleNameChange = (event) => {
    setStudentName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setStudentAddress(event.target.value);
  };

  const addStudent = async () => {
    if (!contract || !signer) {
      console.error("Document contract or signer not available");
      return;
    }

    try {
      // Now ethers should have access to a signer

      // Replace 'addStudent' with the actual function name in your contract
      const tx = await contract.connect(signer).addStudent(
        ethers.utils.formatBytes32String(studentName),
        ethers.utils.getAddress(studentAddress)
      );

      // Wait for the transaction to be mined
      await tx.wait();

      // You can do additional actions after a successful transaction
      console.log("Student added successfully!");
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  return (
    <>
    <div className='App sm:overflow-x-hidden'>
    <Navbar />
    <Header />
     <div>
    <label>Student Name:</label>
        <input type="text" value={studentName} onChange={handleNameChange} />
      </div>
      <div>
        <label>Student Address:</label>
        <input type="text" value={studentAddress} onChange={handleAddressChange} />
      </div>
      <button onClick={addStudent}>Add Student</button>
   </div>
   </>
  );
};

export default App;
