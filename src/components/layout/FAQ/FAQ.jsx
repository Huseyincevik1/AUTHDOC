import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQ() {
	return (
		<section
			id='faq'
			className='faq mt-8 mb-10'
		>
			<span className='text-3xl font-semibold'>FAQ</span>
			<Accordion
				type='single'
				collapsible
				className='w-full '
			>
				<AccordionItem value='item-1'>
					<AccordionTrigger className='text-md'>
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
					<AccordionTrigger className='text-md'>
						As an institution, what type of documents can I store on this
						platform ?
					</AccordionTrigger>
					<AccordionContent>
						Educational institution can store graduation certificates,
						certificates, academic transcripts, and other educational documents
						on our platform. By uploading and verifying these documents,
						students can present them to future employers or schools.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value='item-3'>
					<AccordionTrigger className='text-md'>
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
		</section>
	);
}
