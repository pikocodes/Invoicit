import React, {useState} from 'react'


export default function InvoiceNumGenerator() {
  //Invoice Generator button is clicked
  
  //User is presented with a modal for  invoice generation options, which includes: (left) Registered Business or (right) Business not registered
  
  //Form (Registered): Enter CAC registeration Number
  
  //Form (Not Registered): Enter Bank Account Number
  
  //Invoice Number is generated with Bank Account Number + Sequence of 1000
  
  //Invoice Number is generated with CAC Registeration Number + Sequence of 1000
  
  
  const [CACReg, setCACReg] = useState<string>(''); //CAC Registration number for registered users
  
  const [BankAcctNumb, setBankAccNumb] = useState<string>('');  //User's bank account number for non-registered users
  
  const [invoiceNumb, setInvoiceNumb] = useState<string>("No Input");


  //demo inputs
  const CACRegdemo: string = '234567890';
  const BankAcctNumDemo : string= "1234567890";
  
  //sequence number is the counter from 1 - 10,000
  
  function generateInvoiceNumb(sequenceNum: string, registered: boolean): void {
      if (registered === true) {
          setInvoiceNumb(CACRegdemo + sequenceNum);
          console.log('Registered Business')
      } else if (registered === false) {
          setInvoiceNumb(BankAcctNumDemo + sequenceNum);
          console.log('Business not registered')
      } else {
          console.log('No Input');
          setInvoiceNumb('No Input');
      }
  }

  return (
    <div>
      <h1>{invoiceNumb}</h1>
      <button onClick={() => generateInvoiceNumb('739', false)}>Generate ivNumber <br/> (Business Not Registered)</button>
      <button onClick={() => generateInvoiceNumb('931', true)}>Generate ivNumber <br/> (For Registered Business)</button>

    </div>
  )
}
