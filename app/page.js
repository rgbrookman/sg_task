"use client"

// React 
import { React, useEffect, useState } from 'react'; 

// Internal Components
import LensTool from '@/components/LensTool';


export default function Home() {

// Page State
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
    <main className="w-full h-screen">
      <section className="w-full h-4/5 ">
      <LensTool 
          sceneData={sceneData} 
          sceneOptions={sceneOptions}
          sceneKeys={sceneKeys}
         />
      </section>
    </main>
  )
}
