import styled from "styled-components";


export const Popup = styled.div`
  position: fixed;
  z-index: 1;
	top: 0;
	left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
	//filter: blur(8px)
	backdrop-filter: blur(8px);
`;

export const PopupContent = styled.div`
  background-color: white;
  position: absolute;
  top: 20%;
  left: 30%;
  width: 40%;
  padding: 20px;
  border-radius: 5px;
  border: 2px solid black;
`;