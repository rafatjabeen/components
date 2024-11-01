
import styles from "../service/service.module.css";

import Link from "next/link";


function ServicePage () {
    return (
        <div className= {styles.container}>

            <h1 className= {styles.header}>This is Service Page</h1>

            <ul>

                <li><Link href="/service/web-development">This is Web-Development Page</Link></li>


            </ul>
        </div>
    );
};

export default ServicePage;