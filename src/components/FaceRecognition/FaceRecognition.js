import React from 'react';
import './faceRecognition.css'

const FaceRecognition = ({urlImage}) => {
	return (
		<div className='center ma'>
			<div className='absolute mt2'>
				<img id='inputimage' alt='predictimage' src={urlImage} width='500px' height='auto'/>
			</div>
		</div>
		)
}

export default FaceRecognition;