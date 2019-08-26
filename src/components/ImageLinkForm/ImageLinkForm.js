import React from 'react';
import './imagelinkform.css'

const ImageLinkForm = ( {onInputChange, onButtonSubmit}) => {
	return (
		<div>
			<p className='f3'>{
				`Enter a link address to a jpeg image containing a face...`}
			</p>
			<div className='center'>
				<div className='form center br3 pa4 shadow-5'>
					<input className='f4 pa2 center w-70' type='text' onChange={onInputChange} />
					<button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
							onClick={onButtonSubmit} >Detect</button>
				</div>
			</div>
		</div>
		)
}

export default ImageLinkForm;