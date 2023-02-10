import React from "react";
import style from './Header.module.css';
import HeadeCardButton from "./HeaderCardButton";
const Header = props =>{    
    return(
        <React.Fragment>
            <header className={style.header}>
                <h1>ReactMeals</h1>
                <HeadeCardButton onClick={props.onShowCart}/>
            </header>
            <div className={style['main-image']}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMVOl1iqjUR-O3igacH3OmwbOab2A6_Rb0Ty-5GrdUcA&s"/>
            </div>
        </React.Fragment>
    )
};
export default Header;