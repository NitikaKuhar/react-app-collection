import React, {useState, useRef} from 'react';




const Accordian = ({title, content}) =>{

const [activeState, setActiveState] = useState("");
const [maxHeight, setMaxHeight] = useState("0px");
const [rotateIcon, setRotateIcon] = useState("right");
const contentRef = useRef(null);

const toggle = () =>{
    setActiveState(activeState === "" ? "active" : "");

    setMaxHeight(activeState === "active" ? "0px" : `${contentRef.current.scrollHeight}px`);

    setRotateIcon(activeState === "active" ? "rotate": "right")


    
}

return(
    <div className='accordian-container'>
        <button className={`accordian ${activeState}`} onClick={toggle}>
            <p className='title'>{title}</p>
            <i className={`arrow accordian-icon ${rotateIcon}`} />

        </button>
        <div className='accordian-content' ref={contentRef} style={{ maxHeight: `${maxHeight}` }}>
            <div className='accordian-content-text'
            dangerouslySetInnerHTML={{__html: content}}>

            </div>
        </div>

    </div>
)

}

export default Accordian;