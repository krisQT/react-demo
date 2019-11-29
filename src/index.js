import React from 'react';
import ReactDOM from 'react-dom';
import Hello from '@/components/Hello'
import Comment from '@/components/Comment';

const arr = [1,2,3,4,5,6]
const arrElement = arr.map((item) => <h1>{item}</h1>)


ReactDOM.render(
  <div>
    <Comment />
    <Hello name="world"/>
    {arrElement}
  </div>,
  document.getElementById('app')
)