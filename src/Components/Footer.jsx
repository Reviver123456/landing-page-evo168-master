import React,{ useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/Foolter.css';
import {Container, Row, Col, Tab, Tabs} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';

import FoolterBar from '../Images/background/foolterbar.png'
import TopBar from '../Images/background/TopProBg01.png'
import WalletBg from '../Images/background/BG-icon/wallet.png'
import DepositBg from '../Images/background/BG-icon/deposit.png'
import BottomtextBg from '../Images/background/BG-icon/bottomtext.png'
import WithdrawBg from '../Images/background/BG-icon/withdraw.png'
import PromoBg from '../Images/background/BG-icon/promo.png'
import NotifiBg from '../Images/background/BG-icon/Notifi.png'
import BurgerMenuBg from '../Images/background/BG-icon/BurgerMenu.png'

/*mobil*/
import MbFoolterBar from '../Images/background/BottomMb.png'
import MbTopBar from '../Images/background/TopMb.png'
import MbWalletBg from '../Images/background/BG-icon/wallet.png'
import MbDepositBg from '../Images/background/BG-icon/deposit.png'
import MbBottomtextBg from '../Images/background/BG-icon/bottomtext.png'
import MbWithdrawBg from '../Images/background/BG-icon/withdraw.png'
import MbPromoBg from '../Images/background/BG-icon/promo.png'
import MbNotifiBg from '../Images/background/BG-icon/Notifi.png'
import MbBurgerMenuBg from '../Images/background/BG-icon/BurgerMenu.png'
import tabbartextpro from '../Images/background/promotion/textPro.png'

import tapicon1 from '../Images/background/TabManu/tapicon1.png'
import tapicon2 from '../Images/background/TabManu/tapicon2.png'
import tapicon3 from '../Images/background/TabManu/tapicon3.png'
import tapicon4 from '../Images/background/TabManu/tapicon4.png'
import tapicon5 from '../Images/background/TabManu/tapicon5.png'
import tapicon6 from '../Images/background/TabManu/tapicon6.png'
import tapicon7 from '../Images/background/TabManu/tapicon7.png'
import tapicon8 from '../Images/background/TabManu/tapicon8.png'
import tapicon9 from '../Images/background/TabManu/tapicon9.png'


import tabbartext from '../Images/background/tabbgpro.png'

export default function Footer() {
  const [show, setShow] = useState(false);
  const [showNofi, setShowNofi] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const handleCloseNofi = () => setShowNofi(false);
  const handleShowNofi = () => setShowNofi(true);
  return (
    <>
    <div className='wrapper-Pc-bg2'>
      <div className='Foolter'>
        <div className='pc'>
        <img src={TopBar} className="header--bg " />
        <div className='icon--bar--BG'>          
          <img src={BurgerMenuBg} className="Burger--Menu--Bg"onClick={handleShow} />
          <img src={NotifiBg} className="icon--nofi--Bg" onClick={handleShowNofi} />
        </div>
        <div className='Foolter--nav'>
          <div className='centerBG'>
          <a href='https://game.evo168.com'><img src={WalletBg} className="Wallet--Bg" /></a>
          <a href='https://game.evo168.com'><img src={DepositBg} className="Deposit--Bg"/></a>
          <a href='https://game.evo168.com'><img src={BottomtextBg} className="Foolter--text-center" /></a>
          <a href='https://game.evo168.com'><img src={WithdrawBg} className="Withdraw--Bg"/></a>
          <a href='https://game.evo168.com'><img src={PromoBg} className="Promo--Bg"/></a>
          </div>         
        </div>
        <img src={FoolterBar} className="Foolter--bg" />
      </div>
    </div>





    <div className='wrapper-Mb-bg2'>
      <div className='mobile'>
        <img src={MbTopBar} className="mb--header--bg" />
        <img src={MbFoolterBar} className="mb--Foolter--bg" />
        <div className='mb--icon--bar--BG'>          
          <img src={MbBurgerMenuBg} className="mb--Burger--Menu--Bg"onClick={handleShow} />
          <img src={MbNotifiBg} className="mb--icon--nofi--Bg" onClick={handleShowNofi} />
        </div>
        <div className='mb--Foolter--nav'>
            <img src={MbFoolterBar} className="mb--Foolter--bg" />
          <div className='mb--centerBG'>
            <img src={MbWalletBg} className="mb--Wallet--Bg" />
            <img src={MbDepositBg} className="mb--Deposit--Bg"/>
            <img src={MbBottomtextBg} className="mb--Foolter--text-center" />
            <img src={MbWithdrawBg} className="mb--Withdraw--Bg"/>
            <img src={MbPromoBg} className="mb--Promo--Bg"/>
          </div>         
      </div>          
      </div>
    </div>
  </div>



  <Modal show={show} onHide={handleClose} className="showmenu--hamburgerbar--modal">
        <div className='wrapper--menu--hamburger'>
            <div className='wrapper--section--hamburger'>
                <div>
                    <div className='menu--hamburger'>
                      <Row>
                        <Col md={6} xs={6}><a href='https://game.evo168.com'><img src={tapicon1} className="w-100" /></a></Col>
                        <Col md={6} xs={6}><a href='https://game.evo168.com'><img src={tapicon2} className="w-100" /></a></Col>
                      </Row>
                      <Row>
                        <Col md={6} xs={6}><a href='https://game.evo168.com'><img src={tapicon3} className="w-100" /></a></Col>
                        <Col md={6} xs={6}><a href='https://game.evo168.com'><img src={tapicon4} className="w-100" /></a></Col>
                      </Row>
                      <Row>
                        <Col md={6} xs={6}><a href='https://game.evo168.com'><img src={tapicon5} className="w-100" /></a></Col>
                        <Col md={6} xs={6}><a href='https://game.evo168.com'><img src={tapicon6} className="w-100" /></a></Col>
                      </Row>
                      <Row>
                        <Col md={6} xs={6}><a href='https://game.evo168.com'><img src={tapicon7} className="w-100" /></a></Col>
                        <Col md={6} xs={6}><a href='https://game.evo168.com'><img src={tapicon8} className="w-100" /></a></Col>
                      </Row>
                      <Row>
                        <Col xs={12}><a href='/Promotion'><img src={tapicon9} className="w-100" /></a></Col>
                      </Row>
                    </div>
                </div>
            </div>
        </div>
    </Modal>
  <Modal show={showNofi} onHide={handleCloseNofi} className="showmenu--nofi--modal">
        <div className='text--noti'>
          <h2 className='textnoti'>แจ้งเตือน</h2>
        </div>
        <div className='wrapper--menu--nofi'>
            <div className='wrapper--section--nofi'>
                <div>
                    <div className='menu--nofi'>
                    <Container className='box--nofi'>
                      
                        <Row>
                            <img src={tabbartext} className="bg--tab--blue--nofi" />
                            <Tabs defaultActiveKey="tab-1">
                                <Tab eventKey="tab-1" title="ทั้งหมด">                    
                                    <Row>
                                      <Col xs={12} className='games mb-2'>คุณไม่มีข้อความ</Col>
                                    </Row>
                                </Tab>
                                <Tab eventKey="tab-2" title="ฝากเงิน">
                                    <Row>
                                      <Col xs={12} className='games mb-2'>คุณไม่มีข้อความ</Col>
                                    </Row>
                                </Tab>
                                <Tab eventKey="tab-3" title="ถอนเงิน">
                                    <Row>
                                      <Col xs={12} className='games mb-2'>คุณไม่มีข้อความ</Col>
                                    </Row>
                                </Tab>                       
                                <Tab eventKey="tab-4" title="โบนัส">
                                    <Row>
                                      <Col xs={12} className='games mb-2'>คุณไม่มีข้อความ</Col>
                                    </Row>
                                </Tab>
                            </Tabs>                          
                        </Row>
                    </Container>
                    </div>
                </div>
            </div>
        </div>
    </Modal>

  </>
  )
}