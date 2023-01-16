import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import playIcon from '../../Assets/Svgs/play-btn.svg';
import styles from './Home.module.css'
import runningMen from '../../Assets/Svgs/Mask-Group-99.svg'
import ungliHath from '../../Assets/Images/Rectangle-HD.png'
import bahutSariUngliHath from '../../Assets/Images/Rectangle2-HD.png'
import eventCl from '../../Assets/Svgs/event.svg'
import Slider from "react-slick";
import "./../../../node_modules/slick-carousel/slick/slick.css";
import "./../../../node_modules/slick-carousel/slick/slick-theme.css";
import CarouselItem from '../../Components/CarouselItems/CarouselItem';
import NumberEasing from '../../Components/NumberTicker/NumberTicker';
import Accordian from "../../Components/Accordion/Accordion";
import { useRef } from 'react';


const EASING_LIST = [
    'cubicInOut',
    'cubicIn',
    'cubicOut',
    'expoInOut',
    'expoIn',
    'expoOut',
    'linear',
    'quadInOut',
    'quadIn',
    'quadOut',
    'quartInOut',
    'quartIn',
    'quartOut',
    'quintInOut',
    'quintIn',
    'quintOut'
];

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, position: "relative", background: "", left: '120rem', top: '-10rem' }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, position: "relative", background: "", left: '116rem'}}
            onClick={onClick}
        />
    );
}


export default function Home() {
    const [target, targetSet] = useState(0);
    const [target2, targetSet2] = useState(0);
    const [currentEasing, currentEasingSet] = useState('quintInOut');
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    const [settings, setSettings] = useState({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    })
    const [settings2, setSettings2] = useState({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow className={styles.nextArrow} />,
        prevArrow: <SamplePrevArrow className={styles.prevArrow} />
    })

    function onRandomizeTarget() {
        targetSet(123)
        targetSet2(12)
        for (let i = 0; i < EASING_LIST.length; i++) {
            currentEasingSet(EASING_LIST[i])
        }
    }

    useEffect(() => {
        onRandomizeTarget();
    }, []);


    useEffect(() => {
        let my = () => {
            if (windowSize.current[0] < 1400) {
                window.location.reload();
            }
            if (windowSize.current[0] < 800) {
                window.location.reload();
            }
        }
        window.addEventListener("resize",my );
    })

    useEffect(() => {
            if (windowSize.current[0] < 1400) {
                setSettings({
                    ...settings,
                    slidesToShow: 2,
                });
                setSettings2({
                    ...settings2,
                    slidesToShow: 2,    
                })
            }
            if (windowSize.current[0] < 800) {
                setSettings({
                    ...settings,
                    slidesToShow: 1,
                });
                setSettings2({
                    ...settings2,
                    slidesToShow: 1,
                })
            }
    },[])

    useEffect(()=>{
        function setEqualHeight() {
            console.log('chalgo');
            if (windowSize.current[0] < 1400) {
            setSettings({
                ...settings,
                slidesToShow: 2,
            });
            setSettings2({
                ...settings2,
                slidesToShow: 2,    
            })
        }
        if (windowSize.current[0] < 800) {
            setSettings({
                ...settings,
                slidesToShow: 1,
            });
            setSettings2({
                ...settings2,
                slidesToShow: 1,
            })
        }
        }
        
        window.addEventListener('resize', setEqualHeight);
    },[])

    return (
        <>
            <main style={{ paddingTop: '9rem', position:'relative' }}>
                <section>

                    <Carousel>

                        <div className={`display-f-row-sb ${styles.slideMain}`}>
                            <div className={`display-f-column-sb ${styles.slideAbout}`}>
                                <h1 className={styles.slideMainHeading}>Lorem ipsum</h1>
                                <p className={styles.slideMainPara}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd</p>
                                <button className={styles.slideMainBtn}>Know More <img src={playIcon} alt='' style={{ width: '13px', marginTop: '2px' }} /> </button>
                            </div>
                            <div className={styles.slideImg}>
                                <img src={runningMen} alt='' />
                            </div>
                        </div>
                        <div className={`display-f-row-sb ${styles.slideMain}`}>
                            <div className={`display-f-column-sb ${styles.slideAbout}`}>
                                <h1 className={styles.slideMainHeading}>Lorem ipsum</h1>
                                <p className={styles.slideMainPara}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd</p>
                                <button className={styles.slideMainBtn}>Know More <img src={playIcon} alt='' style={{ width: '13px', marginTop: '2px' }} /> </button>
                            </div>
                            <div className={styles.slideImg}>
                                <img src={ungliHath} alt='' />
                            </div>
                        </div>
                        <div className={`display-f-row-sb ${styles.slideMain}`}>
                            <div className={`display-f-column-sb ${styles.slideAbout}`}>
                                <h1 className={styles.slideMainHeading}>Lorem ipsum</h1>
                                <p className={styles.slideMainPara}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd</p>
                                <button className={styles.slideMainBtn}>Know More <img src={playIcon} alt='' style={{ width: '13px', marginTop: '2px' }} /> </button>
                            </div>
                            <div className={styles.slideImg}>
                                <img src={bahutSariUngliHath} alt='' />
                            </div>
                        </div>

                    </Carousel>
                </section>

                <section>

                    <div className={`display-f-row-sb ${styles.trupleBlocks}`}>

                        <div className={styles.lightBlueLevel}>
                            <div>Quick Links &gt;</div>
                            <div className={styles.fourWrapBlockHeading}>
                                <div>Lorem Ipsum</div>
                                <div className={styles.fourWrapBlock}>
                                    <button>Level 1</button>
                                    <button>Level 2</button>
                                    <button>Level 3</button>
                                    <button>Enquiry</button>
                                </div>
                            </div>
                        </div>

                        <div className={styles.darkBlueLevel}>
                        <div>Quick Links &gt;</div>
                            <div className={styles.fourWrapBlockHeading}>Lorem Ipsum</div>
                            <div className={styles.fourWrapBlock}>
                                <button>Lorem Ipsum</button>
                                <button>Lorem Ipsum</button>
                                <button>Lorem Ipsum</button>
                                <button>Lorem Ipsum</button>
                            </div>
                        </div>

                        <div className={styles.darkestBlueLevel}>
                            <div className={styles.fourWrapBlockHeading}>Lorem Ipsum</div>
                            <div className={styles.fourWrapBlock}>
                                <button>Lorem Ipsum</button>
                                <button>Lorem Ipsum</button>
                                <button>Lorem Ipsum</button>
                                <button>Lorem Ipsum</button>
                            </div>
                        </div>

                    </div>
                </section>

                <section>

                    <div className={`display-f-row-sb ${styles.examSection}`}>

                        <div className={`display-f-column-sb ${styles.upcomingExam}`}>
                            <h2>Upcoming Examinations</h2>
                            <p>Enquire about the examination & register for the exams</p>
                        </div>

                        <div className={`display-f-row-sb ${styles.levelExam}`}>
                            <div>
                                <img src={eventCl} alt='' />
                            </div>
                            <div>
                                <h3 className={styles.levelExamHeading}>02th October 2014</h3>
                                <div className={styles.levelExamdata}>Level 1 exam</div>
                            </div>
                        </div>

                        <div className={`display-f-row-sb ${styles.levelExam}`}>
                            <div>
                                <img src={eventCl} alt='' />
                            </div>
                            <div>
                                <h3 className={styles.levelExamHeading}>Nov-Dec 2016</h3>
                                <div className={styles.levelExamdata}>Level 2</div>
                                <div className={styles.levelExamdata}>Lorem Ipsum</div>
                                <div className={styles.levelExamdata}>Lorem Ipsum</div>
                            </div>
                        </div>

                        <div className={`display-f-row-sb ${styles.levelExam}`}>
                            <div>
                                <img src={eventCl} alt='' />
                            </div>
                            <div>
                                <h3 className={styles.levelExamHeading}>Ongoing this year</h3>
                                <div className={styles.levelExamdata}>Level 3 (Grad)</div>
                            </div>
                        </div>

                    </div>

                    <div className={styles.slider}>
                        <Slider {...settings}>
                            <CarouselItem />
                            <CarouselItem />
                            <CarouselItem />
                            <CarouselItem />
                        </Slider>
                    </div>
                </section>

                <section className={`display-f-row-sb ${styles.numberTickerSection}`}>

                    <div className={`display-f-column-sb ${styles.numberTickerBlock}`}>
                        <div className={styles.numberFirstHeading}>Lorem ipsum</div>
                        <div className={styles.number}>
                            <NumberEasing decimals={0} value={target} ease={currentEasing} speed={10000} />+
                        </div>
                        <div className={styles.numberSecondHeading}>Lorem ipsum</div>
                        <div className={styles.numberPara}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</div>
                    </div>
                    <div className={`display-f-column-sb ${styles.numberTickerBlock}`}>
                        <div className={styles.numberFirstHeading}>Lorem ipsum</div>
                        <div className={styles.number}>
                            <NumberEasing decimals={0} value={target2} ease={currentEasing} speed={15000} />+
                        </div>
                        <div className={styles.numberSecondHeading}>Lorem ipsum</div>
                        <div className={styles.numberPara}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</div>
                    </div>
                    <div className={`display-f-column-sb ${styles.numberTickerBlock}`}>
                        <div className={styles.numberFirstHeading}>Lorem ipsum</div>
                        <div className={styles.number}>
                            <NumberEasing decimals={0} value={target2} ease={currentEasing} speed={15000} />+
                        </div>
                        <div className={styles.numberSecondHeading}>Lorem ipsum</div>
                        <div className={styles.numberPara}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</div>
                    </div>
                    <div className={`display-f-column-sb ${styles.numberTickerBlock}`}>
                        <div className={styles.numberFirstHeading}>Lorem ipsum</div>
                        <div className={styles.number}>
                            <NumberEasing decimals={0} value={target} ease={currentEasing} speed={10000} />
                        </div>
                        <div className={styles.numberSecondHeading}>Lorem ipsum</div>
                        <div className={styles.numberPara}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</div>
                    </div>

                </section>

                <section className={styles.customCarousel}>
                    <Slider {...settings2}>
                        <div className={styles.customCarouselBlock}>
                            <h3>January 20, 2011</h3>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className={styles.customCarouselBlock}>
                            <h3>April 31, 2015</h3>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className={styles.customCarouselBlock}>
                            <h3>March 01, 2013</h3>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className={styles.customCarouselBlock}>
                            <h3>December 21, 2010</h3>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className={styles.customCarouselBlock}>
                            <h3>July 07, 2000</h3>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className={styles.customCarouselBlock}>
                            <h3>December 19, 2019</h3>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                    </Slider>
                </section>

                <section>
                    <Accordian />
                </section>
            </main>
        </>
    )
}