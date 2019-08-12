import React from 'react';
import './imagelinkform.css'

const ImageLinkForm = ( {onButtonChange, onSubmitButton}) => {
	return (
		<div>
			<p className='f3'>{
				`This magic brain will detect faces in pictures. Give it a go`}
			</p>
			<div className='center'>
				<div className='form center br3 pa4 shadow-5'>
					<input className='f4 pa2 center w-70' type='text' onChange={onButtonChange}/>
					<button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
							onClick={onSubmitButton}>Detect
					</button>
				</div>
			</div>
		</div>
		)
}

export default ImageLinkForm;