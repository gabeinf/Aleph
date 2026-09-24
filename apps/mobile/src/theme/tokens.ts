export const colors = {
    paper: '#f3f2f2',
    Mat: '#eae9e9',
    Ink: '#201f1d',
    Gold: '#B68335',
    muted: '#5B5A59',
    border: '#5b5a5966',
    inactive: '#D1D0D0'
} as const;

export const spacing = {
    xxs: 4,
    xs: 8,
    sm: 12,
    md: 16,
    ml: 18,
    lg: 24,
    xl: 32,
    xxl: 48,
    xxxl: 64,
} as const;

export const typography = {
    fontFamily: {
        display: 'CormorantGaramond',
        body: 'Lora',
    },
    fontSize: {
        caption: 12,
        bodySmall: 16,
        body: 18,
        subTitle : 24,
        title: 32,
        display: 48,
    }
} as const;

export const radii = {
    sm: 6
}