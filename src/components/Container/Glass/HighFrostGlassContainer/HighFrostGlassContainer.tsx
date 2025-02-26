import "./HighFrostGlassContainer.scss"
import React from 'react';

type FrostedGlassContainerProps = {
	content?: React.ReactNode
}

const HighFrostGlassContainer = ({ content }: FrostedGlassContainerProps) => {
	return (
		<>
			<div className="FrostedGlassContainer">
				{content}
			</div>
		</>
	)
}

export default HighFrostGlassContainer