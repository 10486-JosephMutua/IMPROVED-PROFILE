import React from "react"
export default function Star(prop){
  let  toggle= prop.isFilled ? prop.img2: prop.img1
  return(

<button
onClick={prop.onClick}
aria-pressed={false}  aria-label={prop.isFilled ? "Remove from favorites" : "Add to favorites"} className="favourite-btn">




<img src={toggle} alt={prop.isFilled}/>
</button>



  )



}
