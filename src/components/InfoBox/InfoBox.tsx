import './InfoBox.scss'
import React from 'react'

type InfoBoxProps = {
  text: string
  children: React.ReactNode
}

const InfoBox = ({ text, children }: InfoBoxProps) => {
  return (
    <>
      <article className="InfoBox">
        <p>{text}</p>
        {children}
      </article>
    </>
  )
}

export default InfoBox

// InfoBox med DropDown = vi har en array med strängar. Visa upp dessa i
//  en DropDown som är ett barn till InfoBox. När man väljer ngt i DropDown
// så visas en strängen i InfoBox.
