// this can be accessed putting the id of a specific user at the end of ther URL

import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css"
import Image from "next/image"

const SingleUserPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/noavatar.png" alt="" fill/>
                </div>
                John Doe
            </div>
            
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label htmlFor="">Username</label>
                    <input type="text" name="username" placeholder="John Doe"/>

                    <label htmlFor="">Email</label>
                    <input type="email" name="email" placeholder="JohnDoe@gmail.com"/>

                    <label htmlFor="">Password</label>
                    <input type="password" name="password"/>

                    <label htmlFor="">Address</label>
                    <input type="text" name="address" placeholder="New York"/>

                    <label htmlFor="">Is Admin?</label>
                    <select name="isAdmin" id="isAdmin">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>

                    <label htmlFor="">Is Active?</label>
                    <select name="isActive" id="isActive">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default SingleUserPage