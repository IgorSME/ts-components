export interface IProfile{
    username: string,
    tag: string,
    location: string,
    avatar: string,
    stats: {
        followers: number,
        views: number,
        likes:number
    }
}
export interface IStat{
     stats: {
        id: string,
        label: string,
        percentage:number
    }[]
}


export interface IStatItem{
    label: string,
    percentage:number
}

export interface IStatisticsProps extends IStat{
    title: string,
}
export interface IFriend{
    id: number,
    name: string,
    avatar: string,
    isOnline:boolean
}

export interface IFriendsProps{
    friends:IFriend[]
}

export interface ITransaction{
    id: string,
    type: string,
    amount: string,
    currency:string
}

export interface ITransactionsProps{
    items:ITransaction[]
}
