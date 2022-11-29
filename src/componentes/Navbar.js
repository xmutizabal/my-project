import React from "react";



export default function Navbar() {
	return (
		<nav className='nav'>
			<div className='bg-tema-400 mx-auto max-w-7x1 px-2 sm:px-6 lg:px-8'>
				<div className='flex flex-center h-25 items-center'>
					<img className='logo'
					src={require('../imagenes/logo.png')}
					alt='Logo'/>
					<div className="hidden sm:ml-6 sm:block">
						<div className="flex space-x-4">
							<ul className="flex flew-wrap">
								<LinkPersonalizable href='/inicio'>Inicio</LinkPersonalizable>
								<LinkPersonalizable href='/ranking'>Ranking</LinkPersonalizable>
								<LinkPersonalizable href='/calendario'>Calendario</LinkPersonalizable>
								<LinkPersonalizable href='/auspiciadores'>Auspiciadores</LinkPersonalizable>
								<LinkPersonalizable href='/inscribirse'>Inscribirse</LinkPersonalizable>
							</ul>
						</div>					
					</div>
				</div>
			</div>
		</nav>
	);
}

function LinkPersonalizable ({href, children, ...props}){
	const path = window.location.pathname
	return (
		<li className={path === href ? 'active':''}>
			<a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href={href} {...props}>{children}</a>
		</li>
	)
}