import { Box, Text, HStack, Icon, IconButton, StatusBar } from 'native-base';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const MainHeader = () => {
    return (
        <>
            <StatusBar backgroundColor="violet.800" barStyle="light-content" />
            <Box safeAreaTop bg="violet.400" />
            <HStack h={20} bg="violet.800" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" >
                <HStack alignItems="center">
                    <Text color="white" fontSize="20" w='100%' textAlign='center' fontWeight="bold">
                        Home
                    </Text>
                </HStack>
            </HStack>
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
