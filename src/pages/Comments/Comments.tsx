import { Component } from "react";
import { IComment } from "../../interfaces/comment.interface";

import "./Comments.css";
import { commentService } from "../../services/comment.service";
import Comment from "../../components/Comment";

type Props = {};

type State = {
  comments: IComment[];
};

export default class Comments extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      comments: [],
    };
  }

  componentDidMount(): void {
    commentService
      .getAll()
      .then((res) => res.data)
      .then((comments) => this.setState({ comments }));
  }

  render() {
    return (
      <>
        <h1>Comments</h1>
        <ul className="post__list">
          {this.state.comments.map((comment) => (
            <li key={comment.id} className="post__item">
              <Comment comment={comment} />
            </li>
          ))}
        </ul>
      </>
    );
  }
}
