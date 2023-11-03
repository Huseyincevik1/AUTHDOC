import { Button } from '@/components/ui/button';
import svgImg from '/assets/svg/animated.svg';
import './header.css';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function Header() {
  return (
    <header className='header'>
      <div className='header-container'>
        <div className='header-container-left'>
          <div>
            <div className='hero-text'>
              <span className='authenticate '>AUTHENTICATE</span> YOUR
              EMPLOYEE'S SCHOOL DOCUMENTS
            </div>
          </div>

          <p className='description'>
            Our platform that ensures the secure and transparent verification of
            educational certificates. Start an experience that enhances
            collaboration between students, schools, and employers.
          </p>

          <Button className='connect-wallet p-7'>Connect Your Wallet</Button>
        </div>
        <div className='header-container-right hidden md:flex'>
          <img
            className='right-container-img'
            src={svgImg}
            alt='helloImage'
          />
        </div>
      </div>
      <div className='faq'>
        <span className='text-3xl font-semibold'>FAQ</span>
        <Accordion
          type='single'
          collapsible
          className='w-full'
        >
          <AccordionItem value='item-1'>
            <AccordionTrigger>
              How are my documents secured on the blockchain?
            </AccordionTrigger>
            <AccordionContent>
              As your documents are secured, each document is encrypted with a
              unique cryptographic identity and stored on the blockchain. This
              ensures that your documents have not been altered and can be
              trusted.{' '}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='item-2'>
            <AccordionTrigger>
              As an institution, what type of documents can I store on this platform
              ?
            </AccordionTrigger>
            <AccordionContent>
              Educational institution can store graduation certificates,
              certificates, academic transcripts, and other educational
              documents on our platform. By uploading and verifying these
              documents, students can present them to future employers or
              schools.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='item-3'>
            <AccordionTrigger>
              How does the document verification process work ?
            </AccordionTrigger>
            <AccordionContent>
              The document verification process involves securely storing
              educational certificates on the blockchain. When a document is
              uploaded, it receives a unique cryptographic fingerprint, ensuring
              its integrity. Employers and educational institutions can verify
              documents by matching this fingerprint with the blockchain record.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </header>
  );
}
