import { Button } from '@/components/ui/button';
import svgImg from '/assets/svg/animated.svg';
import './header.css';
import { useEffect } from 'react';
import { useDocumentContract } from '@/hooks/useDocumentContract';
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';

export default function Header() {
  const { contract, signer } = useDocumentContract();
  const navigate = useNavigate();
  useEffect(() => {
    // You can perform any initial setup here when the component mounts
  }, []);

  const handleConnectWallet = async () => {
    if (!contract || !signer) {
      console.error('Contract or signer not available');
      return;
    }

    try {
      // Check if the connected account (signer) is the owner of the contract
      const connectedAccount = await signer.getAddress();
      const contractOwner = await contract.owner(); // Replace 'owner' with your actual function name
	  
      console.log('Connected Account:', connectedAccount);
      console.log('Contract Owner:', contractOwner);

      if (connectedAccount == contractOwner) {
        console.log('Connected account is the owner of the contract');
		navigate('/school'); // Redirect to /school page
        return;
      }
	  const result =	await contract
				.connect(signer)
				.isStudent(
					ethers.utils.getAddress(connectedAccount),
				);
	console.log(result);			
      if(result){
		navigate('/student');
		return;
      }
	  if(connectedAccount !== null ){
		navigate('/employer');
		return;
	  }
	  else{
		navigate('/home');
		alert("Geçerli bir hesap değil");
		return;
	  }
      // If the connected account is the owner, continue with your logic here
    } catch (error) {
      console.error('Error:', error);
    }
  };
    	return (
    		<header
    			id='header'
    			className='header mb-36'
    		>
    			<div className='header-container'>
    				<div className='header-container-left'>
    					<div>
    						<div className='hero-text text-4xl md:text-5xl '>
    							<span className='authenticate '>AUTHENTICATE</span> YOUR
    							EMPLOYEE'S SCHOOL DOCUMENTS
    						</div>
    					</div>

    					<p className='description text-sm md:text-lg'>
    						Our platform that ensures the secure and transparent verification of
    						educational certificates. Start an experience that enhances
    						collaboration between students, schools, and employers.
    					</p>

    					<Button className='connect-wallet p-7 ' onClick={handleConnectWallet}>Connect Your Wallet</Button>
    				</div>
    				<div className='header-container-right hidden md:flex'>
    					<img
    						className='right-container-img'
    						src={svgImg}
    						alt='helloImage'
    					/>
    				</div>
    			</div>
    		</header>
    	);
    }


