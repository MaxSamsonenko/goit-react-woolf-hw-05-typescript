import React from "react";
import { Observer } from "./homework/1";
import RequestComponent from "./homework/2";
import { FormComponent } from "./homework/3";
import { ComponentApp } from "./homework/4";
import logo from "./logo.svg";
import "./App.css";

function App() {
	const handleContentEndVisible = () => {
		console.log("Reached the end of the content!");
	};
	return (
		<div className="App">
			<Observer onContentEndVisible={handleContentEndVisible}>
				<RequestComponent />
				<FormComponent />
				<ComponentApp />
			</Observer>
		</div>
	);
}

export default App;
