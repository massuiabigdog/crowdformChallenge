import { View } from 'native-base';
import React from 'react';

interface MainContainerProps {
    children: React.ReactNode;
}

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
    return (
        <View borderRadius={30} zIndex={99} height='auto' marginTop={-10} bg='white' p='25px'>
            {children}
        </View>
    );
};

export default MainContainer;
