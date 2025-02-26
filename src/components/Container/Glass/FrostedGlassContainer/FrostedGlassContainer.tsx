import "./FrostedGlassContainer.scss"
import React from 'react';

type FrostedGlassContainerProps = {
	content?: React.ReactNode
}

const FrostedGlassContainer = ({ content }: FrostedGlassContainerProps) => {
	return (
		<>
			<div className="FrostedGlassContainer">
				{content}
			</div>
		</>
	)
}

export default FrostedGlassContainer