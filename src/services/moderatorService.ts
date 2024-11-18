import API_KEY, { getAuthHeaders } from ".";

export async function inviteRequest(payload: any) {
    const res = await fetch(`${API_KEY}/api/moderator/invite`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(payload)
    });
    return res.json();
}
