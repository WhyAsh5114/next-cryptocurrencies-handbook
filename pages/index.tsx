import { Title, TextInput } from "@mantine/core";
import { Search } from "tabler-icons-react";

export default function Home() {
    return (<>
        <div className="grid place-items-center h-full my-10 gap-y-52">
            <Title
                order={1}
                style={{ paddingTop: 25 }}
            >
                Token Viewer App
            </Title>

            <TextInput
                label="Search token"
                radius="sm"
                size="lg"
                type="search"
                icon={<Search size={25}/>}
                className="w-1/3"
            />
        </div>
    </>);
}