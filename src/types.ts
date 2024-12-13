import internal from "stream"

export interface FollowersData {
    ID: string
    Username: string
    ProfilePicture: string
    Email: string
}

export interface ProfileID {
    ID: number
}

export interface CommunityCardData {
    ID?: any
    Name: string
    Slug: string
    Description: string
    MembersCount: number
    LogoPicture: string
    CoverPicture: string
}

export interface CommunityData {
    ID?: any
    Name: string
    Description: string
    Rules: string
    PostCount: number
    MemberCount: number
    LogoPicture: string
    CoverPicture: string
}

export interface PostData {
    ID?: any
    UserID: number
    Title: string
    Description: string
    Image?: string
    Upvote?: string[]
    Comments?: number
    CreatedAt: Date
    UpdatedAt: Date
}

export interface PostCommentData {
    ID?: any
    Username: string
    Userphoto: string
    PostID: number
    Content: string
    Votes: number
    CreatedAt: Date
    UpdatedAt: Date
}

export interface CommentData {
    ID?: any
    UserID: number
    ParentID: number
    PostID: number
    Content: string
    Votes: number
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

export interface TuitionFee {
    Min: number
    Max: number
}

export interface UniversityData {
    ID?: number
    Name: string
    Slug: string
    Summary: string
    Website: string
    TotalReviews: number
    TotalMajors: number
    Logo: string
    Address: string
    Stars: number
    Type: string
    Accreditation: string
    Tuition: TuitionFee
    AcceptanceRate: number
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
export type GeneralUniversitiesResponse = GeneralAPIResponse<UniversityData[]>

