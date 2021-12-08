const Header = (props) => {
  console.log(props);
  return (
    <div>
      <h2>{props.title}</h2>
    </div>
  );
};

export default Header;
