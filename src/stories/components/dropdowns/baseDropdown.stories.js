import dropdownComponent from "../../../components/dropdowns/base-dropdown/base-dropdown.html";
import dropdownItemComponent from "../../../components/dropdowns/base-dropdown/dropdown-item.html";
import iconDropdownItemComponent from "../../../components/dropdowns/base-dropdown/icon-dropdown-item.html";
import checkboxDropdownItemComponent from "../../../components/dropdowns/base-dropdown/checkbox-dropdown-item.html";
import radioDropdownItemComponent from "../../../components/dropdowns/base-dropdown/radio-dropdown-item.html";

export default {
    title: "Components/Dropdowns/Base dropdown",
    parameters: { layout: "centered" },
    tags: ['autodocs'],
};

// Default parameters for the dropdown component
const DEFAULT_DROPDOWN_ARGS = {
    numItems: 3,
    labelPrefix: 'Item',
    itemType: "text"
};

// Maps the item type to its corresponding component
const ITEM_COMPONENT_MAP = {
    "text": dropdownItemComponent,
    "icon": iconDropdownItemComponent,
    "checkbox": checkboxDropdownItemComponent,
    "radio": radioDropdownItemComponent
};

// Generates dropdown with specified parameters.
export const dropdown = (args) => {
    const { numItems, labelPrefix, itemType } = { ...DEFAULT_DROPDOWN_ARGS, ...args };

    // Select appropriate component based on item type
    const itemComponent = ITEM_COMPONENT_MAP[itemType] || dropdownItemComponent;

    // Generate dropdown items
    let dropdownItems = '';
    for (let i = 1; i <= numItems; i++) {
        const label = `${labelPrefix} ${i}`;
        const itemWithLabel = itemComponent.replace('Dropdown item', label);
        dropdownItems += itemWithLabel;
    }

    // Replace placeholder in dropdown component with generated dropdown items
    return dropdownComponent.replace('{{dropdownItems}}', dropdownItems);
};

// Define argument types for Storybook controls
dropdown.argTypes = {
    numItems: {
        control: { type: 'range', min: 1, max: 10, step: 1 },
    },
    itemType: {
        control: 'select',
        options: ["text", "icon", "checkbox", "radio"]
    }
};

// Set default arguments for the dropdown story
dropdown.args = DEFAULT_DROPDOWN_ARGS;

// Export individual dropdown item components
export const item = () => dropdownItemComponent;
export const iconItem = () => iconDropdownItemComponent;
export const checkboxItem = () => checkboxDropdownItemComponent;
export const radioButtonItem = () => radioDropdownItemComponent;
