"use client"
import LensTool from '@/components/LensTool';
import { react, useEffect, useState } from 'react'; 

export default function Home() {
  const [sceneData, setSceneData] = useState(null);
  const [sceneOptions, setSceneOptions] = useState([]);
  const [sceneKeys, setSceneKeys] = useState([]);
  const [productData, setProductData] = useState('');

  useEffect(() => {
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
    <main className="w-full h-screen bg-green-300">
      <section className="w-full h-4/5 bg-purple-300">
      <LensTool 
                    sceneData={sceneData} 
                    sceneOptions={sceneOptions}
                    sceneKeys={sceneKeys}
                    />
      </section>
    </main>
  )
}
