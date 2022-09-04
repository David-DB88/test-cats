import styled from "styled-components";

export const  StyledCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  max-width: 500px;
  max-height: 500px;
  flex: 1 1 485px;
  display: block;
`
export const  StyledButton = styled.button`
  position: relative;
  background-color: #4CAF50;
  border: none;
  font-size: 15px;
  color: #FFFFFF;
  padding: 20px;
  width: 150px;
  text-align: center;
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  border-radius: 20px;
  &:after{
    content: "";
    background: #f1f1f1;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px !important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s
  }
  &:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s
  }
`
const StyledComponent = styled.div`
  .image{
    max-width: 100%;
    max-height: 400px;
  }
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

  .container {
    padding: 2px 16px;
  }
  .flex-container {
    display: flex;
    flex-wrap: wrap;
    > div {
      justify-content: center;
      width: 100%;
      height: 100%;
      margin: 10px;
      text-align: center;

    }
  }
`;

export default StyledComponent;