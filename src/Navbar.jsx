import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear,faArrowUpRightFromSquare, faHouse } from '@fortawesome/free-solid-svg-icons'
let page;
function determinePage () {
    if (window.location.pathname === '/') {
        page = 'home';
    } else if (window.location.pathname === '/settings') {
        page = 'settings';
    } else {
        console.log("failed to get page");
    }
}
export function NavBar() {
    determinePage();
    if (page === 'home') {
        return (
            <>
                <nav className="Rectangle2 fixed top-5 left-5 right-5 h-32 opacity-75 bg-neutral-900 rounded-2xl flex items-center pr-14 pl-14" />
                <ul className="flex justify-around w-full items-center list-none">
                    <li><a href="/settings"><FontAwesomeIcon icon={faGear} style={{color: "#ffffff",}} className="fixed w-[35px] h-[38px]"/></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{color: "#ffffff",}} className="fixed w-[35px] h-[38px]" /></a></li>
                </ul>
                <div className="w-[277px] h-[80px">
                    <div className="fixed w-[277px] top-5 left-5 font-lexend [text-shadow:0px_0px_24.93px_ #ffffff] font-medium text-[#ffffff] text-[64px] tracking-[-0.64px] leading-[normal]">
                        Galactic
                    </div>
                </div>
            </>
        );
    } else if (page === 'settings') {
        return (
            <>
                <nav
                    className="Rectangle2 fixed top-5 left-5 right-5 h-32 opacity-75 bg-neutral-900 rounded-2xl flex items-center pr-14 pl-14"/>
                <ul className="flex justify-around w-full items-center list-none">
                    <li><a href="/"><FontAwesomeIcon icon={faHouse} style={{color: "#ffffff",}}
                                                             className="fixed w-[35px] h-[38px]"/></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{color: "#ffffff",}}
                                                     className="fixed w-[35px] h-[38px]"/></a></li>
                </ul>
                <div className="w-[277px] h-[80px">
                    <div className="fixed w-[277px] top-5 left-5 font-lexend [text-shadow:0px_0px_24.93px_ #ffffff] font-medium text-[#ffffff] text-[64px] tracking-[-0.64px] leading-[normal]">
                        Galactic
                    </div>
                </div>
            </>
        );
    }
}
