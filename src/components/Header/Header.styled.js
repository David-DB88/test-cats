import styled from "styled-components";

const StyledComponent = styled.div`

  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background-color: teal;
    color: #fff;
    width: calc(100vw - 20px);
  }
  .nav-links{
    margin-block-end: 0;
    margin-inline-end: 20%;
  }
  .nav-links a {
    color: #fff;
  }
  
  /* LOGO */
  .logo {
    font-size: 32px;
  }
  /* NAVBAR MENU */
  .menu {
    display: flex;
    gap: 1em;
    font-size: 18px;
  }
  .menu li:hover {
    background-color: #4c9e9e;
    border-radius: 5px;
    transition: 0.3s ease;
  }
  .menu li {
    padding: 5px 14px;
    marker: none;
  }
  
  ul {
    list-style-type: none;
  }
  /* DROPDOWN MENU */
  .services {
    position: relative;
  }
  .dropdown {
    background-color: rgb(1, 139, 139);
    padding: 1em 0;
    position: absolute; /*WITH RESPECT TO PARENT*/
    display: none;
    border-radius: 8px;
    top: 35px;
  }
  .dropdown li + li {
    margin-top: 10px;
  }
  .dropdown li {
    padding: 0.5em 1em;
    width: 8em;
    text-align: center;
  }
  .dropdown li:hover {
    background-color: #4c9e9e;
  }
  .services:hover .dropdown {
    display: block;
  }  
`;


export default StyledComponent;