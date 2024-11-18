import API_KEY, { getAuthHeaders } from ".";

export async function createCommunity(payload: any) {
    const res = await fetch(`${API_KEY}/api/community/create`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(payload)
    });
    return res.json();
}

export async function getCommunityDetail(id: number) {
    const res = await fetch(`${API_KEY}/api/community/${id}`, {
        method: 'GET',
        headers: getAuthHeaders(),
    });
    return res.json();
}

export async function joinCommunity(payload: any, id: number) {
    const res = await fetch(`${API_KEY}/api/comment/join/${id}`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(payload)
    });
    return res.json();
}
