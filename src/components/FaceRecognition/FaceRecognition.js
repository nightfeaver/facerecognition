import React from 'react';
import './faceRecognition.css'

const FaceRecognition = ({urlImage, box}) => {
	console.log(box.topRow);
	console.log(box.rightCol);
	console.log(box.bottomRow);
	console.log(box.leftCol);
	return (
		<div className='center ma'>
			<div className='absolute mt2'>
				<img id='inputimage' alt='predictimage' src={urlImage} width='500px' height='auto'/>
				<div className='bounding-box' style={{ top:box.topRow, right:box.rightCol, bottom:box.bottomRow, left:box.leftCol}}>
				</div>
			</div>
		</div>
		)
}

export default FaceRecognition;