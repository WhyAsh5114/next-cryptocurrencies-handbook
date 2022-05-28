import { useState } from "react";
import { Image, List, Loader, Text, TextInput, Title } from "@mantine/core";
import { Search } from "tabler-icons-react";
import Link from "next/link";
import search from "./database";

interface Token {
    name: string;
    abbreviation: string;
    token_address: string;
    logo: string;
    description: string;
    tags: string[];
}

export default function TokenForm () {
    const [hits, setHits] = useState<Token[]>([]);

    const getTokens = async (event: any) => {
        const q = event.target.value;
        if (q.length > 2) {
            const results = search(q);
            setHits(results);
        } else {
            setHits([]);
        }
    }

    return (
        <div>
            <TextInput
                label="Search token"
                radius="sm"
                size="lg"
                type="search"
                icon={<Search size={25}/>}
                onChange={getTokens}
            />

            <List spacing={"sm"} className="mt-5">
                {hits.length > 0 ? hits.map((hit: Token) => (
                    <List.Item key={hit.abbreviation} className="bg-zinc-800 py-3 rounded-md hover:bg-zinc-600">
                        <Link href={"/tokens/" + hit.name}>
                            <div className="grid grid-cols-2">
                                <Image
                                    src={hit.logo}
                                    height={100}
                                    fit="contain"
                                    alt={`${hit.abbreviation} logo`}
                                    placeholder={<Loader />}
                                />
                                <div className="flex flex-col justify-center">
                                    <Title order={3}>{hit.abbreviation}</Title>
                                    <Text>{hit.name}</Text>
                                </div>
                            </div>
                        </Link>
                    </List.Item>
                )) : <List.Item>Nothing to see here</List.Item>}
            </List>
        </div>
    );
}