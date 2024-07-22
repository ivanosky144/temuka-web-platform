import API_KEY from ".";

export async function inviteRequest(payload: any) {
    const res = await fetch(`${API_KEY}/api/moderator/invite`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    return res.json();
}
