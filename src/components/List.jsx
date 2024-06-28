import MemberList from "./MemberList.jsx";
import './List.css'
import {useState} from "react";

const List = ({member, onDelete, onClickRegTitleButton}) => {
  const[input, setInput] = useState("");
  
  const onSetInput = (e) => {
    setInput(e.target.value);
  }
  const getFilterMember = () => {
    if(input === ""){ //공백이면 다 보여줌
      return member;
    }
    return member.filter(
      (member) => member.name.includes(input));//이름으로 검색기능
  }
  
  const filterMember = getFilterMember();//검색기능

  
  return (
      <>
      <h1 onClick={onClickRegTitleButton}>Forests </h1>
        <div className="list2">
          <h2>회원리스트</h2>
          <p>(DB로 연결해놓은 것이 아니라 저장은 안됩니다.)</p>
          <input value={input} placeholder="회원이름을 입력해주세요" onChange={onSetInput}/>
          <div>
            {filterMember.map(
                (member) => <MemberList key={member.no} {...member} onDelete={onDelete} //키 값 (프라이머리키로 줘서 나중에 삭제할때 사용)
               />
            )}
          </div>
        </div>
      </>
  )
}
export default List;
