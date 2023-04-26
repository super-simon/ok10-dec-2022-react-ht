import React, { Component } from "react";
import { IPost } from "../interfaces/post.interface";

type Props = {
  post: IPost;
};

export default class Post extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { id, userId, title, body } = this.props.post;
    return (
      <>
        <div>{`id: ${id}`}</div>
        <div>{`userId: ${userId}`}</div>
        <h2>{title}</h2>
        <p>{body}</p>
      </>
    );
  }
}
