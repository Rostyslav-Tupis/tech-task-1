import React,{useState} from 'react'
import style from './nav.module.scss'
import {AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';

import '../../appStyle.scss'

function Navigation() {
    let [activeMenu, setActiveMenu] = useState(false)

    if(activeMenu === true){
        document.body.style.overflow = "hidden"
    }else{
        document.body.style.overflow = '';
    }

    return (
        <div>
            <div className='maxWidth_container'>
                <header className={style.header}>
                    <nav className={style.navigation}>
                        <p className={style.logotype}>Landing</p>

                        <div className={style.list__buyBtn}>
                            <ul className={activeMenu ? [style.list_menu, style.active].join(" ") : [style.list_menu]}
                            onClick={()=>setActiveMenu(false)}>
                                <li><a href='link' className={style.item_link}>Clothes</a></li>
                                <li><a href='link' className={style.item_link} >Sneakers</a></li>
                                <li><a href='link' className={style.item_link} >Bags</a></li>
                                <li><a href='link' className={style.item_link} >Accessorize</a></li>
                            </ul>

                            <button className={style.buyBtn} type='button'>Buy</button>

                            <div className={style.mobile_btn} onClick={()=>setActiveMenu(!activeMenu)}>
                                {activeMenu ?  <AiOutlineClose size={40}/> : <AiOutlineMenu size={40}/> }
                            </div>
                        </div>
                    </nav>
                </header>
                </div>
        </div>
    )
}

export default Navigation