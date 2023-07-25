import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
import * as Typography from '@features/theme/typography';
const Container = styled.div `
  display: flex;
  align-items: center;
  margin-top: 0.75rem;
  opacity: 0.3;
`;
const HorizontalLine = styled.div `
  flex: 1 0 auto;
  border-bottom: 1px solid ${(props) => props.theme.menuFg};
  line-height: 1px;
`;
const Label = styled.div `
  flex: 0 1 auto;
  padding: 0 0.5rem;
  color: ${(props) => props.theme.menuFg};
  user-select: none;
  font-size: ${Typography.labelSize};
  text-transform: ${Typography.labelTransform};
`;
export function NavMenuDivider(props) {
    return (_jsxs(Container, { children: [_jsx(Label, { children: props.name }), _jsx(HorizontalLine, {})] }));
}
