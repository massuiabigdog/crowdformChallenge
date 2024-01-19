import React from 'react';
import { Button, IButtonProps } from 'native-base';

interface CustomButtonProps extends IButtonProps {
    disabled?: boolean;
    // Add any additional props specific to your custom button component
}

const CustomButton: React.FC<CustomButtonProps> = (props) => {
    return <Button isDisabled={props.disabled} {...props} />;
};

export default CustomButton;
