import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Bottom from "./Bottom";

//create your first component
const Home = () => {
	let info = [
		{ image: "https://e00-especiales-marca.uecdn.es/motor/images/formula1/seo/seo-especial2023-mercedes.jpg", title: "Mercedes AMG F1 Petronas", description: "Equipo de origen alemán con sedes en Brackley y Brixworth, en Gran Bretaña." },
		{ image: "https://www.record.com.mx/sites/default/files/styles/v2-crop768x433/public/articulos/2024/02/13/0f.jpg?itok=evjyO65x", title: "Scuderia Ferrari", description: "Es la escudería más longeva y el equipo en activo más antiguo de la categoría, el más exitoso y el que ha conseguido más victorias" },
		{ image: "https://cdn-3.expansion.mx/dims4/default/27ae0f9/2147483647/strip/true/crop/1920x1080+0+0/resize/1200x675!/format/webp/quality/60/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F0b%2F44%2F06ca40234deda789753aefcdf799%2Fred-bull-auto-temporada-2024.jpeg", title: "Red Bull Racing", description: "Es un equipo de origen austríaco con sede en Milton Keynes, en Gran Bretaña. Es propiedad de la marca de bebidas homónima." },
		{ image: "https://www.f1aldia.com/images/articulos/39000/39676-n.jpg", title: "Aston Martin Aramco Cognizant Formula One Team", description: "Equipo de origen británico con sede en Silverstone, Gran Bretaña. Es propiedad de un consorcio de inversores encabezado por el multimillonario canadiense Lawrence Stroll." }]
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<div class="container-fluid px-5">
				<div className="row">
					{info.map((value, index) => {
						return <Card key={index} image={value.image} title={value.title} description={value.description} />
					})
					}
				</div>
			</div>
			<Bottom />
		</div>
	);
};

export default Home;
