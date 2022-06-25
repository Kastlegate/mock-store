import '../style/ContactUs.css';
import customer from '../img/customer.jpg';
import frenchquater from '../img/frenchquater.jpg';

function ContactUs() {
  return (
    <div id='contact'>
        <div className='contactPageLayout'>
        <div className='block'>
            <img className='pic' src={frenchquater}></img>
            
            <div className='paragraph'>
                Founded in 1987 by Kendal Bonat, she brought her passion for New Orleans culture to Kentucky.            
            </div>
        </div> 
        <div className='blockTwo'>
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
        <img className='pic'  src={customer} ></img>
        </div>      
    </div>
    </div>
  );
}

export default ContactUs;