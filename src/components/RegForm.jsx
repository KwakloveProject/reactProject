import './RegForm.css'
import {useRef, useState} from "react";

// eslint-disable-next-line react/prop-types
const RegForm = ({onReg, onClickRegTitleButton,setIfRegFrom,onClickRegButton}) => {
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const [name, setName] = useState('');
  //회원가입 눌렀을때
  const idRef = useRef(null);
  const pwdRef = useRef(null);
  const nameRef = useRef(null);

  const onSetId = (e) => {
    setId(e.target.value);//내가 입력하는 값 따라감

  }
  const onSetPwd = (e) => {
    setPwd(e.target.value);
  }
  const onSetName = (e) => {
    setName(e.target.value);

  }
  const onSubmit = (e) => {
    e.preventDefault();
    if (id === '') {
      alert("아이디를 입력해주세요!");
      idRef.current.focus();
      return;
    } else if (pwd === '') {
      alert("비밀번호를 입력해주세요!");
      pwdRef.current.focus();
      return;
    } else if (name === '') {
      alert("이름을 입력해주세요!");
      nameRef.current.focus();
      return;
    } 
    
    onReg(id, pwd, name);
    setId('');
    setPwd('');
    setName('');
    onClickRegButton();
    

  }
  const ifRegister=(register)=>{
  if(register){
    navigator

  }
      


  }


  const onKeyDown = (e) => {
    // 엔터키 눌렀을때 저장할 수 있도록 구현할 수 있다
    if (e.keyCode === 13) {
      onSubmit();
    }
  }

  return (

    <body>
    <p className='regH1' onClick={onClickRegTitleButton}> Forests</p>
      <div className="regform">
        <form>
          <span>아이디: </span>
          <input onKeyDown={onKeyDown} value={id}  onChange={onSetId} type="text"/>
          <span>비밀번호:</span>
          <input onKeyDown={onKeyDown} value={pwd} onChange={onSetPwd} type="password" />
          <span>이름:</span>
          <input onKeyDown={onKeyDown} value={name} onChange={onSetName} type="text" />
          
          <button onClick={onSubmit} >회원가입</button>
        </form>
      </div>
    </body>
  )
}

export default RegForm;