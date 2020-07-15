// look at the likes on this component. Right now it is hard coded on line 25.
// console.log your props and see what to use so this component will display the correct likes count.
// You will also need to add an onClick event handler that utilizes `likePost` to increase the likes count.
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons'
const dummyData = [
  {
      id: 1,
      username: "philzcoffee",
      thumbnailUrl: 'https://icon2.cleanpng.com/20180320/sqe/kisspng-twitch-computer-icons-streaming-media-youtube-live-tv-twitch-icon-5ab19172461392.001176751521586546287.jpg',
      imageUrl: 'https://images.unsplash.com/photo-1477763858572-cda7deaa9bc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1876&q=80',
      likes: 400,
      timestamp: "July 17th 2017, 12:42:40 pm",
      comments: [
          {
              id: 22,
              username: "philzcoffee",
              text: "We've got more than just coffees!",
          },
          {
              id: 23,
              username: "biancasaurus",
              text: "Looks delicious!",
          },
          {
              id: 24,
              username: "martinseludo",
              text: "Can't wait to try it!",
          },
      ],
  },
  {
      id: 2,
      username: "twitch",
      thumbnailUrl: 'https://icon2.cleanpng.com/20180320/sqe/kisspng-twitch-computer-icons-streaming-media-youtube-live-tv-twitch-icon-5ab19172461392.001176751521586546287.jpg',
      imageUrl: 'https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3750&q=80',
      likes: 4307,
      timestamp: "July 15th 2017, 03:12:09 pm",
      comments: [
          {
              id: 36,
              username: "twitch",
              text: "Epic Street Fighter action here in Vegas!",
          },
          {
              id: 37,
              username: "michaelmarzetta",
              text: "Omg that match was crazy",
          },
          {
              id: 38,
              username: "themexican_leprechaun",
              text: "What a setup",
          },
          {
              id: 39,
              username: "dennis_futbol",
              text: "It that injustice",
          },
      ],
  },
];




const LikeSection = props => {
  // Make sure the parent of LikeSection is passing the right props!
  const { likePost, likeCount, likes, post } = props

  console.log(props)
  return (
    <div>
      <div
        className="like-section"
        key="likes-icons-container"
      >
        <div className="like-section-wrapper">
          <FontAwesomeIcon onClick = {evt => likePost(post)}icon={faHeart} />
        </div>
        <div className="like-section-wrapper">
          <FontAwesomeIcon  icon={faComment} />
        </div>
      </div>
      <p className="like-number">{likeCount}  likes</p>
    </div>
  )
};

export default LikeSection;
