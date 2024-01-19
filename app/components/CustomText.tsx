import React from 'react';
import { Text, ITextProps } from 'native-base';

interface CustomTextProps extends ITextProps {
    children: string;
}

const CustomText: React.FC<CustomTextProps> = ({ children, ...rest }) => {
    return <Text {...rest}>{children}</Text>;
};

export default CustomText;
