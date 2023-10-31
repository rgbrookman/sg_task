"use client"
//React
import React, { useState, useEffect } from 'react'

function LensTool(props) {
// Component State

// Image & Select Image State
const [imageOne, setImageOne] = useState('https://www.datocms-assets.com/45158/1655827671-road-naked.jpg');
const [imageTwo, setImageTwo] = useState('');
const [sceneIndex, setSceneIndex] = useState(0);
const [sceneKeys, setSceneKeys] = useState([]);
const [sceneOptions, setSceneOptions] = useState([]);
const [selected, setSelected] = useState('rgle_8blue');
const [selectArr, setSelectArr] = useState([]);
const [currentWindowState, setCurrentWindowState] = useState('');


const handlePictureChange = () => {
    if (props.sceneData) {
        if( sceneIndex === 0 ) {
            setImageOne(imageOne => props.sceneData[0].nakedEyeImage.responsiveImage.src);
        } else if (sceneIndex === 1) {
            setImageOne(imageOne => props.sceneData && props.sceneData[1].nakedEyeImage.responsiveImage.src);
        } else if (sceneIndex === 2) {
            setImageOne(imageOne => props.sceneData && props.sceneData[2].nakedEyeImage.responsiveImage.src);
        }      
    }
};

const handleOptionsChange = () => {

    function filterObjectByKey(obj, key) {
        return obj[key];
      }

      let filteredValue = {};

if (props.sceneData) {
  

    if( sceneIndex === 0 ) {

        filteredValue = props.sceneData && filterObjectByKey(props.sceneOptions[0].sceneImages, selected);
        setImageTwo(filteredValue.image.responsiveImage.src); 

    } else if (sceneIndex === 1) {

        filteredValue = props.sceneData && filterObjectByKey(props.sceneOptions[1].sceneImages, selected);
        setImageTwo(filteredValue.image.responsiveImage.src); 


    } else if (sceneIndex === 2) {

        filteredValue = props.sceneData && filterObjectByKey(props.sceneOptions[2].sceneImages, selected);
        setImageTwo(filteredValue.image.responsiveImage.src); 

    }   

 
}

};

const handleKeysChange = () => {

    let selectableKeys = [];
  
if (props.sceneData) {
  
    if( sceneIndex === 0 ) {

        selectableKeys = Object.keys(props.sceneKeys[0].sceneImages);
        setSelectArr(selectableKeys);

    } else if (sceneIndex === 1) {

        selectableKeys = Object.keys(props.sceneKeys[1].sceneImages);
        setSelectArr(selectableKeys);


    } else if (sceneIndex === 2) {

        selectableKeys = Object.keys(props.sceneKeys[2].sceneImages);
        setSelectArr(selectableKeys);

    }   

 
}

};




useEffect(()=>{
    handlePictureChange();
    handleOptionsChange(); 
});

useEffect(() => {
    handleKeysChange();
  }, [sceneIndex, props.sceneKeys]);

// Drag State
const [dragging, setDragging] = useState(false);
  
const [cropExtent, setCropExtent] = useState(50);
const [isCropping, setIsCropping] = useState(false);
const [buttonPos, setButtonPos] = useState(50);


  const handleButtonClick = () => {
    setIsCropping(true);
  };

  const handleMouseUp = () => {
    setIsCropping(false);
  };

  const handleMouseMove = (e) => {
    if (isCropping) {
      const container = document.getElementById('imageContainer');
      const containerWidth = container.offsetWidth;
      const newCropExtent = (e.clientX - container.offsetLeft) / containerWidth * 100;
      setCropExtent(Math.max(0, Math.min(newCropExtent, 100)));
      setButtonPos(Math.max(0, Math.min(newCropExtent, 100)));
    }
  };

  useEffect(() => {
    const currentWindow = window.location.href;
    setCurrentWindowState(currentWindow);
  }, []);

  return (
    <>
{ currentWindowState.endsWith('/product') ? 
       <div 
       className="w-2/6 bg-white flex justify-center items-center rounded-l-lg">
        <select className="bg-slate-200 rounded-sm px-4 py-2 " onChange={(e)=>{setSelected(e.target.value)}}>
            { props.sceneData && selectArr.map((option, index) => (
            <option key={index} value={option}>
                {option}
            </option>
            ))}
        </select>
        </div>
        :
        <></>
}
        <div className={ currentWindowState.endsWith('/product') ? "w-4/6" : "w-full h-full"}>
            <div className="w-full h-full relative " id="imageContainer" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}        onMouseDown={handleButtonClick}>
                <img className="absolute w-full h-full object-cover rounded-r-lg" src={imageTwo} alt="lens eye image" />
            <img style={{ clipPath: `inset(0% ${100 - cropExtent}% 0% 0%)` }} className="absolute w-full h-full object-cover rounded-r-lg" src={imageOne} alt="naked eye image" />
            <button style={{left: `${buttonPos-50}%`}} className={`absolute w-full h-full`}>
                <span className="rounded-full p-8 bg-white text-slate-800 font-semibold hover:cursor-grab visited:cursor-grabbing">{ currentWindowState.endsWith('/product') ? "Grab": "Visit the store to explore our revolutionary lenses"}</span>
            </button>
            { currentWindowState.endsWith('/product') ? 
      <div className="absolute bottom-14 w-full h-10 flex flex-row justify-between items-end">
        <span className="text-white font-semibold ml-5">Naked Eye</span>
        
        <div className="w-auto flex flex-row bg-slate-200 rounded-sm">
            <img onClick={()=>{setSceneIndex(0); }} className="w-14 h-14 pl-1 py-1 rounded-lg hover:opacity-50" src={'https://www.datocms-assets.com/45158/1655827671-road-naked.jpg'} alt="naked eye scene one" />
            <img onClick={()=>{setSceneIndex(1); }} className="w-14 h-14 pl-1 py-1 rounded-lg hover:opacity-50" src={'https://www.datocms-assets.com/45158/1655816531-mountain-pred.jpg'} alt="naked eye scene two" />
            <img onClick={()=>{setSceneIndex(2); }} className="w-14 h-14 pl-1 pr-1 py-1 rounded-lg hover:opacity-50" src={'https://www.datocms-assets.com/45158/1655825391-beach-pred.jpg'} alt="naked eye scene three" />
        </div>
        <span className="text-white font-semibold mr-5">Lens Variant</span>
      </div>
      :
      <div className="absolute bottom-14 w-full h-10 flex flex-row justify-between items-end">
      <span className="text-white font-semibold ml-5">Your Naked Eye</span>
      
      <span className="text-white font-semibold mr-5">SunGod Lens Clarity</span>
    </div>
}
    </div> 
                </div>


           
             
  
</>
  )
}

export default LensTool