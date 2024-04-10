import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Bottom from "./Bottom";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<div class="container-fluid px-5">
				<div className="row">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<Bottom />
		</div>
	);
};

export default Home;
