import { Button as NativeBaseButton, IButtonProps, Text } from 'native-base'

type Props = IButtonProps & {
    title: string;
    variant?: "solid" | "outline";
}

export function Button({ title, variant = "solid", ...rest }: Props) {
    return (
        <NativeBaseButton
            w="full"
            h={14}
            bg={variant === "outline" ? "transparent" : "yellow.500"}
            borderWidth={variant === "outline" ? 1 : 0}
            borderColor="yellow.500"
            rounded="sm"
            _pressed={{
                bg: variant === "outline" ? "gray.500" : "yellow.700"
            }}
            {...rest}
        >
            <Text
                color={variant === "outline" ? "yellow.500" : "white"}
                fontFamily="heading"
                fontSize="sm"
            >
                {title}
            </Text>
        </NativeBaseButton >
    );
}