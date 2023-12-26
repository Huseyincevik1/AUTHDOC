import { useState } from 'react';
import { useDocumentContract } from './hooks/useDocumentContract';
import { ethers } from 'ethers';
import './App.css';
import Navbar from '../src/components/layout/Navbar/Navbar.jsx';
import Header from '../src/components/layout/Header/Header.jsx';
import HowItWorks from '../src/components/layout/HowItWorks/HowItWorks.jsx';
import FAQ from '../src/components/layout/FAQ/FAQ.jsx';
import Student from '../src/pages/Student/Student.jsx';
import School from '../src/pages/School/School.jsx';
import Employer from '../src/pages/Employer/Employer.jsx';

const App = () => {
	const { contract, signer } = useDocumentContract();
	const [studentName, setStudentName] = useState('');
	const [ipfsData, setIpfsData] = useState('');

	const isim = 'Ender';

	const handleNameChange = (event) => {
		setStudentName(event.target.value);
	};

	const handleAddressChange = (event) => {
		setStudentAddress(event.target.value);
	};

	const handleIpfsDataChange = (event) => {
		setIpfsData(event.target.value);
	};

	const handleVerificationCodeChange = (event) => {
		setVerificationCode(event.target.value);
	};

	const addStudent = async () => {
		if (!contract || !signer || !studentAddress) {
			console.error('Document contract, signer, or studentAddress is invalid');
			return;
		}

		try {
			// Check if the connected account (signer) is the owner of the contract
			const connectedAccount = await signer.getAddress();
			const contractOwner = await contract.owner(); // Assuming you have an 'owner' function in your contract
			console.log(connectedAccount);
			console.log(contractOwner);
			if (connectedAccount !== contractOwner) {
				console.error('Connected account is not the owner of the contract');
				return;
			}

			// Trim leading/trailing whitespaces from studentAddress
			const trimmedAddress = studentAddress.trim();

			if (!trimmedAddress) {
				console.error('Student address is empty');
				return;
			}

			// Replace 'addStudent' with the actual function name in your contract
			const tx = await contract
				.connect(signer)
				.addStudent(
					ethers.utils.formatBytes32String(studentName),
					ethers.utils.getAddress(trimmedAddress)
				);

			// Wait for the transaction to be mined
			await tx.wait();

			// You can do additional actions after a successful transaction
			console.log('Student added successfully!');
		} catch (error) {
			console.error('Error adding student:', error);
		}
	};

	const addDocument = async () => {
		try {
			if (!contract || !signer || !studentAddress) {
				console.error(
					'Document contract, signer, or studentAddress is invalid'
				);
				return;
			}
			const connectedAccount = await signer.getAddress();
			const contractOwner = await contract.owner(); // Assuming you have an 'owner' function in your contract
			console.log(connectedAccount);
			console.log(contractOwner);
			if (connectedAccount !== contractOwner) {
				console.error('Connected account is not the owner of the contract');
				return;
			}

			// Replace 'addDocument' with the actual function name in your contract
			const tx = await contract
				.connect(signer)
				.addDocument(
					ethers.utils.getAddress(studentAddress),
					ethers.utils.formatBytes32String(ipfsData),
					ethers.utils.formatBytes32String(verificationCode)
				);

			// Wait for the transaction to be mined
			await tx.wait();

			// You can do additional actions after a successful transaction
			console.log('Document added successfully!');
		} catch (error) {
			console.error('Error adding document:', error);
		}
	};

	const viewDocument = async () => {
		try {
			if (!contract || !signer || !verificationCode) {
				console.error(
					'Document contract, signer, studentAddress, or verificationCode is invalid'
				);
				return;
			}
			const connectedAccount = await signer.getAddress();
			// Replace 'viewDocument' with the actual function name in your contract
			const documentHash = await contract
				.connect(signer)
				.viewDocument(
					ethers.utils.getAddress(connectedAccount),
					ethers.utils.formatBytes32String(verificationCode)
				);

			console.log('Document Hash:', documentHash);
		} catch (error) {
			console.error('Error viewing document:', error);
		}
	};

	const verifyDocument = async () => {
		try {
			if (!contract || !signer || !verificationCode) {
				console.error(
					'Document contract, signer, or verificationCode is invalid'
				);
				return;
			}

			//const connectedAccount = await signer.getAddress();

			// Replace 'verifyDocument' with the actual function name in your contract
			await contract
				.connect(signer)
				.verifyDocument(
					ethers.utils.getAddress(studentAddress),
					ethers.utils.formatBytes32String(verificationCode)
				);

			console.log('Document verified successfully!');
		} catch (error) {
			console.error('Error verifying document:', error);
		}
	};

	console.log(contract);

	return (
		<div className='App sm:overflow-x-hidden '>
			<Navbar />
			{/* <Header />
			<HowItWorks />
			<FAQ /> */}

			{isim === 'Ender' && (
				<School
					addStudent={addStudent}
					addDocument={addDocument}
				/>
			)}

			<Employer verifyDocument={verifyDocument} />
			<Student viewDocument={viewDocument} />

			{/* <div>
					<label>Student Name:</label>
					<input
						type='text'
						value={studentName}
						onChange={handleNameChange}
					/>
				</div>
				<div>
					<label>Student Address:</label>
					<input
						type='text'
						value={studentAddress}
						onChange={handleAddressChange}
					/>
				</div>
				<div>
					<label>IPFS Data:</label>
					<input
						type='text'
						value={ipfsData}
						onChange={handleIpfsDataChange}
					/>
				</div>
				<div>
					<label>Verification Code:</label>
					<input
						type='text'
						value={verificationCode}
						onChange={handleVerificationCodeChange}
					/>
				</div>
				<button onClick={addStudent}>Add Student</button>
				<button onClick={addDocument}>Add Document</button>
				<button onClick={viewDocument}>View Document</button>
				<button onClick={verifyDocument}>Verify Document</button> */}
		</div>
	);
};

export default App;
