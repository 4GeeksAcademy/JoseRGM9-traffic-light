import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [seleccionarColor, setSeleccionarColor] = useState("red");
	const [purpleActivo, setPurpleActivo] = useState(false);
	
	const botonColor = () => {
		if (!purpleActivo) {
			if (seleccionarColor === "red") {
				setSeleccionarColor("yellow");
			} else if (seleccionarColor === "yellow") {
				setSeleccionarColor("green");
			} else if (seleccionarColor === "green") {
				setSeleccionarColor("red");
			}
		} else {
			if (seleccionarColor === "red") {
				setSeleccionarColor("yellow");
			} else if (seleccionarColor === "yellow") {
				setSeleccionarColor("green");
			} else if (seleccionarColor === "green") {
				setSeleccionarColor("purple");
			} else if (seleccionarColor === "purple") {
				setSeleccionarColor("red");
			}
		}
	};

	const botonPurple = () => {
        setPurpleActivo(!purpleActivo);
    };

	return (
		<div>
		<div className="contenedorBarra"></div>
		<div className="container">
			<div className="traffic-light">
				<div onClick={() => setSeleccionarColor("red")} 
				className={"light red" + ((seleccionarColor === "red") ? " glow" : "")}> 			
				</div>
				<div onClick={() => setSeleccionarColor("yellow")} 
				className={"light yellow mt-3" + ((seleccionarColor === "yellow") ? " glow" : "")}></div>
				<div onClick={() => setSeleccionarColor("green")} 
				className={"light green mt-3" + ((seleccionarColor === "green") ? " glow" : "")}></div>
				{purpleActivo && <div className={"light purple mt-3" + ((seleccionarColor === "purple") ? " glow" : "")}></div>}
			</div>
			<div>
				<div className="contenedorBotones mt-4">
					<div className="contenedorBotonCambiarColor">
						<button onClick={botonColor} className="botonCambiarColor">Cambiar de color</button>
					</div>
					<div className="contenedorBotonPurpura mt-3"></div>
					<button onClick={botonPurple} className="botonAgregarPurpura">{purpleActivo ? "Quitar Color Purpura" : "Añadir Color Purpura"}</button>
				</div>
			</div>
		</div>
		</div>
	);
};

export default Home;
