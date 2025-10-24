export default function Confirm({ items }) {
	return (
		<div
			className="modal"
			onClick={(e) => {
				if (e.target === e.currentTarget) {
					items.ds({ type: "modal" });
				}
			}}
		>
			<div className="modal-content">
				{items.st.map((x, i) => {
					return (
						<div
							key={i}
							className="modal-wrapper"
						>
							<img
								src={x.pic}
								className="thumb"
							></img>
							<div>
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
											items.ds({ type: "delete", payload: { id: x.id } })
										}
									></img>
								</div>
								<hr></hr>
							</div>
						</div>
					);
				})}
				<div className="cart-desc-total">
					<p>Order Total</p>
					<p className="cart-end-total">{`$${items.st
						.reduce((p, a) => {
							return p + a.price * a.amt;
						}, 0)
						.toFixed(2)}`}</p>
				</div>
			</div>
		</div>
	);
}
