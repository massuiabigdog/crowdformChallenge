import React from 'react';
import { Text } from 'native-base';

interface CustomTextProps {
    children: any;
}

const CustomText: React.FC<CustomTextProps> = ({ children }) => {
    return <Text>{children}</Text>;
};

export default CustomText;
