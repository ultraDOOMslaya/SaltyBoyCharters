import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TopBar } from '@features/top-bar/top-bar';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Starter from './Starter';
function App() {
    return (_jsxs(BrowserRouter, { children: [_jsx(TopBar, {}), _jsx(Starter, {})] }));
}
export default App;
