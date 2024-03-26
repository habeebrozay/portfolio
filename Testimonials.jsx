import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

const slider = useRef();
let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
        tx -=25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
}
const slideBackward = ()=>{
    if(tx < 0){
        tx +=25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
}
  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Memeru Tennyson</h3>
                            <span>Tech Guy, Nigeria</span>
                        </div>
                    </div>
                    <p>I had no idea jerseys were so beautiful. He persuaded me to get one and I loved it so so much. Been patronizing him ever since.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Talabi Alex</h3>
                            <span>CEO FootiesByTalaborn, Nigeria</span>
                        </div>
                    </div>
                    <p>Omo these clothes fine oo. Abeg help me get am for me and my babe. They looked so good on me people were staring the day I wore it.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Bewaji Damola</h3>
                            <span>CEO Daetem Pixels, Nigeria</span>
                        </div>
                    </div>
                    <p>Omo assuming money dey I suppose buy like 20. I really love the materials gan. Been patronizing him ever since.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Habeeb Ayinde</h3>
                            <span>Jamajama, Nigeria</span>
                        </div>
                    </div>
                    <p>The way I was attended to, the manner they were delivered and the quality were all so topnotch. Ireally recommend people patronize.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
