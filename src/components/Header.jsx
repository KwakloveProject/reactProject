import './Header.css'
// import RegForm from './RegForm';


const Header=({onClickRegFormButton})=>{

return(

        <header >
        <p className="headerFont" >Forests</p>
       
      
      <nav className='headerNav' >
        <ul className='ul'>
          <li className="menu">
            <a href="javascript:createDiv2(event)" className="dropbtn">Home</a>
          </li>
          <li className="menu">
            <a href="#gallery" className="dropbtn">gallery</a>
          </li>
          <li className="menu" >
            <a href="#board" className="dropbtn" >게시판</a>
            <div className="content"> 
              <a className='list'>자유 게시판</a>
              <a className='list'>문의 게시판</a>
              <a className='list'>건의 게시판</a>
            </div>
          </li>
          <li className="menu">
            <a href="#" className="dropbtn">찾아오시는길</a>
          </li>
          <li className="member">
            <a onClick={onClickRegFormButton} className="dropbtn">회원가입</a>
          </li>
          
        </ul>
      </nav>
      </header>


        
    );



} 
export default Header