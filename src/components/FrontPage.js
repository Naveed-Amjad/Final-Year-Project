import './../components/FrontPage.css';
import mountainsgreen from './../images/mountainsgreen.jpeg';
import chinaborder from './../images/chinaborder.jpeg';
import faisalmosque from './../images/faisalmosque.jpeg';
import brushstroke from './../images/brushstroke.png';
import orangebrushstroke from './../images/orangebrushstroke.png';
import arrow from './../images/arrow.png';

const FrontPage = () => {
    return(

        <div className='frontPage'>
            <div className='orangebrushstroke'>
                <div className='orangebrushstroke'><img src={orangebrushstroke} alt='orangebrushstroke'/></div>
            </div>
            <div className='textpart'>
                <h1 >Travel to any </h1>
                <h1 >Corner of</h1>
                <h1 >Pakistan</h1>
                <p>A team of devoted and experienced tourism professionals will <br></br> provide you with the best advice and tips.</p>
                <div className='ExploreMore1'>
                    <ul>
                        <li><div className='ExploreMoreChilds'>Location</div></li>
                        <div className='arrow'><img src={arrow} alt='arrow'/></div>
                        <li><div className='ExploreMoreChilds'>Date</div></li>
                        <div className='arrow1'><img src={arrow} alt='arrow1'/></div>
                        <li><div className='ExploreMoreChilds'>People</div></li>
                        <div className='arrow2'><img src={arrow} alt='arrow2'/></div>
                        <li><div className='ExploreMoreLastChild'>Explore More</div></li>
                    </ul>
                </div>
                <div className='ExploreMore2'>
                    <ul id="horizontal-list">
                        <li><div className='ExploreMoreChilds1'>Enter your destination</div></li>
                        <li><div className='ExploreMoreChilds1'>When it will start?</div></li>
                        <li><div className='ExploreMoreChilds1'>How many people?</div></li>
                    </ul>
                </div>
                <div className='popularSearches'><span><b>Popular Search:</b> </span></div>
                <div className='popularSearchesNames'><span>Lahore, Murree, Kaghan, Naran, Kashmir, Malam Jabba</span></div>
            </div>
            <div className='brushstroke'>
                <div className='brushstroke'><img src={brushstroke} alt='brushstroke' /></div>
            </div>
            <div className='imagespart'>
                <div className='maountainsGreen'><img src={mountainsgreen} alt='mountainsGreen' /></div>
                <div className='chinaborder'><img src={chinaborder} alt='chinaborder' /></div>
                <div className='faisalmosque'> <img src={faisalmosque} alt='faisalmosque' /> </div>
            </div>
            
        </div>
    )
}

export default FrontPage;