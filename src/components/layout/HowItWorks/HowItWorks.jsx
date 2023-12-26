import './howitworks.css';
import blockchain from '/assets/svg/blockchain2.svg';
import authenticated from '/assets/svg/authenticated.svg';
import login from '/assets/svg/login.svg';

export default function HowItWorks() {
	return (
		<section
			id='howitworks'
			className='how-it-works-container mt-10 mb-32'
		>
			<div className='how-it-works-wrapper'>
				<h1 className='text-6xl font-bold text-center'>How It Works</h1>
				<div className='how-it-works-content'>
					<div className='how-it-work-card'>
						<div className='card-img h-28 w-20'>
							<img src={login} />
						</div>
						<h3 className='card-title text-3xl font-semibold'>Login</h3>
						<div className='card-description'>
							After logging into the platform, the employer initiates the
							verification process by clicking on the "Authenticate" button.
							After login the employer provides the employee's name and school
							identification number to kickstart the authentication process.
						</div>
					</div>
					<div className='how-it-work-card'>
						<div className='card-img h-28 w-20'>
							<img src={blockchain} />
						</div>
						<h3 className='card-title text-3xl font-semibold'>
							Verification & Blockchain
						</h3>
						<div className='card-description'>
							<span className='font-black'>Activation of Smart Contracts </span>
							: The platform activates smart contracts on the blockchain to
							verify the accuracy of the provided information. <br />
							<br />{' '}
							<span className='font-black'>
								Cross-Referencing with Blockchain Data{' '}
							</span>
							: The system cross-references the entered details with the data
							stored on the blockchain, ensuring data consistency.
						</div>
					</div>
					<div className='how-it-work-card'>
						<div className='card-img h-28 w-20'>
							<img src={authenticated} />
						</div>
						<h3 className='card-title text-3xl font-semibold'>
							Access & Confirmation
						</h3>
						<div className='card-description'>
							<span className='font-black'>
								Presentation of Verified Documents
							</span>
							: Upon successful verification, the platform retrieves and
							presents all authenticated documents from the employee's school.
							<br />
							<br />
							<span className='font-black'>Employer Confirmation </span>: The
							employer reviews the presented documents, confirming the validity
							of the employee's educational credentials.
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
