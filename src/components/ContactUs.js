import '../style/ContactUs.css';
import customer from '../img/customer.jpg';
import frenchquater from '../img/frenchquater.jpg';

function ContactUs() {
  return (
    <div id='contactUs'>
        <img className='contactImage'  src={customer}></img>
        <div className='contactText'>
            Founded in 1987 by Kendal Bonat, she brought her passion for New Orleans culture to Kentucky.            
        </div>

        <div id='contactContainer'>
            <div id='contactUsBanner'>Contact Us</div>
            <div id='contactInfo'>
                <div id='phone'>Phone: +5-555-867-5309</div>       
                <div>Email: Kastlegate@CafeBonat.com</div>
                <div id='locationContainer'>
                    <div>Location</div>
                    <div id='location'>
                    <div>Mon-Fri - Triangle Park</div>
                    <div>Sat  - Lexington Farmer's Market</div>
                    </div>

                </div>
            </div>
        </div>
        <img className='contactImage' src={frenchquater}></img>
    </div>
  );
}

export default ContactUs;