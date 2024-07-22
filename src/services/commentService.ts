import API_KEY from ".";

export async function addComment(payload: any) {
    const res = await fetch(`${API_KEY}/api/comment/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    return res.json();
}

export async function showCommentsByPost(payload: any) {
    const res = await fetch(`${API_KEY}/api/comment/show`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    return res.json();
}

export async function showReplies(payload: any) {
    const res = await fetch(`${API_KEY}/api/comment/replies`, {
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
