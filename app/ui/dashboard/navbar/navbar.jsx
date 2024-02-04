"use client";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
import {
    MdNotifications,
    MdOutlineChat,
    MdPublic,
    MdSearch,
} from "react-icons/md";

// declaring a React functional component
const Navbar = () => {

    const pathname = usePathname()

    return(
        // this component renders a return statement, this will be displayed when this component is used
        <div className={styles.container}>
            <div className={styles.title}>{pathname.split("/").pop()}</div>
                <div className={styles.menu}>
                    <div className={styles.search}>
                        <MdSearch />
                        <input type="text" placeholder="Search..." className={styles.input} />
                    </div>
                    <div className={styles.icons}>
                        <MdOutlineChat size={20} />
                        <MdNotifications size={20} />
                        <MdPublic size={20} />
                    </div>
                </div>
        </div>
    )
}
// means that another file imports this module
export default Navbar