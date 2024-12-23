import React, {Fragment} from 'react';
import Navbar3 from '../../components/Navbar3/Navbar3';
import PageTitle from '../../components/pagetitle/PageTitle'
import ServiceSectionS3 from '../../components/ServiceSectionS3/ServiceSectionS3';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Subscribe from '../../components/Subscribe/Subscribe';
import Footer from '../../components/footer/Footer';

const ServicePage =() => {
    return(
        <Fragment>
            <Navbar3/>
            <PageTitle pageTitle={'Service'} pagesub={'Service'}/> 
            <ServiceSectionS3/>
            {/* <Subscribe sbClass={'wpo-subscribe-section-s2 pt-0'}/> */}
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ServicePage;

