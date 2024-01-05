import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useDocumentContract } from '@/hooks/useDocumentContract';
import { ethers } from 'ethers';
import { createIpfsClient } from '@/ipfsClient/createIPFS.jsx';
//import { create as ipfsHttpClient } from 'ipfs-http-client';


export default function School({ onAddDocument, onAddStudent  }) {
	const client = createIpfsClient();
	//const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')
	const { contract, signer } = useDocumentContract();
	const [showAddStudent, setShowAddStudent] = useState(false);
	const [showAddDocument, setShowAddDocument] = useState(false);
	const [studentName , setStudentName] = useState('');
	const [studentAddress , setStudentAddress] = useState('');
	const [verificationCode, setVerificationCode] = useState('');
	const [file, setFile] = useState(null);
  
	function openAddStudent() {
		setShowAddStudent(true);
		setShowAddDocument(false);
	
	}
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
			alert('Student added successfully!');
		} catch (error) {
			console.error('Error adding student:', error);
			alert('Error adding student');
		}
	};

	function openAddDocument() {
		setShowAddStudent(false);
		setShowAddDocument(true);

	}
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
		console.log(client);
		console.log(file);
	
        try {
			
			console.log("a");
            const added = await client.addAll({ content: file });
			console.log(added);
            const url = `https://ipfs.infura.io/ipfs/${added.path}`;
			console.log("c");
            console.log(url);
			const tx = await contract
				.connect(signer)
				.addDocument(
					ethers.utils.getAddress(studentAddress),
					ethers.utils.formatBytes32String("sertifika"),
					ethers.utils.formatBytes32String(verificationCode)
				);

			// Wait for the transaction to be mined
			await tx.wait();

			// You can do additional actions after a successful transaction
			console.log('Document added successfully!');
			alert('Document added successfully!');
			
		} catch (error) {
			console.error('Error adding document to contract:', error);
		}
        
    } catch (error) {
        console.error('Error adding document:', error);
		alert('Error adding document!');
    }
	 };
	return (
		<>
			<main className='px-10'>
				<div>
					<h1 className='text-4xl font-bold mb-10'>School Management </h1>
					<div className='mb-5 flex gap-3'>
						<div>
							<Button
								variant='outline'
								onClick={openAddStudent}
							>
								{' '}
								Add Student
							</Button>
						</div>
						<div>
							<Button
								variant='outline'
								onClick={openAddDocument}
							>
								{' '}
								Add Document
							</Button>
						</div>
					</div>

					{showAddStudent && (
						<div className='flex flex-col gap-3 function-body'>
							<hr className='my-4 text-primary ' />
							<h1 className='text-2xl font-bold mb-5'>Add Student</h1>
							<Label>Student Name</Label>
							<Input
								type='text'
								className='mb-5'
								onChange={(e) => {
                                    setStudentName(e.target.value);
                                }}
							/>
							<Label>Student Address</Label>
							<Input
								type='text'
								className='mb-5'
								onChange={(e) => {
                                    setStudentAddress(e.target.value);
                                }}
							/>
							<Button className='self-end'onClick={addStudent}>Add Student</Button>
						</div>
					)}

					{showAddDocument && (
						<div className='flex flex-col gap-3 function-body'>
							<hr className='my-4 text-primary ' />
							<h1 className='text-2xl font-bold mb-5'>Add Document</h1>
							<Label>Student Address</Label>
							<Input
								type='text'
								className='mb-5'
								onChange={(e) => {
                                    setStudentAddress(e.target.value);
                                }}
							/>
							<Label>Add Document</Label>
							<Input
								type='file'
								className='mb-5'
								onChange={async (e) => {
									const selectedFile = e.target.files[0]; // Get the first selected file
									setFile(selectedFile);
								}}
							/>
							<Label>Verification Code</Label>
							<Input
								type='text'
								className='mb-5'
								onChange={(e) => {
                                    setVerificationCode(e.target.value);
                                }}
							/>
							<Button className='self-end' onClick={addDocument}>Add Document</Button>
						</div>
					)}
				</div>
			</main>
		</>
	);
}
// add student => student name , student address
// add document =>student address ,document, verification code
