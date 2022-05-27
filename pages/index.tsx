import { Title, Text, Image, Card } from "@mantine/core";
import TokenForm from "../lib/SearchForm";

export default function Home() {
    return (<>
        <div className="grid place-items-center h-full my-10 gap-y-12">
            <Title
                order={1}
                style={{ paddingTop: 25, color: "white" }}
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

            <TokenForm />
        </div>
    </>);
}