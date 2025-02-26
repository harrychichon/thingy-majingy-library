import "./MidFrostGlassContainer.scss"
import React from 'react';

type MidFrostGlassContainerProps = {
	content?: React.ReactNode
}

const Asd = ({ content }: MidFrostGlassContainerProps) => {
	return (
		<>
			<div className="MidFrostGlassContainer">
				{content}
			</div>
		</>
	)
}

export default Asd