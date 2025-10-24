import { createBrowserRouter } from "react-router";
import App from "../App";

export const route = createBrowserRouter([
	{
		index: true,
		element: <App />,
	},
	{
		path: "prueba",
		element: <App />,
	},
	{
		path: "*",
		element: <h1>PAGINA NO ENCONTRADA</h1>,
	},
]);
