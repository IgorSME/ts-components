import { IProfile } from '../../types/appTypes';
import {
  ProfileItem,
  Description,
  Image,
  StatList,
  StatItem,
  Quantity,
} from './Profile.styled';

export const Profile:React.FC<IProfile> = ({ username, tag, location, avatar, stats })=> {
  return (
    <ProfileItem>
      <Description>
        <Image src={avatar} alt="User avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </Description>

      <StatList>
        <StatItem>
          <span className="label">Followers</span>
          <Quantity>{stats.followers}</Quantity>
        </StatItem>
        <StatItem>
          <span className="label">Views</span>
          <Quantity>{stats.views}</Quantity>
        </StatItem>
        <StatItem>
          <span className="label">Likes</span>
          <Quantity>{stats.likes}</Quantity>
        </StatItem>
      </StatList>
    </ProfileItem>
  );
}


