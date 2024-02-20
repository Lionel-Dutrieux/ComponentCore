import primaryButtonComponent from "../../../components/buttons/primary-button/primary-button.html";
import primaryButtonSmallComponent from "../../../components/buttons/primary-button/primary-button-small.html";
import primaryButtonBigComponent from "../../../components/buttons/primary-button/primary-button-big.html";

export default {
    title: "Components/Buttons/Primary Button",
    parameters: { layout: "centered" },
    tags: ['autodocs'],
};

// Maps the item type to its corresponding component
const COMPONENT_MAP = {
    "small": primaryButtonSmallComponent,
    "medium": primaryButtonComponent,
    "big": primaryButtonBigComponent,
};

// Primary
export const primary = (args) => {

    const { label, scale } = { ...args };

    const component = COMPONENT_MAP[scale] || primaryButtonComponent

    const buttonWithLabel = component.replace('Click me', label);

    return buttonWithLabel;
};

primary.args = {
    label: "Click Me!",
    scale: "medium"
};

// Define argument types for Storybook controls
primary.argTypes = {
    scale: { control: 'inline-radio', options: ['small', 'medium', 'big'] },
};

// Export individual button item components
export const small = () => primaryButtonSmallComponent;
export const big = () => primaryButtonBigComponent;