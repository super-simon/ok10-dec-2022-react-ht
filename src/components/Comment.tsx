import { Component } from "react";
import { IComment } from "../interfaces/comment.interface";

type Props = {
  comment: IComment;
};

export default class Comment extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { id, postId, name, email, body } = this.props.comment;
    return (
      <>
        <div>{`id: ${id}`}</div>
        <div>{`postId: ${postId}`}</div>
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{body}</p>
      </>
    );
  }
}
