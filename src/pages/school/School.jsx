import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function School({ addDocument, addStudent }) {
	const [showAddStudent, setShowAddStudent] = useState(false);
	const [showAddDocument, setShowAddDocument] = useState(false);

	function openAddStudent() {
		setShowAddStudent(true);
		setShowAddDocument(false);
	}

	function openAddDocument() {
		setShowAddStudent(false);
		setShowAddDocument(true);
	}

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
							/>
							<Label>Student Address</Label>
							<Input
								type='text'
								className='mb-5'
							/>
							<Button className='self-end'>Add Student</Button>
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
							/>
							<Label>Add Document</Label>
							<Input
								type='file'
								className='mb-5'
							/>
							<Label>Verification Code</Label>
							<Input
								type='text'
								className='mb-5'
							/>
							<Button className='self-end'>Add Document</Button>
						</div>
					)}
				</div>
			</main>
		</>
	);
}
// add student => student name , student address
// add document =>student address ,document, verification code
