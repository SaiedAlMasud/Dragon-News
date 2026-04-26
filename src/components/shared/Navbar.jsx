import Image from "next/image";
import Link from "next/link";
import userAvatar from "@/assets/user.png"
import NavLink from "./NavLink";
const Navbar = () => {
    return (
        <div className="py-10 flex justify-between">
            <div></div>
            <ul className="flex justify-between items-center gap-8 text-gray-600">
                <li>
                    <NavLink href={"/"}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink href={"/about"}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink href={"/career"}>
                        Career
                    </NavLink>
                </li>
                
            </ul>
            <div className="flex gap-5 items-center">
                <Image src={userAvatar} alt="User Avatar" width={45} height={45} />
                <button className="btn bg-gray-700 text-white px-10">
                    <Link href="/login">Login</Link>
                </button>
            </div>
        </div>
    );
};

export default Navbar;