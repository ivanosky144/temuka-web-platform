import API_KEY from ".";

export async function createCommunity(payload: any) {
    const res = await fetch(`${API_KEY}/api/community/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    return res.json();
}

export async function joinCommunity(payload: any, id: number) {
    const res = await fetch(`${API_KEY}/api/comment/join/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    return res.json();
}
