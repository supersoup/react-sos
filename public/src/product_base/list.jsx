import React from 'react';

import Condition from './Condition.jsx';
import Result from './Result.jsx';

export default class ProductBase extends React.Component {
	render() {
		return (
			<div>
				<Condition/>
				<Result/>
			</div>
		);
	}
};