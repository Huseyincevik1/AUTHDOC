import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { ethers } from 'ethers';
import { useDocumentContract } from '@/hooks/useDocumentContract';
import FileViewer from './FileViewer';


export default function Student() {
	const { contract, signer } = useDocumentContract();
	const [showAddStudent, setShowAddStudent] = useState(false);
    const [verificationCode , setVerificationCode] = useState('');
	const fileUrl = 'https://kortizol.net/fff/';
	const [showFile, setShowFile] = useState(false);
	function openAddStudent() {
		setShowAddStudent(true);
	}
	
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
			try{
				const documentHash = await contract
				.connect(signer)
				.viewDocument(
					ethers.utils.getAddress(connectedAccount),
					ethers.utils.formatBytes32String(verificationCode)
				);
				console.log('Document Hash:', documentHash);

			}catch(error){

			}
			setShowFile(!showFile);
		} catch (error) {
			console.error('Error viewing document:', error);
			alert("Error viewing document");
		}
	};


	return (
		<>
			<main className='px-10'>
				<div>
					<h1 className='text-4xl font-bold mb-10'>Student </h1>
					<div className='mb-5 flex gap-3'>
						<div>
							<Button
								variant='outline'
								onClick={openAddStudent}
							>
								{' '}
								View Document
							</Button>
						</div>
					</div>

					{showAddStudent && (
						<div className='flex flex-col gap-3 function-body '>
							<hr className='my-4 text-primary ' />
							<h1 className='text-2xl font-bold mb-5'>View Document</h1>
							{/* <Label>Student Address</Label>
							<Input
								type='text'
								className='mb-5'
							/> */}
							<Label>Verification Code</Label>
							<Input
								type='text'
								className='mb-5'
								onChange={(e) => {
                                    setVerificationCode(e.target.value);
                                }}
							/>
							<Button className='self-end' onClick={viewDocument}>View Document

							</Button>
							{showFile && <FileViewer fileUrl={fileUrl} />}
						</div>
					)}
				</div>
			</main>
		</>
	);
}

// view document => student adress, verification code , view document after verification
