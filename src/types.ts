export interface FriendData {
    _id: string
    username: string
    profilePicture: string
    email: string
}

export interface PostData {
    _id?: number
    userId: string
    desc: string
    image?: string
    likes?: string[]
    createdAt?: Date
}

export interface UserDetailData {
    _id?: string
    username: string
    email?: string
    profilePicture?: string
    followings?: number[]
    followers?: number[]
}

export interface UserAuthData {
    username?: string
    email: string
    password: string
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
export type GeneralFriendListResponse = GeneralAPIResponse<FriendData[]>


