import React from 'react'

const Form = ({ img }) => {
    return (
        <div className='w-full md:w-[675px] bg-white mt-4 p-2 md:p-4 rounded-md '>
            <div className='w-full flex justify-between items-start gap-2 md:gap-4'>
                {/* profile image  */}
                <img className='w-10 h-10 rounded-full object-cover' src={img} alt="" />
                <form action="#" className='w-full flex items-start gap-2 md:gap-4'>
                    {/* form input field  */}
                    <input type="text" className='w-full border-gray-300 border-[1px] placeholder:text-sm placeholder:text-gray-300 rounded-md p-2 pb-16' placeholder='Add a comment..' />
                    {/* submit button  */}
                    <button type='submit' className='bg-[#5358B6] transition-all hover:bg-[#4a4f9e] text-white rounded-md px-3 py-2'>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Form