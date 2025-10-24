import { useState } from "react";
import Confirm from "./Confirm";

export default function ({ items, Confirm }) {
	const empty = (
		<>
			<p className="cart-title">Your Cart ({items.length})</p>
			<img
				src="./assets/images/illustration-empty-cart.svg"
				className="cart-empty"
			></img>
			<p className="cart-desc">Your added items will appear here</p>
		</>
	);
	const cartitem = (
		<div className="cart-container">
			<p className="cart-title">Your Cart({items.length})</p>
			{items.map((x, i) => {
				return (
					<div key={x.id}>
						<p className="cart-item-name">{x.name}</p>
						<div className="cart-wrapper">
							<div className="cart-desc">
								<p className="cart-amt">{`${x.amt}x`}</p>
								<p className="cart-price">{`@${x.price.toFixed(2)}`}</p>
								<p className="cart-total">{`$${(x.amt * x.price).toFixed(
									2
								)}`}</p>
							</div>

							<img
								src="./assets/images/icon-remove-item.svg"
								className="cart-img"
								onClick={() =>
									Confirm({ type: "delete", payload: { id: x.id } })
								}
							></img>
						</div>
						<hr></hr>
					</div>
				);
			})}
			<div className="cart-desc-total">
				<p>Order Total</p>
				<p className="cart-end-total">{`$${items
					.reduce((p, a) => {
						return p + a.price * a.amt;
					}, 0)
					.toFixed(2)}`}</p>
			</div>

			<div className="carbon">
				<img
					src=".\assets\images\icon-carbon-neutral.svg"
					className="cart-img"
				></img>
				<p>
					This is a <span>carbon-neutral</span> delivery
				</p>
			</div>
			<button
				className="cart-btn"
				onClick={() => Confirm({ type: "modal" })}
			>
				Confirm Order
			</button>
		</div>
	);
	return <div className="cart">{items.length > 0 ? cartitem : empty}</div>;
}
