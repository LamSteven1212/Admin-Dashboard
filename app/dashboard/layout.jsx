import Navbar from "../ui/dashboard/navbar/navbar"
import Sidebar from "../ui/dashboard/sidebar/sidebar"
import styles from "../ui/dashboard/dashboard.module.css"
import Footer from "../ui/dashboard/footer/footer"

// declaring a React functional component
const Layout = ({children}) => {
    return(
        // this component renders a return statement, this will be displayed when this component is used
        <div className={styles.container}>
            <div className={styles.menu}>
                <Sidebar/>
            </div>
            <div className={styles.content}>
                <Navbar/>
                {children}
                <Footer />
            </div>
        </div>
    )
}
// means that another file imports this module
export default Layout

