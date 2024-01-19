import React, { useState } from 'react';
import { Input, Button, Box, FormControl, WarningOutlineIcon } from 'native-base';

interface CustomInputProps {
    label: string;
    value?: string;
    rightElement?: React.ReactNode; // Add rightElement prop
    isPassword?: boolean;
    onChange: (value: string) => void; // Add onChange prop
}

const CustomInput: React.FC<CustomInputProps> = ({ label, onChange, value, rightElement, isPassword }) => {
    const handleInputChange = (value: string) => {
        onChange(value); // Call onChange prop with the updated value
    };
    return (
        <>
            <Box alignItems="center">
                <FormControl>
                    <FormControl.Label>{label}</FormControl.Label>
                    <Input type={isPassword ? 'password' : 'text'} InputRightElement={rightElement ? rightElement : <></>} h='44px' borderRadius='15px' placeholder={label} value={value} onChangeText={handleInputChange} />
                </FormControl>
            </Box>

        </>
    );
};

export default CustomInput;
