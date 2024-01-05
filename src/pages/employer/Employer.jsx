import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { ethers } from 'ethers';
import { useDocumentContract } from '@/hooks/useDocumentContract';

export default function Employer() {
	const { contract, signer } = useDocumentContract();
	const [showAddStudent, setShowAddStudent] = useState(false);
    const [studentAddress , setStudentAddress] = useState('');
	const [verificationCode, setVerificationCode] = useState('');
	function openAddStudent() {
		setShowAddStudent(true);
	
	}
    const verifyDocument = async () => {
		try {
			if (!contract || !signer || !verificationCode) {
				console.error(
					'Document contract, signer, or verificationCode is invalid'
				);
				alert('Document contract, signer, or verificationCode is invalid');
				return;
			}
	  // Replace 'verifyDocument' with the actual function name in your contract
		const result =	await contract
				.connect(signer)
				.isDocumentExist(
					ethers.utils.getAddress(studentAddress),
					ethers.utils.formatBytes32String(verificationCode)
				);

			console.log('Document verified successfully!',result);
			if (result) {
				alert('Document verified successfully!');
			} else {
				alert('Document verification failed!');
			}
		} catch (error) {
			console.error('Error verifying document:', error);
			alert('Error verifying document');
		}
    
	};

	return (
		<>
			<main className='px-10'>
				<div>
					<h1 className='text-4xl font-bold mb-10'>Employer </h1>
					<div className='mb-5 flex gap-3'>
						<div>
							<Button
								variant='outline'
								onClick={openAddStudent}
							>
								{' '}
								Verify Document
							</Button>
						</div>
					</div>

					{showAddStudent && (
						<div className='flex flex-col gap-3 function-body '>
							<hr className='my-4 text-primary ' />
							<h1 className='text-2xl font-bold mb-5'>Verify Document</h1>
							<Label>Student Address</Label>
							<Input
								type='text'
								className='mb-5'
								onChange={(e) => {
                                    setStudentAddress(e.target.value);
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
							<Button className='self-end' onClick={verifyDocument}>Verify Document</Button>
						</div>
					)}
				</div>
			</main>
		</>
	);
}
