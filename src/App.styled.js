import styled from "styled-components";

const StyledComponent = styled.div`
  .page{
    display: -webkit-box;
    flex-wrap: wrap;
  }
  .card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 40%;
  }

  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

  .container {
    padding: 2px 16px;
  }
  
 
`;


export default StyledComponent;