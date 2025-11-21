import { useEffect, useReducer, useState } from "react";
import "./App.css";
import Item from "./Components/Item";
import data from "./assets/data.json";
import Cart from "./Components/Cart";
import Confirm from "./Components/Confirm";

function App() {
	console.log(typeof import.meta.env.VITE_ROUTER);
	console.log(import.meta.env);
	const reduce = (prev, action) => {
		switch (action.type) {
			case "add": {
				const exist = prev.find((x) => x.id === action.payload.id);
				if (exist) {
					return prev.map((x) =>
						x.id === action.payload.id ? { ...x, amt: x.amt + 1 } : x
					);
				} else {
					return [...prev, action.payload];
				}
			}
			case "remove": {
				const exist = prev.find((x) => x.id === action.payload.id);
				return exist.amt > 1
					? prev.map((x) =>
							x.id === action.payload.id ? { ...x, amt: x.amt - 1 } : x
					  )
					: prev.filter((x) => x.id !== action.payload.id);
			}
			case "delete": {
				return prev.filter((x) => x.id !== action.payload.id);
			}
			case "modal": {
				setmod(!mod);
				return [...prev];
			}
		}
	};

	const [mod, setmod] = useState(false);
	const [state, dispatch] = useReducer(reduce, []);

	return (
		<>
			<div className="cont-tot">
				<div className="container">
					<p>Desserts</p>
					<div className="items">
						{data.map((j, i) => {
							return (
								<Item
									Image={j}
									key={i}
									index={i}
									state={{ st: state, ds: dispatch }}
								/>
							);
						})}
					</div>
				</div>
				<Cart
					items={state}
					Confirm={dispatch}
				/>
			</div>
			{mod ? <Confirm items={{ ds: dispatch, st: state }} /> : null}
		</>
	);
}

export default App;
