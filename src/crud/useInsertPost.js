import { useMutation } from "@apollo/client";
import { getPost } from "../graphql/query";
import { InsertPost } from "../graphql/mutation";

export default function useInsertPost() {
  const [insertPost, { loading: loadingInsert }] = useMutation(InsertPost, {
    refetchQueries: [getPost],
  });

  return { insertPost, loadingInsert };
}
