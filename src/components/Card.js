import React from 'react'

const Card = ({ type = "", mentionName = '', name = "", self = false, timeAgo = "",likes='', img="" }) => {
    return (
        <>

            <div className={`items-center mb-4 ${type === 'reply' ? 'ml-10 md:ml-20 md:w-[600px] last:mb-0' : 'md:w-[675px]'}`}>
                <div className="w-full flex bg-white rounded-md p-3 gap-5">
                    <div>
                        <div className="bg-[#F6F8F6] flex flex-col justify-center items-center rounded-md p-2 gap-1">
                            <div className="cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="w-3 h-3 text-[#5358B6] opacity-70 font-bold">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </div>
                            <h3 className="font-medium text-[#5358B6] text-sm">{likes}</h3>
                            <div className="cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="w-3 h-3 text-[#5358B6] opacity-70"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" /></svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="w-full flex justify-between items-center">
                            <div className="w-full flex gap-2 md:gap-4 items-center">
                                <div >
                                    <img className="w-7 h-7 rounded-full object-cover" src={img} alt="" />
                                </div>
                                <div className=" md:flex items-center md:gap-4">
                                    <h1 className="font-medium text-black text-base cursor-pointer transition-all hover:text-[#5358B6]">{name} {self && <span className="text-white inline-block bg-[#5358B6] font-medium pb-[2px] px-1 text-xs">you</span>}</h1>
                                    
                                    <p className="text-gray-400 text-xs md:text-sm">{timeAgo} ago</p>
                                </div>
                            </div>
                            {/* reply block for current user  */}
                            <div className={`${self && 'flex gap-2 md:gap-4 items-center'}`}>
                                {
                                    self ?
                                        <>
                                            <div className="cursor-pointer flex gap-1 items-center">
                                                <div>
                                                <svg className="w-4 h-4 fill-red-600"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M17 8a1 1 0 0 1 1 1v10a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a1 1 0 0 1 1-1zm-1 2H8v9a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1zM9 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h4a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2h4z"/></svg>
                                                </div>
                                                <p className="font-medium text-red-600 text-sm">Delete</p>
                                            </div>
                                            <div className="cursor-pointer flex gap-1 items-center">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 fill-[#5358B6]" viewBox="0 0 32 32" ><path d="M29.586 9.414 26 13l-7-7 3.586-3.586a2.005 2.005 0 0 1 2.828 0l4.172 4.172c.778.778.778 2.05 0 2.828M18 7l7 7-14.293 14.293C10.318 28.682 9.55 29 9 29H4c-.55 0-1-.45-1-1v-5c0-.55.318-1.318.707-1.707zM8.464 26.293l-2.757-2.757c-.389-.389-.707-.258-.707.292V26c0 .55.45 1 1 1h2.172c.55 0 .681-.318.292-.707" /></svg>
                                                </div>
                                                <p className="font-medium text-[#5358B6] text-sm">Edit</p>
                                            </div>
                                        </>
                                        : <>
                                            <div className="cursor-pointer flex gap-1 items-center">
                                                <div>
                                                    <svg fill="#5358B6" className="w-3 h-3" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 512 512" enable-background="new 0 0 512 512" >
                                                        <path d="M185.2,128.6V19.7L0,204.9l185.2,185.2V281.1c152.5,0,250.5,0,326.8,217.9C512,390.1,522.9,128.6,185.2,128.6z" />
                                                    </svg>
                                                </div>
                                                <p className="font-medium text-[#5358B6] text-sm">Reply</p>
                                            </div>
                                        </>
                                }
                            </div>
                        </div>
                        {/* comment/reply text  */}
                        <div className="mt-3">
                            <p className="text-gray-400 text-xs">{mentionName !== '' && <><span className='font-medium text-[#5358B6] cursor-pointer'>@{mentionName}</span></>} Impressive!Though it seems that the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness in varias breakpoints works really well.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Card