import { Box, Text, HStack, Icon, IconButton, StatusBar } from 'native-base';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomText from './CustomText';
import { colors } from '../utils';

type MainHeaderProps = {
    label: string;
    showAvailableAmount?: string;
};

const MainHeader: React.FC<MainHeaderProps> = ({ label, showAvailableAmount }) => {
    return (
        <>
            <SafeAreaView style={{ zIndex: -1 }}>
                <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
                <Box safeAreaTop bg={colors.primary} />
                <HStack h={20} bg={colors.primary} px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" >
                    <HStack alignItems="center">
                        <CustomText color="white" bold w='100%' textAlign='center'>
                            {label}
                        </CustomText>
                    </HStack>
                </HStack>
            </SafeAreaView>
            {
                showAvailableAmount && <CustomText h1 bold paddingBottom={20}  marginTop={-5} bg={colors.primary} color="white" fontSize="20" w='100%' textAlign='center' fontWeight="bold">
                    {showAvailableAmount}
                </CustomText>
            }
            <Box zIndex={-2} bg={colors.primary} w='100%' height={10} />
        </>
    );
};

export default MainHeader;
