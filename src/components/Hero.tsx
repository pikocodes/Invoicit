import React, {useState} from 'react'

//Invoice Generator button is clicked

//User is presented with a modal for  invoice generation options, which includes: (left) Registered Business or (right) Business not registered

//Form (Registered): Enter CAC registeration Number

//Form (Not Registered): Enter Bank Account Number

//Invoice Number is generated with Bank Account Number + Sequence of 1000

//Invoice Number is generated with CAC Registeration Number + Sequence of 1000


const [CACReg, setCACReg] = useState<string>(''); //CAC Registration number for registered users

const [BankAcctNumb, setBankAccNumb] = useState<string>('');  //User's bank account number for non-registered users

const [invoiceNumb, setInvoiceNumb] = useState<string>("");



function generateInvoiceNumb(referenceNumb: string): void {
    if (CACReg.length !== 0) {
        setInvoiceNumb(CACReg + referenceNumb);
    } else if (BankAcctNumb.length !== 0) {
        setInvoiceNumb(BankAcctNumb + referenceNumb);
    } else {
        console.log('No Input');
    }
}



export default function Hero() {
  return (
    <div>Hero</div>
  )
}
