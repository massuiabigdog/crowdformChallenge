import { Box, Text, HStack, Icon, IconButton, StatusBar } from 'native-base';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type MainHeaderProps = {
    label: string;
    isDashboard?: boolean;
};

const MainHeader: React.FC<MainHeaderProps> = ({ label, isDashboard }) => {
    return (
        <>
            <StatusBar backgroundColor="violet.800" barStyle="light-content" />
            <Box safeAreaTop bg="violet.400" />
            <HStack h={20} bg="violet.800" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" >
                <HStack alignItems="center">
                    <Text color="white" fontSize={'16px'} w='100%' textAlign='center'>
                        {label}
                    </Text>

                </HStack>
            </HStack>

            {
                isDashboard && <Text paddingBottom={20} bg='violet.800' color="white" fontSize="20" w='100%' textAlign='center' fontWeight="bold">
                    {label}
                </Text>
            }
            <Box bg="violet.800" w='100%' height={10} />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightblue',
        auto: 10,
        margin: 'auto',
        textAlign: 'center',
        alignItems: 'center',

    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default MainHeader;
