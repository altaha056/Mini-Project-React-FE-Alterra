const ListItem = (props) => {
  const { img, owner_id, title } = props.data;
  return (
    <tbody>
      <tr>
        <td>{img}</td>
        <td>{owner_id}</td>
        <td>{title}</td>
      </tr>
    </tbody>
  );
};

export default ListItem;
