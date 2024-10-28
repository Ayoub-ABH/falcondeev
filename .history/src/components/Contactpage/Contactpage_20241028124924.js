import React from 'react';
import ContactForm from '../ContactFrom/ContactForm'


const Contactpage = () => {

    return(
        <section className="wpo-contact-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-10 offset-lg-1">
                        <div className="office-info">
                            <div className="row">
                               
                                <div className="col col-xl-6 col-lg-12 col-md-12 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-email"></i>
                                            </div>
                                        </div>
                                        
                                        <div className="office-info-text">
                                                <h2>Email Us</h2>
                                                <p>
                                                    <a href="mailto:falcondevvofficial@gmail.com">falcondevvofficial@gmail.com</a>
                                                </p>
                                                <p>
                                                    <a href="mailto:njimateaicha@gmail.com">njimateaicha@gmail.com</a>
                                                </p>
                                            </div>

                                    </div>
                                </div> 
                                <div className="col col-xl-6 col-lg-12 col-md-12 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-phone-call"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                                <h2>Call Now</h2>
                                                <p>
                                                    <a href="tel:+212621209024">+212 621 30 90 24</a>
                                                </p>
                                                <p>
                                                    <a href="tel:+212601927552">+212 601 92 75 52</a>
                                                </p>
                                            </div>

                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div className="wpo-contact-title">
                            <h2>Have Any Question?</h2>
                            <p>It is a long established fact that a reader will be distracted
                                content of a page when looking.</p>
                        </div>
                        
                        {/* <div className="wpo-contact-form-area">
                            <ContactForm/>
                        </div> */}
                    </div>                
                </div>
            </div> 
            {/* <section className="wpo-contact-map-section">
                <div className="wpo-contact-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1547528325671"></iframe>
                </div>
            </section> */}
        </section>
     )
        
}

export default Contactpage;
