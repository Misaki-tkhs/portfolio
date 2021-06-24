// export const PROFILE = [
//   "髙橋 岬",
//   "２０００／０９／０８ 生まれ",
//   "千葉県出身" 
// ];

import React from "react";

export default class SQL extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };

    fetch("http://localhost:4000")
      .then(response => response.json())
      .then(posts => this.setState({ posts }));
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.posts.map(post => (
            <li>
              <p>{post.Name}</p>
              <p>{post.DOB}</p>
              <p>{post.Birthplace}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}