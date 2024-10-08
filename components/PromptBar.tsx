'use client'

import { useState } from "react"


export default function PromptBar() {
    const [input, setInput] = useState('');

    function getReactComponent() {

    }
    
    function getVueComponent() {
        
    }

    // const inputField = document.querySelector('.prompt-bar')

    const handleSubmit = (e) => {
        e.preventDefault()

        // const prompt = formData.get("prompt")
        // alert(`You searched for '${prompt}'`)

        // make the fetch request
    }

    return (
        <form onSubmit={handleSubmit} className="px-5 py-3 w-full sm:w-[60%] flex items-center justify-between gap-4 bg-[#F2F2FA] shadow-lg rounded-xl">
            <input 
                required
                name="prompt"
                type="text" 
                placeholder="Enter prompt here"
                className="bg-[#F2F2FA] w-full focus:outline-none prompt-bar" 
            />
            <button className="flex items-center justify-center p-1 bg-[#EED8FF] rounded-full cursor-pointer">
                <svg width="22" height="22" viewBox="0 0 30 30" fill="none">
                    <g id="vuesax-linear-send-2 1" clipPath="url(#clip0_5_17)">
                    <g id="vuesax/linear/send-2">
                    <g id="send-2">
                    <path id="Vector" d="M9.24998 7.89626L19.8625 4.35876C24.625 2.77126 27.2125 5.37126 25.6375 10.1338L22.1 20.7463C19.725 27.8838 15.825 27.8838 13.45 20.7463L12.4 17.5963L9.24998 16.5463C2.11248 14.175 2.11248 10.2875 9.24998 7.89626Z" stroke="#9000FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path id="Vector_2" d="M12.6375 17.0625L17.1125 12.575" stroke="#9000FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    </g>
                    </g>
                    <defs>
                    <clipPath id="clip0_5_17">
                    <rect width="30" height="30" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            </button>
        </form>
    )
}
