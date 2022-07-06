import styled from "styled-components";

export const Container = styled.footer`
  font-family:"Montserrat";
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  background-color: #0f0801;
  width: 100%;
  box-sizing: border-box;
  color: #f5dd1a;
  
  .RedeSociais{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

p {
  font-size: 12px;
  margin:2px;
  padding: 0;
  

}

.footer{
  display: flex;

}
h3{
  margin:0px;
  padding: 0;
  display: flex;
  
}

`;

export const Menu = styled.ul`
  display: flex;
  gap: 15px;
  text-align: center;
  padding: 0;
  color: #f5dd1a;
  p {
    margin: 0;
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 480px){
    
    Container{
      font-family:"Montserrat";
      display: flex;
      flex-direction:column;
      justify-content: center;
      align-items: center;
      padding: 0px;
      background-color: #0f0801;
      width: 100%;
      box-sizing: border-box;
      color: #f5dd1a;

    }
    
    
    p {
      font-size: 12px;
      margin:0px;
      padding: 0;
      
    
    }
    
    .footer{
      display: flex;
    
    }
    h3{
      margin:0px;
      padding: 0;
      display: flex;
      
    }
  }

  @media screen and (min-device-width: 481px) and (max-device-width: 800px){
    Container{
      font-family:"Montserrat";
      display: flex;
      flex-direction:column;
      justify-content: center;
      align-items: center;
      padding: 0px;
      width: 100%;
      box-sizing: border-box;
      
    }
    p {
      font-size: 12px;
      margin:0px;
      padding: 0;
      
    
    }
    
    .footer{
      display: flex;
    
    }
    h3{
      margin:0px;
      padding: 0;
      display: flex;
      
    }
    @media screen and (min-device-width: 801px) and (max-device-width: 1200px){
      Container{
        font-family:"Montserrat";
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
        padding: 0px;
        width: 100%;
        box-sizing: border-box;
        
      }
      p {
        font-size: 12px;
        margin:0px;
        padding: 0;
        
      
      }
      
      .footer{
        display: flex;
      
      }
      h3{
        margin:0px;
        padding: 0;
        display: flex;
        
      }
    }
  }
`;
