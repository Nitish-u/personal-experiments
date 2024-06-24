import styles from '../../assets/css Files/popup.module.css';
export default function InvalidPopUp({msg,clickHndlr}){
    const hndlClick = () => {
        clickHndlr(true);
    }
    return(
        <>
            <div className={styles.popup}>
                <h1>Invalid Input</h1>
                <p>{msg}</p>
                <button onClick={hndlClick}>Okay</button>
            </div>
        </>
    )
}