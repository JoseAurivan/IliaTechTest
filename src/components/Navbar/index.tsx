"use client";
import Link from "../Link/index";
import { useEffect } from "react";

export default function Navbar(){

	useEffect(() => {
		require("bootstrap/dist/js/bootstrap.bundle.min.js");
	}, []);
	return(
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div  className="container-fluid">
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">           
					<ul className="navbar-nav">
						<li className='nav-item'><Link href='/'>Home</Link></li>
						<li className='nav-item'><Link href='/customer'>Customers</Link></li>
						<li className='nav-item'><Link href='/api'>Api</Link></li>
					</ul>
				</div>
			</div>
		</nav>
	);
}