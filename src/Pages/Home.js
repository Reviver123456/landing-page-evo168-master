import React from 'react'
import Header from '../Components/Header'
import Foolter from '../Components/Footer'
import {Container, Row, Col, Tab, Tabs} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

import allSlot from '../Images/home/H-slot.png'
import allSport from '../Images/home/H-Sport.png'
import allLotto from '../Images/home/H-Lotto.png'
import allCasino from '../Images/home/H-Casino.png'

import bgpromotion from '../Images/home/Pro-Banner.png'

import allGames from '../Images/home/ButtonState.png'
import textgame from '../Images/home/text.png'

import registerMB from '../Images/background/BG-icon/Button Regiter.png'
import loginMB from '../Images/background/BG-icon/Button Login.png'
import tabbartextproH from '../Images/background/promotion/textPro.png'



export default function Home() {
    return (
        <>
      <div>       
            <div className='home'>
                <Header />
                <div class='container'>
                    <div>
                        <div className='home--section'>
                            <div className='pc'>
                                <div className='home--games--section'> 
                                    <div className='left-bg'>
                                        {/* <a href='https://game.evo168.com'><img src={bgpromotion} className="w-100" /></a> */}
                                        <Splide className='slide'
                                            options={ {
                                            rewind: false,
                                            gap   : '10px',
                                            type: "loop",
                                            autoplay: true,
                                            arrows: false
                                            } }
                                        >
                                            <SplideSlide><a href="https://game.evo168.com"><img src={bgpromotion} className="w-100" /></a></SplideSlide>
                                            <SplideSlide><a href="https://game.evo168.com"><img src={bgpromotion} className="w-100" /></a></SplideSlide>
                                            <SplideSlide><a href="https://game.evo168.com"><img src={bgpromotion} className="w-100" /></a></SplideSlide>
                                        </Splide>
                                    </div>
                                    <div className='right-bg'>
                                        <Row>
                                            <Col xs={12}><img src={textgame} className="text--game--category" /></Col>
                                            <Col md={6} xs={12}><a href='https://game.evo168.com'><img src={allSlot} className="w-100" /></a></Col>
                                            <Col md={6} xs={12}><a href='https://game.evo168.com'><img src={allSport} className="w-100" /></a></Col>
                                            <Col md={6} xs={12}><a href='https://game.evo168.com'><img src={allLotto} className="w-100" /></a></Col>
                                            <Col md={6} xs={12}><a href='https://game.evo168.com'><img src={allCasino} className="w-100" /></a></Col>
                                            <Col xs={12}><a href='https://game.evo168.com'><img src={allGames} className="w-100" /></a></Col>
                                        </Row>
                                    </div>
                                </div> 
                            </div>                                                 
                        </div>
                    </div>
                </div>
            </div>        
        </div>
        <div className='MB--home'>
        <Foolter/>
        <div className='home--games--section'> 
    
        <div className='login-register'>
            <a href='https://game.evo168.com'><img src={registerMB} className="register--MB" /></a>
            <a href='https://game.evo168.com'><img src={loginMB} className="login}--MB" /></a> 
        </div>
            <div className='left-bg'>
                {/* <a href='https://game.evo168.com'><img src={bgpromotion} className="w-100" /></a> */}
                <Splide className='slide'
                     options={ {
                    rewind: false,
                    gap   : '10px',
                    type: "loop",
                    autoplay: true,
                    arrows: false
                    } }
                >
                    <SplideSlide><a href="https://game.evo168.com"><img src={bgpromotion} className="w-100" /></a></SplideSlide>
                    <SplideSlide><a href="https://game.evo168.com"><img src={bgpromotion} className="w-100" /></a></SplideSlide>
                    <SplideSlide><a href="https://game.evo168.com"><img src={bgpromotion} className="w-100" /></a></SplideSlide>
                </Splide>
            </div>
            <div className='abc'>
            <div className='text--game'>               
            <th>ยินดีต้อนรับสู่ EVO168 เล่นสล็อตวันนี้ รับโบนัสเพิ่มทันที 50%</th><img src={tabbartextproH} className="MB--text--barH"></img>
            </div>  
            </div>
            <div className='right-bg'>          
                <div className='right-bg-game'>
                <img src={textgame} className="MB--text--game--category" />
                    <a href='https://game.evo168.com'><img src={allSlot} className="MB--all--Slot" /></a>
                    <a href='https://game.evo168.com'><img src={allSport} className="MB--all--Sport" /></a>
                    <a href='https://game.evo168.com'><img src={allLotto} className="MB--allL--otto" /></a>
                    <a href='https://game.evo168.com'><img src={allCasino} className="MB--all--Casino" /></a>
                    <a href='https://game.evo168.com'><img src={allGames} className="MB--all--Games" /></a>
                </div>                  
            </div>
        </div>        
    </div>
    </>
    )
  }
