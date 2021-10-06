import gql from "graphql-tag";

export const InsertPost = gql`
  mutation MyMutation($object: antonio_post_insert_input!) {
    insert_antonio_post_one(object: $object) {
      id
    }
  }
`;

export const UpdatePost = gql`
  mutation updatePost($id: Int = 10, $title: String!) {
    update_antonio_post_by_pk(
      pk_columns: { id: $id }
      _set: { title: $title }
    ) {
      id
    }
  }
`;

export const DeletePost = gql`
  mutation aeletePost($id: Int!) {
    delete_antonio_post_by_pk(id: $id) {
      id
    }
  }
`;

export const AddLike = gql`
  mutation addLike($object: antonio_likes_insert_input!) {
    insert_antonio_likes_one(object: $object) {
      id
    }
  }
`;
export const DeleteLike = gql`
  mutation deleteLike($post_id: Int!, $user_id: Int!) {
    delete_antonio_likes(
      where: { post_id: { _eq: $post_id }, user_id: { _eq: $user_id } }
    ) {
      affected_rows
    }
  }
`;
export const AddComment = gql`
  mutation addComment($object: antonio_comment_insert_input!) {
    insert_antonio_comment_one(object: $object) {
      id
    }
  }
`;
export const SignUp=gql``;


export const SignIn = gql``;












