import secondaryButtonComponent from "../../../components/buttons/secondary-button/secondary-button.html";
import secondaryButtonSmallComponent from "../../../components/buttons/secondary-button/secondary-button-small.html";
import secondaryButtonBigComponent from "../../../components/buttons/secondary-button/secondary-button-big.html";

export default {
    title: "Components/Buttons/Secondary Button",
    parameters: { layout: "centered" },
    tags: ['autodocs'],
};

// Maps the item type to its corresponding component
const COMPONENT_MAP = {
    "small": secondaryButtonSmallComponent,
    "medium": secondaryButtonComponent,
    "big": secondaryButtonBigComponent,
};

// Secondary
export const secondary = (args) => {

    const { label, scale } = { ...args };

    const component = COMPONENT_MAP[scale] || secondaryButtonComponent

    const buttonWithLabel = component.replace('Click me', label);

    return buttonWithLabel;
};

secondary.args = {
    label: "Click Me!",
    scale: "medium"
};

// Define argument types for Storybook controls
secondary.argTypes = {
    scale: { control: 'inline-radio', options: ['small', 'medium', 'big'] },
};

// Export individual button item components
export const small = () => secondaryButtonSmallComponent;
export const big = () => secondaryButtonBigComponent;