import { createTheme } from './theme';
import { createHome } from './home';
import { createMenu } from './menu';
import { createContatct } from './contact';
import './style.css';

// when page load
createTheme();
const displayArea = document.querySelector('.display-area');
// createHome(displayArea);

// createMenu(displayArea);
createContatct(displayArea);


