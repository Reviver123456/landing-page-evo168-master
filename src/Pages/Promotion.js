import React from 'react';
import {Container, Row, Col, Tab, Tabs} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Foolter from '../Components/Footer'
import '../Style/Promotion.css';

import textpromotion from '../Images/background/promotion/PromoText.png'
import gamebanner from '../Images/background/promotion/Banner01.png'
import tabbartext from '../Images/background/tabbgpro.png'
import tabbartextpro from '../Images/background/promotion/textPro.png'

import Lotto1 from '../Images/background/iconPro/Lotto/Lotto1.png'

import carsino1 from '../Images/background/iconPro/carsino/carsino1.png'
import carsino2 from '../Images/background/iconPro/carsino/carsino2.png'
import carsino3 from '../Images/background/iconPro/carsino/carsino3.png'
import carsino4 from '../Images/background/iconPro/carsino/carsino4.png'
import carsino5 from '../Images/background/iconPro/carsino/carsino5.png'

import Slot1 from '../Images/background/iconPro/Slot/Slot1.png'
import Slot2 from '../Images/background/iconPro/Slot/Slot2.png'
import Slot3 from '../Images/background/iconPro/Slot/Slot3.png'
import Slot4 from '../Images/background/iconPro/Slot/Slot4.png'
import Slot5 from '../Images/background/iconPro/Slot/Slot5.png'
import Slot6 from '../Images/background/iconPro/Slot/Slot6.png'
import Slot7 from '../Images/background/iconPro/Slot/Slot7.png'
import Slot8 from '../Images/background/iconPro/Slot/Slot8.png'
import Slot9 from '../Images/background/iconPro/Slot/Slot9.png'


import sport1 from '../Images/background/iconPro/sport/sport1.png'
import sport2 from '../Images/background/iconPro/sport/sport2.png'
import sport3 from '../Images/background/iconPro/sport/sport3.png'
import sport4 from '../Images/background/iconPro/sport/sport4.png'
import sport5 from '../Images/background/iconPro/sport/sport5.png'
import sport6 from '../Images/background/iconPro/sport/sport6.png'
import sport7 from '../Images/background/iconPro/sport/sport7.png'
import sport8 from '../Images/background/iconPro/sport/sport8.png'
import sport9 from '../Images/background/iconPro/sport/sport9.png'
import sport10 from '../Images/background/iconPro/sport/sport10.png'



export default function Promotion() {
  return (
    <>
        <div className="promotion-section">                
            <div className='promotion-Pc'>
                <img src={textpromotion} className="text--promotion" />
                    <Container>
                        <Row>
                            <img src={tabbartext} className="bg--tab--blue" />
                            <Tabs defaultActiveKey="tab-1">
                                <Tab eventKey="tab-1" title="ทั้งหมด">                    
                                    <Row>
                                    <Col Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={sport1} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={sport2} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={sport3} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={sport4} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={sport5} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={sport6} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={sport7} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={sport8} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={sport9} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={sport10} className="w-100" /></a></Col>  
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={carsino1} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={carsino2} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={carsino3} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={carsino4} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={carsino5} className="w-100" /></a></Col>
                                    </Row>
                                </Tab>
                                <Tab eventKey="tab-2" title="กีฬา">
                                    <Row>
                                        <Col Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={sport1} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={sport2} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={sport3} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={sport4} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={sport5} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={sport6} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={sport7} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={sport8} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={sport9} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={sport10} className="w-100" /></a></Col>   
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={Slot2} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={Slot3} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={Slot4} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={Slot5} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={Slot6} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={Slot7} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={Slot8} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={Slot9} className="w-100" /></a></Col> 
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={Lotto1} className="w-100" /></a></Col>
                                    </Row>
                                </Tab>
                                <Tab eventKey="tab-3" title="คาสิโน">
                                    <Row>
                                    <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={carsino1} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={carsino2} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={carsino3} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={carsino4} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={carsino5} className="w-100" /></a></Col>
                                    </Row>
                                </Tab>                       
                                <Tab eventKey="tab-4" title="สล๊อต">
                                    <Row>
                                    <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={Slot1} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={Slot2} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={Slot3} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={Slot4} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={Slot5} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={Slot6} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={Slot7} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={Slot8} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={Slot9} className="w-100" /></a></Col>
                                    </Row>
                                </Tab>
                                <Tab eventKey="tab-5" title="หวย">
                                    <Row>
                                    <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={Lotto1} className="w-100" /></a></Col>
                                    </Row>
                                </Tab>
                            </Tabs>                          
                        </Row>
                    </Container>
                </div>
            </div>  


                <div className='promotion-MB'>
                <div className='text--game--MB'>               
                    <marquee>ยินดีต้อนรับสู่ EVO168 เล่นสล็อตวันนี้ รับโบนัสเพิ่มทันที 50%</marquee><img src={tabbartextpro} className="MB--text--bar"></img>
                </div>
                <img src={tabbartext} className="MB--tab--blue" />
                    <img src={textpromotion} className="MB--text--promotion" />
                    
                        <div className='Promotion-pro'>
                        
                        <Container>
                                <Row>
                                <Tabs defaultActiveKey="tab-1">
                                <Tab eventKey="tab-1" title="ทั้งหมด">                    
                                    <Row>
                                    <Col Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={sport1} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={sport2} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={sport3} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={sport4} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={sport5} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={sport6} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={sport7} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={sport8} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={sport9} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={sport10} className="w-100" /></a></Col>  
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={carsino1} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={carsino2} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={carsino3} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={carsino4} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={carsino5} className="w-100" /></a></Col>
                                    </Row>
                                </Tab>
                                <Tab eventKey="tab-2" title="กีฬา">
                                    <Row>
                                        <Col Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={sport1} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={sport2} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={sport3} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={sport4} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={sport5} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={sport6} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={sport7} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={sport8} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={sport9} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={sport10} className="w-100" /></a></Col>   
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={Slot2} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={Slot3} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={Slot4} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={Slot5} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={Slot6} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={Slot7} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={Slot8} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={Slot9} className="w-100" /></a></Col> 
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={Lotto1} className="w-100" /></a></Col>
                                    </Row>
                                </Tab>
                                <Tab eventKey="tab-3" title="คาสิโน">
                                    <Row>
                                    <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={carsino1} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={carsino2} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={carsino3} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={carsino4} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={carsino5} className="w-100" /></a></Col>
                                    </Row>
                                </Tab>                       
                                <Tab eventKey="tab-4" title="สล๊อต">
                                    <Row>
                                    <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={Slot1} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={Slot2} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={Slot3} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={Slot4} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={Slot5} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={Slot6} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={Slot7} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={Slot8} className="w-100" /></a></Col>
                                        <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={Slot9} className="w-100" /></a></Col>
                                    </Row>
                                </Tab>
                                <Tab eventKey="tab-5" title="หวย">
                                    <Row>
                                    <Col md={5} xs={11} className='games mb-2'><a href='https://game.evo168.com'><img src={Lotto1} className="w-100" /></a></Col>
                                    </Row>
                                </Tab>
                            </Tabs>                          
                                </Row>
                            </Container>
                        </div>
                </div>    
        <Foolter/>
    </>
  )
}


