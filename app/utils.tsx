export const emailIsValid = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export const colors = {
    primary: '#3629B7',
    secondary: '#E5E2FF',
    sucess: '#1CB999',
    alert: '#FFAF2A',
    neutral1: '#343434',
    neutral2: '#E0E0E0',
    gray: '#979797',
    blue: '#1573FF'
}