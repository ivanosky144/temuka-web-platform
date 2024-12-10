import API_KEY, { getAuthHeaders } from ".";

export async function createPost(payload: any) {
    const res = await fetch(`${API_KEY}/api/post`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(payload)
    });
    return res.json();
}

export async function getTimelinePosts(id: number) {
    const res = await fetch(`${API_KEY}/api/post/timeline/${id}`, {
        method: 'GET',
        headers: getAuthHeaders(),
    });
    return res.json();
}

export async function likePost(payload: any, id: number) {
    const res = await fetch(`${API_KEY}/api/post/like/${id}`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(payload)
    });
    return res.json();
}

export async function deletePost(id: number) {
    const res = await fetch(`${API_KEY}/api/post/${id}`, {
        method: 'DELETE',
        headers: getAuthHeaders(),
    });
    return res.json();
}

export async function updatePost(id: number, payload: any) {
    const res = await fetch(`${API_KEY}/api/post/${id}`, {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: JSON.stringify(payload)
    });
    return res.json();
}

export async function getPostDetail(id: number) {
    const res = await fetch(`${API_KEY}/api/post/${id}`, {
        method: 'GET',
        headers: getAuthHeaders(),
    });
    return res.json();
}