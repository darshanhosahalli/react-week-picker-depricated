import React from 'react';

interface ButtonProps {
    children: JSX.Element | string | (JSX.Element | string)[] | JSX.Element[],
}

export const Button = (buttonProps: ButtonProps) => {
    return <button type="button" className="flex font btn outline-primary">
        {buttonProps.children}
    </button>
}