import { useEffect, useState } from "react";

export default function ({ Image, index, state }) {
	const upd = () => {
		state.ds({
			type: "add",
			payload: {
				id: index,
				name: Image.name,
				price: Image.price,
				amt: 1,
				pic: Image.image.thumbnail,
			},
		});
		// status.addCart({ id: index, name: Image.name, price: Image.price, amt: 1 });
	};
	const addTocart = (
		<button
			className="item-btn"
			onClick={upd}
		>
			<img
				src="./assets/images/icon-add-to-cart.svg"
				className="cart-ic"
			/>
			<p>Add to Cart</p>
		</button>
	);
	const added = (
		<button className="item-btn item-btn-active">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 10 2"
				onClick={() => {
					state.ds({ type: "remove", payload: { id: index } });
					// status.removeCart(index);
				}}
			>
				<path
					className="svg"
					fill="#fff"
					d="M0 .375h10v1.25H0V.375Z"
				/>
			</svg>
			{state.st.find((x) => x.id === index)?.amt}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 10 10"
				onClick={upd}
			>
				<path
					className="svg"
					fill="#fff"
					d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
				/>
			</svg>
		</button>
	);
	return (
		<div className="item">
			<div className="item-wrapper">
				<img
					src={Image.image.desktop}
					className="item-img"
				></img>
				{state.st.find((x) => x.id === index) ? added : addTocart}
			</div>
			<div className="item-description">
				<p className="item-category">{Image.category}</p>
				<p className="item-name">{Image.name}</p>
				<p className="item-price">{`$${Image.price.toFixed(2)}`}</p>
			</div>
		</div>
	);
}
