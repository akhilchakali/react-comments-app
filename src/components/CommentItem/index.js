// Write your code here
import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {details, onDelete, yesLiked} = props
  const {id, name, comment, isLiked, date} = details

  const isLikedUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const isLikedText = isLiked ? 'Liked' : 'Like'

  const deleteList = () => {
    onDelete(id)
  }

  const likedItem = () => {
    yesLiked(id)
  }

  const postedTime = formatDistanceToNow(date)

  return (
    <li className="list">
      <div className="name-div">
        <p className="name-icon">{name[0]}</p>
        <p>{name}</p>
        <p>{postedTime} ago</p>
      </div>
      <p>{comment}</p>
      <div className="like-sec">
        <div className="like-cont">
          <img alt="like" src={isLikedUrl} />
          <button type="button" onClick={likedItem}>
            <p>{isLikedText}</p>
          </button>
        </div>
        <button type="button" onClick={deleteList} data-testid="delete">
          <img
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
