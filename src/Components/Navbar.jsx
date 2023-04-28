import vite from '../../public/vite.svg'
export default function Navbar(){
    return <div className="sidebar text-white bg-orange-500 shadow-md">
        <a><img src={vite} alt="" /></a>
        <a className="font-bold">Home</a>
        <a className="font-bold">Forms</a>
        <a className="font-bold">Help</a>

   
    </div>
}