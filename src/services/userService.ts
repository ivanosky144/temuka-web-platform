import API_KEY from ".";

export async function getUserDetail(id: number) {
    const res = await fetch(`${API_KEY}/api/user/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    return res.json();
}

export async function searchUsers(params: string) {
    const res = await fetch(`${API_KEY}/api/user/search`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    return res.json();
}

export async function followUser(payload: any) {
    const res = await fetch(`${API_KEY}/api/user/follow`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    return res.json();
}