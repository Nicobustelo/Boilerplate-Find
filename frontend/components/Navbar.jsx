import React from "react";
import PropTypes from "prop-types";

const routes = [
	{ name: "Home", href: "#", isActive: true },
];

const NavMenu = ({ routes }) => (
	<>
		{routes.map((route, i) => (
			<li key={i}>
				<a
					className={`px-4 ${
						route.isActive ? "opacity-100" : "opacity-50 hover:opacity-100"
					}`}
					href={route.href}
				>
					{route.name}
				</a>
			</li>
		))}
	</>
);

NavMenu.propTypes = {
	routes: PropTypes.array.isRequired,
};

const AuthNavMenu = () => (
	<>
		<li>
			<button className="border border-blue-600 text-white hover:bg-blue-600 hover:text-white py-1.5 px-4 rounded">
				Leaderboards
			</button>
		</li>
		<li>
			<button className="border border-blue-600 bg-blue-600 text-white hover:bg-opacity-90 py-1.5 px-4 rounded">
				Search
			</button>
		</li>
	</>
);

const NavigationBar = () => {
	return (
		<div className="ezy__nav2 light py-6 bg-black dark:bg-[#0b1727] text-white dark:text-white relative">
			<nav>
				<div className="container px-4">
					<div className="flex justify-between items-center">
						<a className="font-black text-3xl" href="#!">
							{" "}
							Boilerplate Find{" "}
						</a>
						<button
							className="block lg:hidden cursor-pointer h-10 z-20"
							type="button"
							id="hamburger"
						>
							<div className="h-0.5 w-7 bg-white dark:bg-black -translate-y-2"></div>
							<div className="h-0.5 w-7 bg-white dark:bg-black"></div>
							<div className="h-0.5 w-7 bg-white dark:bg-black translate-y-2"></div>
						</button>
						<ul
							className="flex flex-col lg:flex-row justify-center items-center text-3xl gap-6 lg:text-base lg:gap-2 absolute h-screen w-screen top-0 left-full lg:left-0 lg:relative lg:h-auto lg:w-auto bg-white dark:bg-[#0b1727] lg:bg-transparent"
							id="navbar"
						>
							<NavMenu routes={routes} />
							<AuthNavMenu />
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavigationBar;