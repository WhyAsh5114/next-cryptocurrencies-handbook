import { useState } from "react";
import { Image, List, TextInput } from "@mantine/core";
import { Search } from "tabler-icons-react";
import { Entity } from "redis-om";

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
                className="w-3/4 md:w-1/2 lg:w-1/3"
                onChange={search}
            />

            <List>
                {hits.length > 0 ? hits.map((hit: Token) => (
                    <List.Item key={hit.entityId}>
                        <Image src={hit.logo} width={100} alt={`${hit.abbreviation} logo`}></Image>
                    </List.Item>
                )) : <></>}
            </List>
        </div>
    );
}