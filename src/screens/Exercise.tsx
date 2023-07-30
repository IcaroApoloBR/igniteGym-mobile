import { TouchableOpacity } from 'react-native';
import { HStack, Heading, Icon, Text, VStack, Image, Box, ScrollView } from 'native-base';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRouterProps } from '@routes/app.routes';
import BodySvg from '@assets/body.svg';
import SeriesSvg from '@assets/series.svg';
import RepetitionsSvg from '@assets/repetitions.svg';
import { Button } from '@components/Button';

export function Exercise() {

    const navigation = useNavigation<AppNavigatorRouterProps>();

    function handleGoBack() {
        navigation.goBack();
    }
    return (
        <VStack flex={1}>
            <VStack px={8} bg="gray.600" pt={12}>
                <TouchableOpacity onPress={handleGoBack}>
                    <Icon as={Feather} name="arrow-left" color="yellow.500" size={6} />
                </TouchableOpacity>

                <HStack justifyContent="space-between" mt={4} mb={8} alignItems="center">
                    <Heading color="gray.100" fontSize="lg" fontFamily="heading" flexShrink={1}>
                        Supino inclinado
                    </Heading>

                    <HStack alignItems="center">
                        <BodySvg />

                        <Text color="gray.200" ml={1} textTransform="capitalize">
                            Peito
                        </Text>
                    </HStack>
                </HStack>
            </VStack>

            <ScrollView>
                <VStack p={8}>
                    <Image
                        w="full"
                        h={80}
                        source={{ uri: 'https://blog.gsuplementos.com.br/wp-content/uploads/2021/04/iStock-1246046696.jpg' }}
                        alt="Nome do exercício"
                        mb={3}
                        resizeMode="cover"
                        rounded="lg"
                    />

                    <Box bg="gray.600" rounded="md" pb={4} px={4}>
                        <HStack alignItems="center" justifyContent="space-around" mb={6} mt={5}>
                            <HStack>
                                <SeriesSvg />
                                <Text color="gray.200" ml="2">
                                    3 séries
                                </Text>
                            </HStack>

                            <HStack>
                                <RepetitionsSvg />
                                <Text color="gray.200" ml="2">
                                    12 repetições
                                </Text>
                            </HStack>
                        </HStack>

                        <Button
                            title="Marcar como realizado"
                        />
                    </Box>
                </VStack>
            </ScrollView>
        </VStack>
    );
}