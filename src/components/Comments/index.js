import {Component} from 'react'

import './index.css'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

/*  const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
*/

// Write your code here
const commentsList = []

class Comments extends Component {
  state = {
    finalList: commentsList,
    inputName: '',
    textComment: '',
  }

  changeInput = event => {
    this.setState({inputName: event.target.value})
  }

  changeText = event => {
    this.setState({textComment: event.target.value})
  }

  addComment = () => {
    const {inputName, textComment} = this.state
    const a = {
      name: inputName,
      comment: textComment,
      id: uuidv4(),
      date: new Date(),
      isLiked: false,
    }
    this.setState(prevState => ({
      finalList: [...prevState.finalList, a],
    }))
    this.setState({inputName: '', textComment: ''})
  }

  onDelete = id => {
    this.setState(prevState => ({
      finalList: [...prevState.finalList.filter(each => each.id !== id)],
    }))
  }

  yesLiked = id => {
    this.setState(prevState => ({
      finalList: prevState.finalList.map(each => {
        if (id === each.id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  render() {
    const {finalList, inputName, textComment} = this.state
    return (
      <form>
        <div className="upper">
          <div>
            <h1>Comments</h1>
            <p>Say something about 4.o technologies</p>
            <input
              type="input"
              placeholder="Your Name"
              onChange={this.changeInput}
              value={inputName}
            />
            <br />
            <textarea
              rows="10"
              placeholder="Your Comment"
              cols="30"
              onChange={this.changeText}
              value={textComment}
            />
            <br />
            <button type="button" onClick={this.addComment}>
              Add Comment
            </button>
          </div>
          <div>
            <img
              alt="comments"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            />
          </div>
        </div>
        <hr />
        <div className="comments">
          <p>{finalList.length}</p>
          <p>Comments</p>
        </div>
        <ul>
          {finalList.map(each => (
            <CommentItem
              key={each.id}
              details={each}
              onDelete={this.onDelete}
              yesLiked={this.yesLiked}
            />
          ))}
        </ul>
      </form>
    )
  }
}

export default Comments
