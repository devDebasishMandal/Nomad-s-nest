import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  postApiStarted,
  postDataSuccess,
  postDataFailure,
} from "../redux/actions/postActions";
import axios from "axios";

const PostApp = () => {
  const { loading, data, error } = useSelector((state) => state);
  console.log(data, loading, error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postApiStarted());
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => dispatch(postDataSuccess(response.data)))
      .catch((err) => dispatch(postDataFailure(err.message)));
  }, []);

  return (
    <div>
      {data.length > 0 &&
        data.map((post) => {
          return (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <h1>{data.length}</h1>
              <br />
            </div>
          );
        })}
    </div>
  );
};

export default PostApp;
