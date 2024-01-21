import React from 'react';
import Image from 'next/image';
import background from '../image/background.png';
import '../styles/globals.css';
const page = () => {
  return (
    // <div>
    //   <Image src={background} height={800} width={1000} alt='background image' className={`${styles.featuredImage} w-full`} priority ></Image>
    //   team

    // </div>
    // <div className="h-32 w-full " style={{backgroundImage: {background}}}>
    //   teams
    // </div>
    <div>
  {/* // style={{'../image/background.png': `url(${fetchedUrl})`}} 
  // className='bg-[image:var(../image/background.png)]' */}
    team
    </div>
    // <div className="h-32 w-full " style="background-image: url('../image/background.png')">
    //   teams
    //   </div>
  )
}

export default page;
