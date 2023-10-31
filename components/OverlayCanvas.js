"use client"

import { data } from 'autoprefixer';
//React
import React, { useState, useEffect } from 'react';
import LensTool from './LensTool';

export default function OverlayCanvas( props ) {

// Component State

// Component Data
    const [sceneData, setSceneData] = useState(null);
    const [sceneOptions, setSceneOptions] = useState([]);
    const [sceneKeys, setSceneKeys] = useState([]);

    useEffect(() => {

    /**
     * Returns data describing the various lens scenes and the impact this make to the wearer
     * Whilst all the calls are the same, I have divided the key scene information into 3 states
     * SceneData - used in LensTool to call images themselves
     * SceneOptions - used to select the appropriate scene
     * SceneKeys - used to ensure the right array of keys can be selected and chosen by the user 
     */

      const fetchData = async () => {
        try {
          const response = await fetch('https://gist.githubusercontent.com/robwatkiss/09f2461e02d372747dad5fe56ff2251f/raw/b942d9ba21e10889a6cfce639c1a12f6bb2bfa0e/Senior%2520Frontend%2520Developer%2520Task%2520-%2520Sample%2520Lens%2520Guide%2520Data.json');
          const data = await response.json();
          setSceneData(data);
          setSceneOptions(data);
          setSceneKeys(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }

      };
      fetchData();
    }, []);
  

  return (
    <div className={`${props.overlayState} h-screen w-screen bg-slate-900 bg-opacity-90 fixed top-0 left-0 `}>
         <div className={`h-screen w-screen fixed top-0 left-0 z-10`}>
        <div className="h-12 w-full flex flex-row justify-end items-end">
            <button className="text-white text-lg mr-5 mb-3 underline underline-offset-8 decoration-solid decoration-white hover:decoration-gray-600" onClick={props.handleOverlay}>Back</button>
        </div>
        <section className="h-full flex flex-row justify-center align-middle z-20">
            <div className="w-full h-full flex flex-row px-4 pb-20">
            <LensTool 
                    sceneData={sceneData} 
                    sceneOptions={sceneOptions}
                    sceneKeys={sceneKeys}
                    />
            </div>
        </section>
     
        </div>
    </div>
  )
}
