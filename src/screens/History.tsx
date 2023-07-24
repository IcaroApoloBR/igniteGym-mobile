import { useState } from 'react';
import { Heading, VStack, SectionList, Text } from 'native-base';
import { ScreenHeader } from '@components/ScreenHeader';
import { HistoryCard } from '@components/HistoryCard';

export function History() {
    const [exercises, setExercises] = useState([
        {
            title: "26.02.22",
            data: ["Puxada frontal", "Remada unilateral"]
        },
        {
            title: "24.02.22",
            data: ["Puxada frontal", "Remada bilateral"]
        }
    ]);

    return (
        <VStack flex={1}>
            <ScreenHeader title="Histórico de exercícios" />

            <SectionList
                sections={exercises}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <HistoryCard />
                )}
                renderSectionHeader={({ section }) => (
                    <Heading color="gray.200" fontSize="md" mt={10} mb={3}>
                        {section.title}
                    </Heading>
                )}
                px={8}
                contentContainerStyle={exercises.length === 0 && { flex: 1, justifyContent: "center" }}
                ListEmptyComponent={() => (
                    <Text color="gray.100" textAlign="center">
                        Não há exercícios registrados ainda. {'\n'}
                        Solicite ao profissional imediatamente.
                    </Text>
                )}
                showsVerticalScrollIndicator={false}
            />
        </VStack>

    );
}