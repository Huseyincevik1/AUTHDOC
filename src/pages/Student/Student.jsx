import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function Student() {
	const [showAddStudent, setShowAddStudent] = useState(false);

	function openAddStudent() {
		setShowAddStudent(true);
	}

	return (
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
						<Label>Student Address</Label>
						<Input
							type='text'
							className='mb-5'
						/>
						<Label>Verification Code</Label>
						<Input
							type='text'
							className='mb-5'
						/>
						<Button className='self-end'>View Document</Button>
					</div>
				)}
			</div>
		</main>
	);
}

// view document => student adress, verification code , view document after verification