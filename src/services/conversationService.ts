import API_KEY, { getAuthHeaders } from ".";

export async function createConversation(payload: any) {
    const res = await fetch(`${API_KEY}/api/conversation`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(payload)
    });
    return res.json();
}

export async function getConversationsByUserID(user_id: number) {
    const res = await fetch(`${API_KEY}/api/conversation/all/${user_id}`, {
        method: 'GET',
        headers: getAuthHeaders(),
    });
    return res.json();
}

export async function getConversationDetailByID(id: number) {
    const res = await fetch(`${API_KEY}/api/conversation/${id}`, {
        method: 'GET',
        headers: getAuthHeaders(),
    });
    return res.json();
}

export async function addMessage(payload: any) {
    const res = await fetch(`${API_KEY}/api/conversation/message`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(payload)
    });
    return res.json();
}

export async function addParticipant(payload: any) {
    const res = await fetch(`${API_KEY}/api/conversation/participant`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(payload)
    });
    return res.json();
}

export async function deleteConversation(id: number) {
    const res = await fetch(`${API_KEY}/api/conversation/user`, {
        method: 'DELETE',
        headers: getAuthHeaders(),
    });
    return res.json();
}