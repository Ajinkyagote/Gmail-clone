import React, { useState } from 'react'
import { IoMdStar } from 'react-icons/io'
import { LuPencil, LuPenLine } from 'react-icons/lu'
import { MdOutlineDrafts, MdOutlineKeyboardArrowDown, MdOutlineWatchLater } from 'react-icons/md'
import { TbSend2 } from 'react-icons/tb'
import { useDispatch } from 'react-redux'
import { setOpen } from '../redux/appSlice'

const sidebarItems = [
    {
        icon:<LuPencil/>,
        text:"Inbox"
    },
    {
        icon:<IoMdStar/>,
        text:"Starred"
    },
    {
        icon:<MdOutlineWatchLater/>,
        text:"Snoozed"
    },
    {
        icon:<TbSend2/>,
        text:"Sent"
    },
    {
        icon:<MdOutlineDrafts/>,
        text: "Drafts"
    },
    {
        icon:<MdOutlineKeyboardArrowDown/>,
        text: "More"
    }
]

const Sidebar = () => {
    //const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    
  return (
    <div className='w-[15%]'>
        <div className="p-3">
            <button onClick={() => dispatch(setOpen(true))} className='flex items-center gap-2 p-4 rounded-2xl hover:shadow-md bg-[#C2E7FF]'>
                <LuPencil size={"24px"} />
                Compose
            </button>
        </div>
        <div className='text-gray-500'>
            {
                sidebarItems.map((item, index)=> {
                    return(
                        <div className='flex items-center gap-4 pl-6 py-1 rounded-r-full hover:cursor-pointer hover:bg-gray-200 my-2'>
                            {item.icon}
                            <p>{item.text}</p>
                        </div>
                    )
                })
            }
            
        </div>
    </div>
  )
}

export default Sidebar