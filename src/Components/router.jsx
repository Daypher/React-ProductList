import { createBrowserRouter, createHashRouter } from "react-router";
import App from "../App";

const res = [
	{
		path: "/",
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
];

export const route = import.meta.env.DEV
	? createBrowserRouter(res)
	: createBrowserRouter(res);
