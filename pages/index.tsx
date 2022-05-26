import { Title, TextInput, Text } from "@mantine/core";
import { Search } from "tabler-icons-react";

export default function Home() {
    return (<>
        <div className="grid place-items-center h-full my-10 gap-y-12">
            <Title
                order={1}
                style={{ paddingTop: 25 }}
            >
                Token Viewer App
            </Title>

            <Text 
                align="center" 
                variant="gradient" 
                gradient={{ from: 'indigo', to: 'cyan', deg: 0}} 
                size="xl"
                weight={700}
            >
                Get token info on various blockchains from one app
            </Text>

            <TextInput
                label="Search token"
                radius="sm"
                size="lg"
                type="search"
                icon={<Search size={25}/>}
                className="w-3/4 md:w-1/2 lg:w-1/3"
            />
        </div>
    </>);
}