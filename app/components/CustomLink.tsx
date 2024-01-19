import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

type LinkProps = {
    onPress: () => void;
    children: React.ReactNode;
};

const CustomLink: React.FC<LinkProps> = ({ onPress, children }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text>{children}</Text>
        </TouchableOpacity>
    );
};

export default CustomLink;
