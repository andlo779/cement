import styled from "styled-components";
import {HiOutlineMail} from "react-icons/hi";
import {colors} from "../../styles/colors";
import {BsGithub} from "react-icons/bs";

export const MailIcon = styled(HiOutlineMail)`
	position: relative;
	top:4px;
	color: ${colors.black};
	&:hover {
		color: ${colors.grey};
	}
`;

export const GitHubIcon = styled(BsGithub)`
  position: relative;
  top:4px;
  color: ${colors.black};
  &:hover {
    color: ${colors.grey};
  }
`;

export const Paragraph = styled.p`
  margin-bottom: 20px;
`;

export const Link = styled.a`
	cursor: default;
	text-decoration: none;
	color: ${colors.black};
	&:hover {
    filter: drop-shadow(0 0 2em ${colors.black});
		color: ${colors.grey};
	}
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
