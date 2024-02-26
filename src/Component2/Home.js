import React, { useState } from 'react'
import "./Home.css"
import Blackbottle from "./image/blackbottle.png"
import Whitebottle from "./image/whitebottle.png"
import Skybluebottle from "./image/skybluebottle.png"
function Home() {
  
   const imgdata=[
          {
              id:0,
              value:"Obisidian black",
              img:Blackbottle,
              backgroundcolor:"#f7f7f7"

        },
        {
          id:1,
          value:"Seaside mint",
          img:Skybluebottle,
          backgroundcolor:"#f6f8f8"
        },
        {
          id:2,
          value:"Granite white",
          img:Whitebottle,
          backgroundcolor:"#f8f8f6"

        }
       
  ]
  const [sliderdata,setSliderdata]=useState(imgdata[0])

    const handleclick=(index)=>{
           console.log(index)
           const slider=imgdata[index]
           console.log("Slider",slider)
           setSliderdata(slider)
    }
  return (
   <>
     <section id="Main_div">
       <div className='contianer'>
          <div className='row'>
              <div className='col-md-12'>
                   <div className='Main_sec' style={{backgroundColor:sliderdata.backgroundcolor}}>
                        <div className='Main-img'>
                            <img src={sliderdata.img} />
                        </div>
                        <div className='Main-con'>
                           <h1>Pure Vibes</h1>
                           <p>{sliderdata.value}</p>
                           <div className='img-wrapper'>
                        {
                          imgdata.map((data,i)=>(
                            <img key={data.id} src={data.img} onClick={()=>handleclick(i)} className={sliderdata.id==i?"clicked":""}/>
                          )) 
                        }
                             
                           </div>
                           <p>From $109</p>
                        </div>
                   </div>
              </div>
          </div>
       </div>
     </section>
   
   </>
  )
}

export default Home