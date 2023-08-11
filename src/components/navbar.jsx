import React, {useState} from "react";
import { FaBars, FaTimes} from "react-icons/fa"
import Logo from "../assets/logo1.png";

const Navbar = () => {
    const [nav, setNav] = useState(false); 
    const handleClick = () => setNav(!nav);

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#08192f] text-gray-300">
            <div>
                <img src={Logo} alt="Logo" style={{width: '50px'}}/>
            </div>

            {/* menu */}
            <div>
                <ul className="hidden md:flex">
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Work</li>
                    <li>Contact</li>
                </ul>
            </div>

            {/* Hamburger */}
            <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* Mobile menu */}
            <ul className= {!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#08192f] flex flex-col justify-center items-center"}>
                <li className="py-6 text-3xl">Home</li>
                <li className="py-6 text-3xl">About</li>
                <li className="py-6 text-3xl">Skills</li>
                <li className="py-6 text-3xl">Work</li>
                <li className="py-6 text-3xl">Contact</li>  
            </ul>

            {/* social-icons */}
            <div className="hidden"></div>
        </div>
    )
} 

export default Navbar