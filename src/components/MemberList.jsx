import './MemberList.css'

const MemberList = ({no,id,pwd,name,email,date, onDelete}) => {

  const onClickDelete = () => {
    onDelete(no);
  }
  return(
      <div className="memberList">
       
        <span className="id">{id}</span>
        <span className="pwd">{pwd}</span>
        <span className="name">{name}</span>
        <span>{email}</span>
        <span>{new Date(date).toLocaleDateString()}</span>
        <button onClick={onClickDelete}>삭제</button>
      </div>
  )
}
export default MemberList;