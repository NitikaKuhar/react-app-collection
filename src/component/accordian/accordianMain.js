import React from'react'
import Accordian from './accordian';
import './accordian.css';

const accordionData = [
    {
      title: "What is your reutrn policy",
      content: `As a heavy user, I basically <i>live</i> in my browser. However, extensions do slow down the browser, 
      which makes me think there&#x27;s gotta be a better way. I believe it&#x27;s high time we had an operating system which is fully optimized as a browser. 
              Extensions then, would be apps on the OS, and probably won&#x27;t slow it down. 
              Have you seen any OS that is browser-first?`
    },
    {
      title: "What is your reutrn policy",
      content: `As a heavy user, I basically <i>live</i> in my browser. However, extensions do slow down the browser, 
      which makes me think there&#x27;s gotta be a better way. I believe it&#x27;s high time we had an operating system which is fully optimized as a browser. 
              Extensions then, would be apps on the OS, and probably won&#x27;t slow it down. 
              Have you seen any OS that is browser-first?`
    },
    {
      title: "What is your reutrn policy",
      content: `<p>As a heavy user, I basically <i>live</i> in my browser. However, extensions do slow down the browser, 
      which makes me think there&#x27;s gotta be a better way. </br>I believe it&#x27;s high time we had an operating system which is fully optimized as a browser. 
              Extensions then, would be apps on the OS, </br>and probably won&#x27;t slow it down. 
              Have you seen any OS that is browser-first?</p>`
    }
  ];

  const AccordianMain = () =>{
    return(
        <div>
            {accordionData.map((item, id) =>{
                return(
                    <Accordian title={item.title} content={item.content} key={id} />
                )
            })}
        </div>
    )

    
  }

  export default AccordianMain