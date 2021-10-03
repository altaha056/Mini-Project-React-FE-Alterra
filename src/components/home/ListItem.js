const ListItem = (props) => {
  const { img, username, title } = props.data;
  return (
    <>
      <tr>
        <td>{img}</td>
        <td>{username}</td>
        <td>{title}</td>
      </tr>
    </>
  );
};

export default ListItem;
