import gql from "graphql-tag";

export const InsertPost = gql`
  mutation MyMutation($object: antonio_post_insert_input!) {
    insert_antonio_post_one(object: $object) {
      id
    }
  }
`;

export const UpdatePost = gql`
  mutation MyMutation($id: Int = 10, $title: String!) {
    update_antonio_post_by_pk(
      pk_columns: { id: $id }
      _set: { title: $title }
    ) {
      id
    }
  }
`;

export const DeletePost = gql`
  mutation MyMutation($id: Int!) {
    delete_antonio_post_by_pk(id: $id) {
      id
    }
  }
`;
