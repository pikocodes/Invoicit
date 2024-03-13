import React, {useState} from 'react'

interface formProps {
    name: string;
    email: string;
    password: string;
}


function generateInvoiceNumbForm() {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [CACRegNumb, setCACRegNumb] = useState(0);
    const [BankAcctNumb, setBankAcctNumb] = useState(0);



  return (
    <div>
        <form action="">
            <label htmlFor="">Name</label>
            <input type="text" name='name' value={name} />
            <label htmlFor="">Email</label>
            <input type="email" name='email' value={email} />
            <label htmlFor="">Password</label>
            <input type="password" name='password' value={password} />
            <label htmlFor="">CAC Reg No</label>
            <input type="number" name='CAC Reg No' value={CACRegNumb} />
        </form>
    </div>
  )
}

export default generateInvoiceNumbForm