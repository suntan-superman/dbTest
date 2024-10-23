import React, { useState } from "react";
import './App.css';
import JsonDisplay from './JsonDisplay';

function App() {
  const [data, setData] = useState([]);
 	const [isLoading, setIsLoading] = useState(false);

 	const buttonStyle =
			"border-2 border-green-500 text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white";

  const onGetData = async () => {
    setIsLoading(true);
				try {
					const response = await fetch(
						"https://workside-software.wl.r.appspot.com/api/project/",
					);
					const jsonData = await response.json();
					setIsLoading(false);
					window.alert(`Data Received: ${JSON.stringify(jsonData)}`);
					setData(jsonData);
				} catch (error) {
					setIsLoading(false);
					window.alert(`Error: ${error}`);
					console.error(error);
				}
  }

  return (
			<div className="App">
				{isLoading && (
					<div className="absolute top-[50%] left-[50%]">
						<div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900" />
					</div>
				)}
				<button type="button" className={buttonStyle} onClick={onGetData}>
					Get Data
				</button>
				{/* <JsonDisplay data={sampleData} /> */}
				<JsonDisplay data={data} />
			</div>
		);
}

export default App;
