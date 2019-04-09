import styled from "styled-components";

export const H1 = styled.h1`
  text-align: center;
`;

export const Grid = styled.div`
  display: grid;
	grid-template-columns: 6fr 6fr;
	grid-gap: 50px;
`;

export const column = styled.div`
  width:100%;
`

export const SearchSection = styled.div`
  position:relative;
`;

export const SearchList = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 80px;
  background: #fff;
  border: 1px solid #ddd;
  width: 200px;
  margin-left: 20px;
  z-index: 99;
  min-height: 200px;
  max-height: 200px;
  overflow-y: scroll;
`;

export const SearchName = styled.div`
padding: 10px 10px;
background: #fff;
border-bottom: 1px solid #ddd;
cursor: pointer;
  &:hover {
    background: #f5f5f5;
  }
`;


export const InputBox = styled.input`
  width: 200px;
  height: 50px;
  border: 1px solid #000;
  font-size: 16px;
  padding-left: 10px;
  margin: 20px 20px;
  border-radius: .25rem;
`

export const SubmitButton = styled.input`
  cursor: pointer;
  width: 100px;
  height: 40px;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`

export const LabelContainer = styled.div`
display: flex;
`;

export const Labels = styled.div`
  align-items: center;
  margin: 0 20px;
`;

export const CloseButton = styled.span``;

export const LabelSpan = styled.div`
padding: 3px 5px;
margin: 10px 2px;
border: 1px solid #666;
border-radius: 15px;
height: 25px;
line-height: 25px;
background: #4ABD5D;
color: #fff;
text-align: center;
`;

export const  TempSpan = styled.div`
  height: 25px;
  line-height: 35px;
  font-size: 16px;
  margin: 10px 2px;
`;

