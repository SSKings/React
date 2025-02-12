import styles from "./EditPost.module.css";

import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { useAuthValue } from "../../context/AuthContext";
import { useUpdateDocument } from "../../hooks/useUpdateDocument";
import { useFetchDocument } from "../../hooks/useFetchDocument";
import { useParams } from "react-router-dom";

const EditPost = () => {
  const { id } = useParams();
  const { document: post } = useFetchDocument("posts", id);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");
  const [formError, setFormError] = useState("");

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setBody(post.body);
      setImage(post.image);
      const textTags = post.tagsArray.join(", ");
      setTags(textTags);
    }
  }, [post]);

  const { user } = useAuthValue();
  const { updateDocument, response } = useUpdateDocument("posts");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    //validate image url
    try {
      new URL(image);
    } catch (error) {
      setFormError("the image needs to be a URL");
    }

    // create the tags array
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

    // check all the values
    if (!title || !image || !tags || !body) {
      setFormError("Please fill in all fields!");
    }

    const data = {
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    };

    updateDocument(id, data);

    //redirect to home page
    navigate("/dashboard");
  };

  return (
    <div className={styles.edit_post}>
      {post && (
        <>
          <h2>Editing Post: {post.title} </h2>
          <p>Change the post data as you wish</p>
          <form onSubmit={handleSubmit}>
            <label>
              <span>Title:</span>
              <input
                type="text"
                name="title"
                required
                placeholder="think of a good title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <label>
              <span>Image URL:</span>
              <input
                type="text"
                name="image"
                required
                placeholder="insert an image that represents the post"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </label>
            <label>
              <p className={styles.preview_title}>Image preview</p>
              <img
                className={styles.image_preview}
                src={image}
                alt={post.title}
              />
            </label>
            <label>
              <span>Content:</span>
              <textarea
                name="body"
                required
                placeholder="insert post content"
                value={body}
                onChange={(e) => setBody(e.target.value)}
              ></textarea>
            </label>
            <label>
              <span>Tags:</span>
              <input
                type="text"
                name="tags"
                required
                placeholder="insert the tags separated by commas"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              />
            </label>
            {!response.loading && <button className="btn">Post</button>}
            {response.loading && (
              <button className="btn" disabled>
                Wait...
              </button>
            )}
            {response.error && <p className="error">{response.error}</p>}
            {formError && <p className="error">{formError}</p>}
          </form>
        </>
      )}
    </div>
  );
};

export default EditPost;
