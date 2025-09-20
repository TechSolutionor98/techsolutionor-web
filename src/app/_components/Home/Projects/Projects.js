import Image from 'next/image'
import React from 'react'
import Eclipse from '../../../../../Components/Images/eclipse2.png'
import Grab from '../../../../../Components/Images/grab.png'
import Protein from '../../../../../Components/Images/protein.png'
import Clickpos from '../../../../../Components/Images/clickpos.png'
import Almatoh from '../../../../../Components/Images/almatoh.png'
import Traders from '../../../../../Components/Images/traders.png'
import Super from '../../../../../Components/Images/super.png'
import Craters from '../../../../../Components/Images/crafters.png'
import Amer from '../../../../../Components/Images/amer.png'
// import Modern from '../../../../../Components/Images/'
import Saloon from '../../../../../Components/Images/saloon.png'
import Exports from '../../../../../Components/Images/exports.png'
import Albasit from '../../../../../Components/Images/albasit.png'
import Crown from '../../../../../Components/Images/crownexcel.png'
import Clickslice from '../../../../../Components/Images/clickslice.png'
import Muzammil from '../../../../../Components/Images/muzammil.png'
import Appliances from '../../../../../Components/Images/appliances.png'
import Smart from '../../../../../Components/Images/smart.png'
import Mubayya from '../../../../../Components/Images/mubayya.png'
import Aljannah from '../../../../../Components/Images/aljannah.png'

const Projects = () => {
    const icons = [
        {Image: Grab, width: 223, height:223},
        {Image: Protein, width: 223, height:223},
        {Image: Clickpos, width: 223, height:223},
        {Image: Almatoh, width: 133, height:114},
        {Image: Traders, width: 194, height:194},
        {Image: Super, width: 115, height:131},
        {Image: Craters, width: 223, height:84},
        {Image: Amer, width: 172, height:90},
        {Image: Saloon, width: 201, height:136},
        {Image: Exports, width: 115, height:129},
        {Image: Albasit, width: 190, height:190},
        {Image: Crown, width: 172, height:72},
        {Image: Clickslice, width: 198, height:41},
        {Image: Muzammil, width: 190, height:64},
        {Image: Appliances, width: 227, height:64},
        {Image: Smart, width: 230, height:44},
        {Image: Mubayya, width: 212, height:60},
        {Image: Aljannah, width: 313, height:167},
    ]
    return (
        <div className='relative'>
            <Image alt='Projects' src={Eclipse} width={160} height={300} className='absolute -left-10 w-[100px] -top-20 md:w-[160px] md:h-[300px]' />
            <div className="projects-top flex flex-col items-center justify-center mt-10">
                <div className="text-area md:w-[950px]">
                    <h1 className='text-center text-[45px] font-[700] text-[#262323]'>PROJECTS</h1>
                    <p className='text-[15px] font-[500] mt-5'>We Successfully Completed A Project That Enhanced Our Client’s Data Analysis Capabilities, Resulting In A 30% In Operational Efficiency. Additionally, We Implemented An AI-Driven Customer Support System, Reducing Response Times By 40% And Significantly Improving Customer Satisfaction.</p>
                    <div className="companies grid grid-cols-3 sm:grid-cols-3 mt-10 gap-3">
                        {icons.map((icon, idx) => (
                            <div key={idx} className="flex items-center justify-center ">
                                <Image
                                    src={icon.Image}
                                    alt={`Project ${idx + 1}`}
                                    width={icon.width}
                                    height={icon.height}
                                    className="object-contain w-[100px] h-[100px]  md:w-auto md:h-auto"
                                    style={{
                                        width: undefined,
                                        height: undefined,
                                        maxWidth: icon.width,
                                        maxHeight: icon.height,
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects


// export default Projects
