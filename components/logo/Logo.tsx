import style from "./Logo.module.scss";
import Image from "next/image";
import logo from "@/public/tools-svgrepo-com.svg";
import Link from "next/link";
import {raleWay} from "@/app/fonts";

const Logo = () => {
    return (
        <Link href='/' className={raleWay.className + ' ' + style.logo}>
            <Image
                src={logo}
                width='32'
                height='32'
                alt='Logo'
            />
            AS_Idea
        </Link>
    );
};

export default Logo;