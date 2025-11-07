import { Link } from 'react-router-dom'
import { useState } from 'react'
export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div id="nav">
 			<Link to='/oxafrica' id="logo"></Link>
 			<div id="mini" onClick={toggleMenu}>
                {/* <!-- onClick="getElementById('nav_grid').style.display = 'block'"--> */}
					<span>
					<svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 0 24 24" width="35px" fill="0000"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
					</span>
			</div>
 			<div id="nav_grid" className={isMenuOpen ? 'open' : ''}>
 				<div>
 					<ul>
 					<li className="big_nav_link"><Link to='/oxafrica'>Home</Link></li> 
 					<li className="big_nav_link">Products
						<div className="dropdown">
				            <span id ="prod"><Link to='/'>All Products</Link>
				            	<div className="subproducts">
								    <Link to='/'>All Products (A - Z)</Link>
								    {/* <!--<a href=''><br/> </a>
								    <a href=''><br/> </a>--> */}
								    <Link to="#"> Accessories, Attachments & Implements</Link>
								    <Link to="#">Application Equipment</Link>
								    <Link to="#">Backhoes</Link>
								    <Link to="#">Cutters & Shredders</Link>
								    <Link to="#">Engines</Link>
								    <Link to="#">Utility Vehicles</Link>
								    <Link to="#">Hay & Forage</Link>
								    <Link to="#">Harvesting</Link>
								    <Link to="#">Home & Workshop Products</Link>
								    <Link to="#">Loaders</Link>
								    <Link to="#">Mowers</Link>
								    <Link to="#">Planting Equipment</Link>
								    <Link to="#">AGRO AI</Link>
								    <Link to="#">Scraper Systems</Link>
								    <Link to="#">Seeding Equipment</Link>
								    <Link to="#">Sprayers</Link>
								    <Link to="#">Tillage</Link>
								</div>
							</span>
				            <br/>
				            <Link to="#">Lawns and Gardens</Link>
				            <br/>
				            <Link to="#">Electronics</Link><br/>
				            <Link to="#">Construction</Link><br/>
				            <Link to="#">  Crop Care</Link><br/>
				            <Link to="#">Engines</Link><br/>
				            <Link to="#">Rental Sales</Link><br/>
				            <Link to="#">Attachments</Link><br/> 
				            <Link to="#">Used Equipment</Link>
				        </div>
 					</li>
        			<li className="big_nav_link">Finance
        				<div className="dropdown">
					        <Link to="#">OX Finance</Link><br/>
					        <Link to="#">Special Discount Finance</Link>
				        </div>
    				</li>
    				<li className="big_nav_link">Parts and Services
    					 <div className="dropdown">
					        <span><Link to="#">Parts</Link>
						        <div className="">
						            <Link to="#">Maintenance parts</Link>
						            <Link to="#">Engines</Link>
						            <Link to="#">Construction</Link>
						            <Link to="#">Tractors</Link>
						            <Link to="#">Combine Harvestors</Link>
						            <Link to="#">Sprayers</Link>
						            <Link to="#">Tillage</Link>
						            <Link to="#">Discs</Link>
						        </div>
					    	</span>
					            <br/>
					        <span>
					        	<Link to="#">Manuals</Link>
						        <div className="">
						            <Link to="#">Operator's Manual for All Tractors</Link>
						            <Link to="#">Operator's Manual for Combine Harvestprs</Link>
						            <Link to="#">Other Manuals</Link>
						        </div>
					    	</span>
					        <br/>
					        <span>
					        	<Link to="#">Training</Link>
						        <div className="">
						            <Link to="#">Training and Safety Videos</Link>
						            <Link to="#">Reference Guides</Link>
						            <Link to="#">OX Customer Service</Link>
						        </div>
					        </span>
					        <br/>
					        <Link to="#">Warranty</Link>
					        <br/>
					        <span>
					        	<Link to="#">Servicing</Link>
						        <div className="">
						            <Link to="#">Self Repair</Link>
						            <Link to="#">Servicing Packages</Link>
						        </div>
					        </span>
					        <br/>
					        <span>
					        	<Link to="#">Safety</Link>
						        <div className="">
						            <Link to="#">Operator Insurance</Link>
						            <Link to="#">Protective Gears</Link>
						        </div>
						     </span>
					        <br/>
					        <span>
					        	<Link to="#">Protection Plan</Link>
						        <div className="">
						            <Link to="#">Damage Insurance</Link>
						        </div>
						    </span>
					        <br/>
					         <Link to="#">ox Support</Link>
					        </div>
    				</li>
    				<li className="big_nav_link">Tools and Resources
    					<div className="dropdown">
				            <Link to="#">Tools</Link><br/>
				            <Link to="#">Equipment</Link><br/>
				            <Link to="#">Connect with Ox</Link><br/>
				            <Link to="#">Brochures</Link><br/>
				            <Link to="#">The ox Edge</Link>
				        </div>
    				</li>
        		</ul>
        		</div>
 			</div>
 		</div>
    )
}