import React from 'react';
const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<React.Fragment>
			<footer>
				<p>designed & developed by "ankit"</p>
				<p>Copyright ⓒ {currentYear}</p>
			</footer>
		</React.Fragment>
	);
};
export default Footer;