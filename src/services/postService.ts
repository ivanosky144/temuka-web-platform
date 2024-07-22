import API_KEY from ".";

export async function createPost(payload: any) {
    const res = await fetch(`${API_KEY}/api/post/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    return res.json();
}

export async function getTimelinePosts(userId: number) {
    const res = await fetch(`${API_KEY}/api/post/timeline/${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    return res.json();
}

export async function likePost(payload: any, id: number) {
    const res = await fetch(`${API_KEY}/api/post/like/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    return res.json();
}

export async function deletePost(id: number) {
    const res = await fetch(`${API_KEY}/api/post/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    return res.json();
}

export async function updatePost(id: number, payload: any) {
    const res = await fetch(`${API_KEY}/api/post/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    return res.json();
}

export async function getPostDetail(id: number) {
    const res = await fetch(`${API_KEY}/api/post/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    return res.json();
}