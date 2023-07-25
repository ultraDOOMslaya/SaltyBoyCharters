import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
import Facebook from '@assets/images/facebook.png';
import Instagram from '@assets/images/instagram.png';
export const SocialMedia = () => {
    return (_jsxs(SocialMediaContainer, { children: [_jsx("a", { href: "https://www.facebook.com/SaltyboyCharters/", children: _jsx("img", { src: Facebook }) }), _jsx("a", { href: "https://www.instagram.com/captscottydarna/?hl=en", children: _jsx("img", { src: Instagram }) })] }));
};
const SocialMediaContainer = styled.div `
  position: fixed;
  top: 0;
  right: 0;

  display: flex;
  flex-direction: row;
  gap: 0.25rem;

  margin-top: 5.5rem;
  margin-right: 1.0rem;
  z-index: 3000;

  img {
    width: 2rem;
  }
`;
