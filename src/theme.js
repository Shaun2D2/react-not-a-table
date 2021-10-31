const COLORS = {
    grey: {
        'lightest': '#E9ECEF',
        'light': '#DEE2E6',
        'regular': '#CED4DA',
        'dark': '#ADB5BD',
        'darkest': '#6C757D'
    }
}

const getObjectValue = (obj, path) => path.split('.').reduce((acc, val) => acc?.[val], obj);

export const color = (path) => getObjectValue(COLORS, path) ?? null;
