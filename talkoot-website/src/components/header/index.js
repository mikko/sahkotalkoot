import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header className={style.header}>
		<h1>sahkotalkoot.info</h1>
		<nav>
			{/*
			<Link activeClassName={style.active} href="/">Milloin sauna päälle?</Link>
			<Link activeClassName={style.active} href="/spot">Kannattaisiko pörssisähkö?</Link>
			<Link activeClassName={style.active} href="/solar">Kannattaisiko aurinkopaneelit?</Link>
			*/}
		</nav>
	</header>
);

export default Header;
