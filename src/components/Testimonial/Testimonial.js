import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ts1 from '../../images/testimonial/img-1.jpg'
import ts2 from '../../images/testimonial/img-2.jpg'
import ts3 from '../../images/testimonial/img-3.jpg'
import VideoModal from '../ModalVideo/VideoModal';
import SectionTitle from '../SectionTitle/SectionTitle';


const testimonial = [
    {
        id: '01',
        tImg: ts1,
        Des: "Working with FalconDev has been a transformative experience for our company. Their attention to detail and commitment to quality truly set them apart.",
        Title: 'Fatima El Amrani',
        Sub: "CEO, Innovatech",
    },
    {
        id: '02',
        tImg: ts2,
        Des: "The team at FalconDev exceeded our expectations! Their innovative solutions and timely support have greatly enhanced our project outcomes.",
        Title: 'Youssef Benkhalifa',
        Sub: "Project Manager, Atlas Solutions",
    },
    {
        id: '03',
        tImg: ts3,
        Des: "FalconDev has been instrumental in our growth. Their expertise and dedication to client success have made all the difference in our journey.",
        Title: 'Amina Zahir',
        Sub: "Co-Founder, Tech Solutions",
    }
]

const Testimonial = () => {

    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();


    return (
        <section className="wpo-testimonial-section section-padding">
            <div className="container">
                <div className="wpo-testimonial-wrap">
                    <div className="row">
                        <div className="col-lg-12">
                            <SectionTitle subTitle={'CLIENT TESTIMONIAL'} Title={'Best Word Our Clients'} />
                            <div className="wpo-testimonial-items">
                                <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)} dots={true} arrows={false}>
                                    {
                                        testimonial.map((tesmnl, tsm) => (
                                            <div className="wpo-testimonial-item" key={tsm}>
                                                <div className="wpo-testimonial-text">
                                                    <p>“{tesmnl.Des}”</p>
                                                    <div className="wpo-testimonial-text-btm">
                                                        <span>{tesmnl.Sub}</span>
                                                        <h3>{tesmnl.Title}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </Slider>
                            </div>
                        </div>
                        {/* <div className="col-lg-5 offset-lg-1">
                            <div className="testimonial-right-side">
                                <Slider
                                    asNavFor={nav1}
                                    ref={(slider2) => setNav2(slider2)}
                                    slidesToShow={1}
                                    fade={true}
                                    swipeToSlide={true}
                                    focusOnSelect={true}
                                >
                                    {
                                        testimonial.map((tesmnl, tsm) => (
                                            <div className="testimonial-img" key={tsm}>
                                                <img src={tesmnl.tImg} alt="" />
                                            </div>
                                        ))
                                    }

                                </Slider>
                                <div className="video-holder">
                                    <VideoModal />
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;