import { Container, Title, Text, List} from "./profile.styled"
import PropTypes from "prop-types";

export const Profile = ({ user }) => {
   
  return <Container>
  <div>
    <img
      src={user.avatar}
      alt="User avatar"
        width="150px"
        height="150px"
    />
          <Title>{user.username }</Title>
    <Text>@{user.tag}</Text>
    <Text>{user.location}</Text>
  </div>

  <List >
    <li>
      <Text >Followers</Text>
      <span >{user.stats.followers}</span>
    </li>
    <li>
      <Text>Views</Text>
      <span >{user.stats.views}</span>
    </li>
    <li>
      <Text>Likes</Text>
      <span>{user.stats.likes}</span>
    </li>
  </List>
    </Container>
    
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired
}
}

