import { Badge, Image, Text, Title } from '@mantine/core';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import search, { match } from '../../lib/database'


export default function TokenInfo({ token_name }: { token_name: string }) {
    const token = match(token_name);
    const tag_elements = token.tags.map((tag) => 
        <Badge key={tag} size="lg">{tag}</Badge>
    );

    return (<>
        <div className='flex mt-5 mx-2 place-items-center flex-col gap-3'>
            <div className='w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 mb-4'>
                <Image src={token.logo} alt={`${token.name} logo`} className="p-1"/>
            </div>
            <Title order={1}>{token.name}</Title>
            <Title order={3}>{token.abbreviation}</Title>
            <div className='flex gap-3'>
                {tag_elements}
            </div>
            <Text className='w-full md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-1/3 mt-5 text-justify p-4'>
                {token.description}
            </Text>
            <Link href={token.website} className="text-blue-500">
                <Text variant='link'>
                    {token.website}
                </Text>
            </Link>
        </div>
    </>);
}

export const getStaticPaths = async () => {
    const all_tokens = search("");
    const paths = all_tokens.map((token) => ({
        params: { token_name: token.name }
    }));
    return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const token_name = params?.token_name;
    return { props: { token_name } };
}
