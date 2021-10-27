import React from 'react';
import Head from 'next/head';

function Header() {
	return (
		<header className="font-custom flex w-full font-normal">
			<div className="text-xl"> Hi, I'm Anthony,</div>
			<div className="font-custom w-screen h-48 text-8xl font-bold p-2">
				Web Developer
			</div>
		</header>
	);
}

export default Header;
