import { Client, Entity, Schema } from 'redis-om'

const client = new Client();

async function connect() {
    if (!client.isOpen()) {
        await client.open(process.env.REDIS_URL);
    }
}

interface Token {
    name: string;
    abbreviation: string;
    token_address: string;
    logo: string;
    description: string;
  }
class Token extends Entity {}
let schema = new Schema(
    Token,
    {
        name: {type: 'text'},
        abbreviation: {type: 'text'},
        token_address: {type: 'text'},
        logo: {type: 'text'},
        description: {type: 'text'},
        tags: {type: 'string[]'}
    },
    {
        dataStructure: 'JSON',
    }
)

export async function createIndex() {
    await connect();
    const repository = client.fetchRepository(schema);
    await repository.createIndex();
}

export async function searchTokens(q: string) {
    await connect();
    
    // So the query can also search partial words
    q += q.charAt(q.length - 1) !== " " ? "*" : "";
    const repository = client.fetchRepository(schema);
    const tokens = await repository.search()
        .where('name').matches(q)
        .or('abbreviation').matches(q)
        .or('description').matches(q)
        .returnAll();

    return tokens;
}

export async function getToken(q: string) {
    await connect();
    const repository = client.fetchRepository(schema);
    const token = await repository.search()
        .where('name').eq(q)
        .returnAll()
    return token[0];
}