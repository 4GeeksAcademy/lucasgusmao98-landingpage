import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar/> 
			<Jumbotron/>
			<div className= "d-flex justify-content-center">
				<Card/>
				<Card title={"Cities"}/>
				<Card img={"https://img.bleacherreport.net/img/images/photos/002/975/442/hi-res-6590d5d897933931840ca893be28ab4f_crop_north.jpg?1405281115&w=3072&h=2048"}/>
				<Card/>
			
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
