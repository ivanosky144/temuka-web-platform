import API_KEY from ".";

export async function getUniversityDetail(id: number) {
    const res = await fetch(`${API_KEY}/api/university/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    return res.json();
}

export async function getUniversities() {
    const res = await fetch(`${API_KEY}/api/university`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    return res.json();
}

export async function addReview(payload: any) {
    const res = await fetch(`${API_KEY}/api/review`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    return res.json();
}

export async function getUniversityReviews(id: number) {
    const res = await fetch(`${API_KEY}/api/review/university/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    return res.json();
}