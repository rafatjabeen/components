import styles from "../contact/contact.module.css";

import Link from 'next/link'


const ContactPage = () => {
  return (
    <div className= {styles.container}>

       <h1 className= {styles.header}>Contact Us</h1>
       <br />
       <h1>email: abc@hotmail.com</h1>
       <br />
       <h1>cell: 033xxxxxxxx</h1>
       <br />

       <ul>

<li><Link href="/">Go to Home Page</Link></li>

<li><Link href="/about">Go to About Page</Link></li>

<li><Link href="/service">Go to Service Page</Link></li> 
 
 
 </ul> 
    </div>
  );
};

export default ContactPage;