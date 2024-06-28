import Header from './components/Header'
import { Routes, Route,useNavigate } from "react-router-dom";
import { useState,useReducer,useRef } from 'react';
import './App.css'
import Section from './components/Section'
import RegForm from './components/RegForm';
import List from './components/List';

const MemberData = [
  {
    no: 1,
    idCheck: false,
    id: 'Kwak',
    pwd: '1234',
    name: '곽기명',
    date: new Date().getTime(),
  },
  {
    no: 2,
    idCheck: false,
    id: 'Son',
    pwd: '12345',
    name: '손흥민',
    date: new Date().getTime(),
  },
  {
    no: 3,
    idCheck: false,
    id: 'Hong',
    pwd: '12346',
    name: '홍길동',
    date: new Date().getTime(),
  }
]
function reducer(member,action){
  switch(action.type)
  {
    case "ONREG": return [action.data, ...member];
    case "ONDELETE": return  (member.filter((member) => member.no !== action.data));
  }

}

function App() {
  const[ifRegForm, setIfRegFrom]=useState(false);
  //회원가입
  const[ifRegister, setIfRegister]=useState(false);
  const[member,dispatch] =useReducer(reducer,MemberData);
  const nav = useNavigate();

  const onClickRegFormButton = () => {
    setIfRegFrom(true);
    nav("/regForm");
    };
    const onClickRegTitleButton=()=>{
      setIfRegFrom(false);
    };
    //회원가입 버튼 누르면
    const onClickRegButton = () => {
      setIfRegister(true);
      nav("/list");
      };
    const idRef = useRef(4);

    const onReg = (id, pwd, name) => {
    dispatch({
      type :"ONREG",
      data:{
        no: idRef.current++,
        idCheck: false,
        id: id,
        pwd: pwd,
        name: name,
        date: new Date().getTime(),
      }
    })
    };

   


  const onDelete = (targetId) => {
    dispatch({
      type:"ONDELETE",
      data:targetId,
      
    });
  }
  return (
    <body>
    {!ifRegForm &&(
      <>
      <Header onClickRegFormButton={onClickRegFormButton}/>
     <p style={{textAlign:"center"}}>회원가입만 리엑트로 구현했습니다.<a href='https://github.com/KwakloveProject/reactProject'>(깃허브 바로가기)</a></p> 
      <Section/>
      
      
     </>
    )}
    {ifRegForm && (
      <>
    <Routes>
    <Route path="/regForm" element={<RegForm onClickRegTitleButton={onClickRegTitleButton} onReg ={onReg} onClickRegButton={onClickRegButton} /> } />
    {ifRegister &&(
      <Route path="/list" element={<List  member={member}  onDelete={onDelete}onClickRegTitleButton={onClickRegTitleButton} />}/>
    )}
    </Routes>
   
     </>
    )}
    </body>
    
  );
}

export default App
