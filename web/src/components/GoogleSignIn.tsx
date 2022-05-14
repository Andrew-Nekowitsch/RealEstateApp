import React, { useState } from 'react';

function GoogleSignIn() {
	let [loaded, setLoaded] = useState(false);

	React.useEffect(() => {
		if (typeof window !== 'undefined') {
			getGSI();
		}
	}, []);

	const getGSI = () => {
		if (document) {
			setLoaded(true);
			var script = document.createElement('script');
			script.src = 'https://accounts.google.com/gsi/client';
			script.async = true;
			script.defer = true;
			script.addEventListener('load', function (event) {
				console.log('script loaded :)');
				setLoaded(true);
			});
			document.getElementsByTagName('head')[0].appendChild(script);
		}
	};
	const onLoaded = () => {
		return (
			<>
				<div
					id='g_id_onload'
					data-client_id={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
					data-login_uri='http://localhost:3000/'
					data-auto_prompt='true'></div>
				<div
					className='g_id_signin'
					data-type='standard'
					data-size='large'
					data-theme='outline'
					data-text='sign_in_with'
					data-shape='rectangular'
					data-logo_alignment='left'></div>
			</>
		);
	};

	return <>{loaded ? onLoaded() : null}</>;
}

export default GoogleSignIn;
