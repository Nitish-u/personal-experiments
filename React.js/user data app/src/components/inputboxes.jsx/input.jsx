import styles from "../../assets/css Files/input.module.css";
export default function InputBoxes({inputValue,onChangeFun:setVal,submitHndlr,users}) {

  function changeHndler(id,value){
    setVal(prevState => {
        return {...prevState,[id]:value};
    })
  }
  
  return (
    <>
      <form onSubmit={submitHndlr}>
        <label htmlFor="name">
          Username
          <input type="text" id="name" value={inputValue.user} onChange={e => {changeHndler("user",e.target.value);}}/>
        </label>
        <label htmlFor="age">
          Age(Years)
          <input type="number" id="age" value={inputValue.age} onChange={e => {changeHndler("age",e.target.value);}}/>
        </label>
        <input type="submit" value="Add User" />
      </form>
      {users[0] && <div className={styles.users}>{users}</div>}
    </>
  );
}
