import { Fragment } from 'react'
import HeaderImg from "../../assets/HeaderImg.jpg"
import classes from "./Header.module.css"
import HeaderCartButton from './HeaderCartButton';




const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1 className={classes.logo}>Food Space</h1>
             
                <HeaderCartButton onClick={props.onShow} />
            </header>

            <div className={classes["main-image"]}>
                <img src={HeaderImg} alt="delecious food" />
            </div>
        </Fragment>
    );
};

export default Header;