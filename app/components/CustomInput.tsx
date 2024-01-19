import React, { useState } from 'react';
import { Input, Button, Box, FormControl, WarningOutlineIcon, IInputProps } from 'native-base';

interface CustomInputProps extends IInputProps {
    rightElement?: React.ReactElement | React.ReactElement[] | undefined; 
    label: string;
    value?: string;
    isPassword?: boolean;
    placeholder?: string;
    onChange: (value: string) => void; // Add onChange prop
}

const CustomInput: React.FC<CustomInputProps> = (props) => {
    const { label, onChange, value, rightElement, isPassword, placeholder } = props; 
    const handleInputChange = (value: string) => {
        onChange(value); // Call onChange prop with the updated value
    };
    return (
        <>
            <Box alignItems="center">
                <FormControl>
                    <FormControl.Label>{label}</FormControl.Label>
                    <Input type={isPassword ? 'password' : 'text'} InputRightElement={rightElement ? rightElement : <></>} h='44px' borderRadius='15px' placeholder={placeholder || label} value={value} onChangeText={handleInputChange} />
                </FormControl>
            </Box>

        </>
    );
};

export default CustomInput;
