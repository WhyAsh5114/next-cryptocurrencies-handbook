import { useState } from "react";
import { Button, Image, List, Loader, Text, TextInput, Title } from "@mantine/core";
import { Search } from "tabler-icons-react";
import { Entity } from "redis-om";
import Link from "next/link";

class Token extends Entity {}
interface Token {
    name: string;
    abbreviation: string;
    token_address: string;
    logo: string;
    description: string;
}

export default function TokenForm () {
    const [hits, setHits] = useState<Token[]>([]);

    const search = async (event: any) => {
        const q = event.target.value;
        if (q.length > 2) {
            const params = new URLSearchParams({ q });
            const res = await fetch('/api/search?' + params);
            const result = await res.json();
            setHits(result.tokens);
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
                onChange={search}
            />

            <List spacing={"sm"} className="mt-5">
                {hits.length > 0 ? hits.map((hit: Token) => (
                    <List.Item key={hit.entityId} className="bg-zinc-800 py-3 rounded-md hover:bg-zinc-600">
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