import React from 'react';
import { Button, IButtonProps } from 'native-base';

interface CustomButtonProps extends IButtonProps {
}

const CustomButton: React.FC<CustomButtonProps> = (props) => {
    return <Button {...props} />;
};

export default CustomButton;
