import React from 'react'

const AngularCards = () => {
    const cards = [
        { title: "Two-Way Data Binding", desc: "AngularJS automatically synchronizes data between the model and the view, reducing the amount of boilerplate code developers need to write." },
        { title: "MVC Architecture", desc: "AngularJS follows the Model-View-Controller (MVC) design pattern, making code more structured, modular, and easier to maintain." },
        { title: "Directives", desc: "Custom directives allow developers to extend HTML functionality, creating reusable components that enhance application interactivity." },
        { title: "Dependency Injection", desc: "Built-in dependency injection helps manage components and services in a clean and organized manner, improving application scalability." },
    ]
    const cards2 = [
        {title: "Efficient Development", desc: "AngularJS accelerates development by reducing repetitive coding tasks and offering a framework that simplifies building complex UIs."},
        {title: "Community and Resources", desc: "Backed by Google, AngularJS has a large, active community and extensive documentation, ensuring strong support and continuous improvements."},
        {title: "Single-Page Application Capabilities", desc: "AngularJS excels at creating single-page applications, providing smooth user experiences with fast transitions and minimal page reloads."},
    ]
    return (
        <div className='w-full h-auto  flex flex-col items-center justify-center gap-5 md:gap-5 '>
            <div className='w-full bg-[#181818] md:h-[305px] flex flex-col md:flex-row items-center justify-center gap-5 md:gap-2 py-5 md:py-0 md:justify-between px-5 md:px-20 mt-20' >
                {cards.map((card, idx) => (
                    <div key={idx} className={`card w-full md:w-[277.5px]  md:h-[225px] p-5 flex flex-col items-center justify-start  text-white bg-black`} style={{ boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.5)' }}>
                        <h1 className='text-[19px] font-[600] mb-5 text-center'>{card.title}</h1>
                        <p className='text-[15px] font-[400] leading-[28px] text-center'>{card.desc}</p>
                    </div>
                ))}
            </div>
            <div className="buttondiv">
                <button className='w-[141.5px] h-[39px] bg-[#41b349] text-[15px] font-[700] text-white'>Advantages</button>
            </div>
            <div className='w-full  flex flex-col md:flex-row items-stretch justify-center gap-5 md:gap-2 md:justify-between px-5 md:px-20' >
                {cards2.map((card, idx) => (
                    <div key={idx} className={`card w-full md:w-[374px] h md:h-[219px] p-5 flex flex-col items-center justify-start  `} style={{ boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.5)' }}>
                        <h1 className='text-[19px] font-[600] mb-5 text-center'>{card.title}</h1>
                        <p className='text-[15px] font-[400] leading-[28px] text-center'>{card.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AngularCards
