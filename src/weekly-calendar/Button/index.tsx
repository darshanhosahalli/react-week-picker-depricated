import React from 'react';

interface ButtonProps {
    children: JSX.Element | string | (JSX.Element | string)[] | JSX.Element[],
    onClick: () => void,
    theme?: string,
}

export const Button = (buttonProps: ButtonProps) => {
    return <button type="button" onClick={buttonProps.onClick} className={`flex font btn ${buttonProps.theme? buttonProps.theme : 'primary'}`}>
        {buttonProps.children}
    </button>
}