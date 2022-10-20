import styled from "styled-components";
import { HiOutlineMail } from 'react-icons/hi'
import {colors} from "../styles/colors";


export const Div = styled.div`
  padding: 30px;
`;

export const MailIcon = styled(HiOutlineMail)`
	position: relative;
	top:4px;
	color: ${colors.black};
`;

export const Paragraph = styled.p`
  margin-bottom: 20px;
`;

export const Logo = styled.img`
  height: 6em;
  padding: 1.5em;
  will-change: filter;
`;

export const SpinningLogo = styled(Logo)`
  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (prefers-reduced-motion: no-preference) {
     {
      animation: logo-spin infinite 20s linear;
    }
  }
`;

