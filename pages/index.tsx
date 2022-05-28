import { Title, Text } from "@mantine/core";
import TokenForm from "../lib/SearchForm";

export default function Home() {
    return (<>
        <div className="grid place-items-center h-full my-10 gap-y-12">
            <Title
                order={1}
                style={{ paddingTop: 25, color: "white" }}
                className="text-center"
            >
                Cryptocurrencies Handbook
            </Title>

            <Text 
                align="center" 
                variant="gradient" 
                gradient={{ from: 'indigo', to: 'cyan', deg: 0}} 
                size="xl"
                weight={700}
                className="px-4"
            >
                Learn about various cryptocurrencies and tokens
            </Text>

            <div className="w-5/6 md:w-3/4 lg:w-1/2">
                <TokenForm />
            </div>
        </div>
    </>);
}