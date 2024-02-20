import Home from '../../pages/home.html';

import * as primaryButtonStories from '../components/buttons/primaryButton.stories';
import * as secondaryButtonStories from '../components/buttons/secondaryButton.stories';

export default {
    title: 'Pages/Home',
    parameters: { layout: "fullscreen", previewTabs: false },
    tags: ['autodocs'],
};

export const homePage = (args) => {
    const { label } = args;

    const primaryButtonHTML = primaryButtonStories.primary({ label: "Primary CTA" });
    const secondaryButtonHTML = secondaryButtonStories.secondary({ label: "Secondary CTA" });

    return Home.replace('{{ Primary Button }}', primaryButtonHTML)
        .replace('{{ Secondary Button }}', secondaryButtonHTML)
        .replace('{{ Sign Up Now }}', secondaryButtonStories.secondary({ label: "Sign Up Now", scale: "big" }))
};