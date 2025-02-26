import "./GlossyGlassContainer.scss"
import React from 'react';

type GlossyGlassContainerProps = {
	content?: React.ReactNode
}

const GlossyGlassContainer = ({ content }: GlossyGlassContainerProps) => {
	return (
		<>
			<div className="GlossyGlassContainer">
				{content}
			</div>
		</>
	)
}

export default GlossyGlassContainer