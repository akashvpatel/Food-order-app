import React from "react";
import classes from "./Footer.module.css"


const Footer = ()=>{



    return(
        <div className={classes.footer}>
            <hr />
            <div>
                <p>© 2022 by Food space.</p>
                <p>Made with love by Akash Patel</p>
            </div>
        </div>
    )
}

export default Footer;