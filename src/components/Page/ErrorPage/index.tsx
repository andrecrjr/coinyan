import React from 'react';

export default function ErrorPage() {
	return <p>Problem with High Rate {process.env.NEXT_CURRENT_COIN_API} API</p>;
}
