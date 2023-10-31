"use client"

// React
import React, { useState, useEffect } from 'react'

// Internal Components
import OverlayCanvas from '@/components/OverlayCanvas'


export default function ProductPage() {

// Page State
const [overlayActive, setOverlayActive] = useState('overlay--inactive');

const handleOverlay = () => {

  /**
 * eventHandler for overlay that sets state as active or inactive 
 * No params 
 * Returns new state that will either hide or show the overly itself 
 */

  if (overlayActive === 'overlay--inactive') {
    setOverlayActive(overlayActive => 'overlay--active');
  } else {
    setOverlayActive(overlayActive => 'overlay--inactive');
  }
}

  return (
    <main className="h-full w-full flex flex-row">
      <section className="w-4/6 p-20 ">
        <img className="rounded-xl shadow-2xl" src="https://www.datocms-assets.com/45158/1655827671-road-naked.jpg" alt="dummy product image" />
      </section>
      <section className="w-2/6 flex flex-col items-start justify-start pt-20">
          <span className="mt-10 font-light"> All Sunglasses</span>
        <div className="mt-10">
          <div className="w-100 flex flex-col">
            <h1 className="text-4xl font-bold mb-4">Renegades</h1>
            <span>From £70</span>
        </div>
        </div>
        <button className="mt-10" onClick={handleOverlay}>Lens Guide</button>
      </section>
      <OverlayCanvas overlayState={overlayActive} handleOverlay={handleOverlay} />
    </main>
  )
}