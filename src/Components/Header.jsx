import React,{ useState} from 'react'
import {Container, Row, Col, Tab, Tabs} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/Header.css';
import Modal from 'react-bootstrap/Modal';

import TopBar from '../Images/background/Topbar2.png'
import TopBarMb from '../Images/background/header--mb.png'
import HeaderBg from '../Images/background/header-bg.png'
import TopheadBg from '../Images/background/tophead.png'

import NotifiBg from '../Images/background/BG-icon/Notifi.png'
import BurgerMenuBg from '../Images/background/BG-icon/BurgerMenu.png'
import iconEvo from '../Images/background/BG-icon/iconEvo168.png'
import line from '../Images/background/BG-icon/icon-Line.png'
import iconLogin from '../Images/background/BG-icon/Button Login.png'
import iconRegiter from '../Images/background/BG-icon/Button Regiter.png'

import TabbarBg from '../Images/background/BG-icon/Tabbar.png'
import WalletBg from '../Images/background/BG-icon/wallet.png'
import DepositBg from '../Images/background/BG-icon/deposit.png'
import BottomtextBg from '../Images/background/BG-icon/bottomtext.png'
import WithdrawBg from '../Images/background/BG-icon/withdraw.png'
import PromoBg from '../Images/background/BG-icon/promo.png'

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


export default function Header() {
  const [show, setShow] = useState(false);
  const [showNofi, setShowNofi] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const handleCloseNofi = () => setShowNofi(false);
  const handleShowNofi = () => setShowNofi(true);
  return (
    <>
    <div className='header'>
      <div className='wrapper wrapper--Pca'>
      
      
      <div className='pc'>
        <div className='header--nav'>
        <img src={TopBar} className="header--bg" />
          <div className='left'>
              <img src={BurgerMenuBg} className="icon--burger--menu" onClick={handleShow} />
              <img src={NotifiBg} className="icon--nofi" onClick={handleShowNofi} />
              <img src={line} className="icon--line" />
              <img src={iconEvo} className="icon--evo" />
          </div>
          <div className='center'>
            <a href='https://game.evo168.com'><img src={WalletBg} className="Wallet--Bg"  /></a>
            <a href='https://game.evo168.com'><img src={DepositBg} className="Deposit--Bg"  /></a>
            <a href='https://game.evo168.com'><img src={BottomtextBg} className="header--text-center" /></a>
            <a href='https://game.evo168.com'><img src={WithdrawBg} className="Withdraw--Bg"  /></a>
            <a href='/Promotion'><img src={PromoBg} className="Promo--Bg"  /></a>
          </div>
          <div className='right'>
            <a href='https://game.evo168.com'><img src={iconRegiter}className="icon--Regiter"  /></a>
            <a href='https://game.evo168.com'><img src={iconLogin}className="icon--Login"  /></a>
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

