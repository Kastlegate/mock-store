import '../style/Home.css';
import homeImage from '../img/home.jpg'
import truckOne from '../img/truckOne.jpg'
import truckTwo from '../img/truck2.jpg'

function Home(props) {

  const homeBackground = homeImage;
  return (
    <div id="Home" >
      <div id='homePageLayout'>
        <img id='truckOne' src={truckOne}></img>

        <div id='homeParagraphOne'>
          We're Hittin' the Road! Out and about and needing a Coffee and some Beignets? You're in luck!
          Now you can stop by our food truck and grab one of our world famous Beignets! Located at Triangle Park
          Monday through Friday, and the Lexington Farmer's Market on Saturdays.
        </div>

          <div id='homeParagraphTwo'>
            We're expanding out to bring the Bayou closer to you with Breezin' Bayou food truck!
            We have a variety of hot and cold coffees. We also have a selection of Cajun food if you're feelin' a little spicy!            
          </div>

        <img id='truckTwo' src={truckTwo}></img>

        

      </div>
    </div>
  );
}

export default Home;