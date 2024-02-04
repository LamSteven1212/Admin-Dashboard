import styles from "@/app/ui/login/login.module.css"

// declaring a React functional component
const LoginPage = () => {
    return(
        // this component renders a return statement, this will be displayed when this component is used
        <div className={styles.container}>
            <form action="" className={styles.form}>
                <h1>Login</h1>
                <input type="text" placeholder="username"/>
                <input type="text" placeholder="password"/>
                <button>Login</button>
            </form>
        </div>
    )
}
// means that another file imports this module
export default LoginPage