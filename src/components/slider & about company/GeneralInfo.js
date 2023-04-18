import React,{useState, useEffect} from 'react'
import { useInView } from 'react-intersection-observer';

import '../../appStyle.scss'
import style from './general.module.scss'

import SliderComponent from './slider'

function GeneralInfo() {
    const [active, setActive] = useState(false);

    const { ref:elementRef, inView:elementIsVissible } = useInView({
        threshold:0
    });

    useEffect(()=>{
        if(elementIsVissible){
            setActive(true)
        }
    },[elementIsVissible])

    return (
        <div className='maxWidth_container'>
            <div  ref={elementRef} 
            className={active ? [style.general_card,style.general_cardAnimation].join(" ") : [style.general_card]}>
                <h3 className={style.title}>choose looks</h3>

                <SliderComponent/>
                <h3 className={style.title}>more about us</h3>
                <p className={style.general_text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed enim sed libero commodo efficitur. Suspendisse et lorem ac neque dictum pellentesque nec sit amet nisl. Fusce rutrum quis purus ut pretium. Vivamus ornare mauris non ligula egestas, accumsan faucibus quam sollicitudin. Duis efficitur lorem tellus. Aliquam non rhoncus felis, porttitor consequat quam. Morbi gravida semper mattis. Nunc ultrices justo in pulvinar convallis. Curabitur dapibus ut tellus eu condimentum. Morbi vitae convallis purus, ac finibus ipsum.
                <br/><br/>
                    Suspendisse nec pharetra turpis. Aenean id nunc id orci aliquam pulvinar eget vitae nisl. In ligula neque, vestibulum vel arcu eu, eleifend vestibulum tortor. Duis facilisis, est et aliquam dapibus, urna mauris sagittis mi, et mattis metus magna vel tellus. Phasellus sit amet volutpat ante, ut condimentum lorem. Quisque auctor sollicitudin dui, vitae egestas nunc suscipit et. Nullam eu quam sem. Donec a nibh molestie, aliquam libero maximus, feugiat velit. Curabitur ac accumsan velit. In hac habitasse platea dictumst.
                </p>
            </div>
        </div>
    )
}

export default GeneralInfo