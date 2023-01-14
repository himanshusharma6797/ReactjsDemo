import React, { useState } from 'react'
import fb from './../../Assets/Svgs/facebook.svg'
import linkIn from './../../Assets/Svgs/linkedin.svg'
import insta from './../../Assets/Svgs/instagram.svg'
import twit from './../../Assets/Svgs/twitter.svg'
import yt from './../../Assets/Svgs/youtube.svg'
import qua from './../../Assets/Svgs/quora.svg'
import location from './../../Assets/Svgs/location.svg'
import timer from './../../Assets/Svgs/timer.svg'
import train from './../../Assets/Svgs/train.svg'
import subs from './../../Assets/Svgs/subscribe.svg'
import './Footer.css'
import playIcon from '../../Assets/Svgs/play-btn.svg';

export default function Footer() {
    const [email, setEmail] = useState('')
    function onChangeHand(event) {
        setEmail(event.target.value)
    }
    function onSubmitHand(e) {
        e.preventDefault()
        console.log(email);
        setEmail('');
    }
    return (
        <footer>
            <div className='subscribe'>
                <div className='subscribe-form'>
                    <h2 className='subscribe-form-heading'>Subscribe</h2>
                    <div className='subscribe-form-para'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</div>

                    <form onSubmit={onSubmitHand} >
                        <div className='subscribe-form-main'>
                            <input
                                placeholder='Enter your Email Address'
                                type="email"
                                id="email"
                                name="email"
                                className='email'
                                onChange={onChangeHand}
                                value={email}
                                required />
                            <button className='subscribe-btn'>Subscribe Now <img src={playIcon} alt='' style={{ width: '13px', marginTop: '2px' }} /></button>
                        </div>
                    </form>

                </div>

                <div className='display-f-column-sb email-img'>
                    <div></div>
                    <img src={subs} alt='' style={{ width: '100%' }} />
                </div>
            </div>

            <div className='social-connect display-f-row-sb'>

                <div className='contact-us'>
                    <h2 className='footer-heading'>Contact us</h2>
                    <div className='list'>
                    <p className='footer-text'>Address: amet, consetetur sadipscing elitr, sed diam</p>
                    <p className='footer-text'>Email id: eirmod tempor invidunt ut labore et dolore</p>
                    <p className='footer-text'>Phone no: 123456789</p>
                    </div>
                </div>

                <div className='follow-us'>
                    <h2 className='footer-heading footer-heading-center'>Follow us</h2>
                    <ul className='display-f-row-sb all-u-l'>
                        <li><img src={fb} alt='' /></li>
                        <li><img src={linkIn} alt='' /></li>
                        <li><img src={insta} alt='' /></li>
                        <li><img src={twit} alt='' /></li>
                        <li><img src={yt} alt='' /></li>
                        <li><img src={qua} alt='' /></li>
                    </ul>
                </div>

                <div className='head-office'>
                    <h2 className='footer-heading'>Head Office</h2>
                    <ul className='all-u-l list'>
                        <li><img src={location} alt='' /><p className='footer-text'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p></li>
                        <li><img src={timer} alt='' /><p className='footer-text'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p></li>
                        <li><img src={timer} alt='' /><p className='footer-text'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p></li>
                        <li><img src={train} alt='' /><p className='footer-text'>Lorem ipsum asd asdsaweeq Lorem Ipsum</p></li>
                    </ul>
                </div>

            </div>

            <div className='copyright display-f-row-sb'>
                © 2021 All Rights Reserved. Privacy Policy
            </div>
        </footer>
    )
}
