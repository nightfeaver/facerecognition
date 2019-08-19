import React from 'react';

const Rank = ({name, entries}) => { 
	return (
		<div>
			<div className='white f4 center'>
			{`${name}, your current rank is....`}
			</div>
			<div className='white f2 center'>
			{entries}
			</div>
		</div>
	);
}

export default Rank;