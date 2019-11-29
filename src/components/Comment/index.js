import React, { Component } from 'react';
import CommentItem from '@/components/Comment/CommentItem';

import cssobj from '@/css/comment.css';

class Comments extends Component {
  constructor(props) {
    super(props)
    this.state = {
      commentList : [
        {id: 1,name:'赵大', content: '去另外认可1'},
        {id: 2,name:'钱二', content: '去另外认可2'},
        {id: 3,name:'孙三', content: '去另外认可3'},
        {id: 4,name:'李四', content: '去另外认可4'},
        {id: 5,name:'陈五', content: '去另外认可5'},
      ]
    }
  }

  render() {
    return (
      <div className="comment-wrapper">
        <h1 style={{color: 'red'}}>评论列表</h1>
        <div>
          {
            this.state.commentList.map(comment => <CommentItem {...comment} key={comment.id}/>)
          }
        </div>
      </div>
    );
  }
}

export default Comments;