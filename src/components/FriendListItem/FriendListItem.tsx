import { IFriend } from "types/appTypes";
import { Item, Status, Avatar, Name } from "./FriendListItem.styled";


export const FriendListItem: React.FC<Pick<IFriend, "avatar" | "name" | "isOnline">> = ({ avatar, name, isOnline }) => {
    
    return <Item>
        <Status isonline = {isOnline.toString()}></Status>
        <Avatar src={ avatar} alt="User avatar" width="48" />
        <Name>{ name}</Name>
</Item>
}


