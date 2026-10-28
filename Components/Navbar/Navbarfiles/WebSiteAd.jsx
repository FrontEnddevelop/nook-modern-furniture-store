"use client";


const Data =[
    {
        label:"Wonder",
        picture:"Web styles/beauty.webp"
    },
    {
        label:"Nook",
        picture:"Web styles/nook.webp"
    },
    {
        label:"Root",
        picture:"Web styles/root.webp"
    },
    {
        label:"Velour",
        picture:"Web styles/velour.webp"
    }
]

const WebSiteAd = () => {
  return (
    <div className='flex justify-around px-15 pt-5 pb-3 bg-white'>
        
        {Data.map((l)=>{

            return(
                <div key={l.label} className='flex flex-col items-center gap-2 mt-2'>
                    
                        <img className='h-105' src={l.picture} />
                        <div>
                        {l.label}
                    
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default WebSiteAd