import "./LowFrostGlassContainer.scss"
import React from 'react';

type GlossyGlassContainerProps = {
	content?: React.ReactNode
}

const LowFrostGlassContainer = ({ content }: GlossyGlassContainerProps) => {
	return (
		<>
			<div className="GlossyGlassContainer">
				{content}
			</div>
		</>
	)
}

export default LowFrostGlassContainer