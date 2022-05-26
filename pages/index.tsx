import { Center, Title, TextInput } from "@mantine/core";

export default function Home() {
    return (<>
        <Center>
            <Title
                order={1}
                style={{ paddingTop: 25 }}
            >
                Token Viewer App
            </Title>
        </Center>

        <div>
            <TextInput
                placeholder="USDC"
                label="Search Token"
                radius="xl"
                size="xl"
            />
        </div>
    </>);
}