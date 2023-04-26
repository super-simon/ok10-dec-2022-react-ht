import { Component } from "react";
import { postService } from "../../services/post.service";
import { IPost } from "../../interfaces/post.interface";
import Post from "../../components/Post";
import "./Posts.css";

type Props = {};

type State = {
  posts: IPost[];
};

export default class Posts extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount(): void {
    postService
      .getAll()
      .then((res) => res.data)
      .then((posts) => this.setState({ posts }));
  }

  render() {
    return (
      <>
        <h1>Posts</h1>
        <ul className="post__list">
          {this.state.posts.map((post) => (
            <li key={post.id} className="post__item">
              <Post post={post} />
            </li>
          ))}
        </ul>
      </>
    );
  }
}
