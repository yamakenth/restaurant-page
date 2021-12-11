import { createTheme } from './theme';
import { createHome } from './home';
import './style.css';

// when page load
createTheme();
const displayArea = document.querySelector('.display-area');
createHome(displayArea);


