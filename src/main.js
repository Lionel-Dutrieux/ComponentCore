
// [External Dependencies]
import Alpine from 'alpinejs';
import JSConfetti from 'js-confetti'


// Initialize Dependencies
window.Alpine = Alpine;

Alpine.start();

const jsConfetti = new JSConfetti();
Alpine.data('jsConfetti', () => ({
    addConfetti: () => jsConfetti.addConfetti(),
    addConfetti2: () => jsConfetti.addConfetti({
        emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
    })
}));

// [Styles]
import './styles/fonts.css';
import './styles/main.css';
import './pages/home.css';


// [Components]

// [Buttons]
// [Primary Button]
import './components/buttons/primary-button/primary-button.js';
import './components/buttons/primary-button/primary-button.css';
import './components/buttons/primary-button/primary-button.html';
import './components/buttons/primary-button/primary-button-small.html';
import './components/buttons/primary-button/primary-button-big.html';

// [Secondary Button]
import './components/buttons/secondary-button/secondary-button.js';
import './components/buttons/secondary-button/secondary-button.css';
import './components/buttons/secondary-button/secondary-button.html';
import './components/buttons/secondary-button/secondary-button-small.html';
import './components/buttons/secondary-button/secondary-button-big.html';

// [Dropdowns]
import './components/dropdowns/base-dropdown/base-dropdown.js';
import './components/dropdowns/base-dropdown/base-dropdown.css';
import './components/dropdowns/base-dropdown/base-dropdown.html';
import './components/dropdowns/base-dropdown/checkbox-dropdown-item.html';
import './components/dropdowns/base-dropdown/dropdown-item.html';
import './components/dropdowns/base-dropdown/icon-dropdown-item.html';
import './components/dropdowns/base-dropdown/radio-dropdown-item.html';