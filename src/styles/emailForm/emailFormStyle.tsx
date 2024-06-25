import styled from "styled-components";

 const EmailBlock = styled.div`
 width: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;

form{
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
}
input{
  margin-bottom: 14px;
  height: 34px;
  border-radius: 4px;
  border: 0;
  padding: 0 8px;
  border: 1px solid blueviolet;
  background-color: #BAE9FD;
  color: #0448C5;
  }
textarea{
  background-color: #BAE9FD;
  color: #0448C5;
  margin-bottom: 14px;
  height: 100px;
  }
`
export default EmailBlock