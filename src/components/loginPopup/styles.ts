import styled from 'styled-components';
import {CgCloseR} from 'react-icons/cg';
import {colors} from '../../styles/colors';


export const Popup = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(8px);
`;

export const PopupContent = styled.div`
  background-color: white;
  position: absolute;
  top: 20%;
  left: 30%;
  width: 40%;
  padding: 10px;
  border-radius: 5px;
  border: 2px solid ${colors.black};
`;

export const CloseButton = styled.button`
  float: right;
  background: none;
  border: none;
  margin-bottom: 10px;
`;

export const CloseIcon = styled(CgCloseR)`
  color: ${colors.black};
`;