import React,{useState, useEffect} from 'react'
import '../../appStyle.scss'
import style from './title.module.scss'
import { useInView } from 'react-intersection-observer';

import MaskText from './maskText';

import apple from '../../images/apple.png'
import androind from '../../images/android.png'


function Title() {
    const [active, setActive] = useState(false);

    const { ref:elementRef, inView:elementIsVissible } = useInView({
        threshold:0.5
    });

    useEffect(()=>{
        if(elementIsVissible){
            setActive(true)
        }
    },[elementIsVissible])

    return (
        <div className={style.background}>
            <div className='maxWidth_container' >
                <div  ref={elementRef} className={active ? [style.main_content,style.main_contentAnimation].join(" ") : [style.main_content]}>
                    <div className={style.main_apps_block}>
                        <div className={style.apps}>
                            <a href="https://www.apple.com/ua/app-store/" className={style.app_link}>
                                <img src={apple}  className={style.icon_apple} alt="app icon"/>
                            </a>
                            <a href="https://play.google.com/store/apps?hl=uk&gl=US&pli=1" className={style.app_link}>
                                <img src={androind}  className={style.icon_android} alt="app icon"/>
                            </a>
                        </div>
                        <p className={style.text_under_apps}>App available</p>
                    </div>
                    <h1 className={style.title}>Choose your winter <span className={style.decoratedWord}>look</span> apparel</h1>

                    <div>
                        <MaskText/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Title