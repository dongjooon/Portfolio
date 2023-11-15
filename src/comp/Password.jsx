const Password = (props) => {
    const { pwd, changePwd } = props;
    return (
     <div className="pwd">
      <div display='inline'>PASSWORD</div>
      <input style={{width:"250px",height:"20px"}} type="password" size="8" value={pwd} onChange={changePwd}/>
     </div>
    );
   };
   export default Password;