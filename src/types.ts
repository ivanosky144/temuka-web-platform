export interface FollowersData {
    ID: string
    Username: string
    ProfilePicture: string
    Email: string
}

export interface ProfileID {
    ID: number
}

export interface PostData {
    ID?: any
    UserID: string
    Title: string
    Description: string
    Image?: string
    Upvote?: string[]
    CreatedAt: Date
    UpdatedAt: Date
}

export interface UserDetailData {
    ID?: string
    Username: string
    Displayname?: string
    Desc?: string
    Email?: string
    ProfilePicture?: string
    Followings?: number[]
    Followers?: number[]
}

export interface UserAuthData {
    Username?: string
    Email: string
    Password: string
}

export interface GeneralAPIResponse<T> {
    status: boolean
    data: T
}

export interface GeneralAPIMutateResponse {
    status: boolean
    message: string
}

export type GeneralUserDetailResponse = GeneralAPIResponse<UserDetailData> 
export type GeneralPostDetailResponse = GeneralAPIResponse<PostData> 
export type GeneralUserRegisterResponse = GeneralAPIResponse<UserAuthData> 
export type GeneralUserLoginResponse = GeneralAPIResponse<UserAuthData> & { token: string }
export type GeneralPostResponse = GeneralAPIResponse<PostData[]>
export type GeneralFollowerListResponse = GeneralAPIResponse<FollowersData[]>


