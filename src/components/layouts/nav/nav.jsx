import Button from "../../ui/button/button";

function Nav() {
  return (
    <nav>
      {/* <Button>Купить билет</Button> */}
      <Button minWidth={260} link="/buy">Купить билет</Button>
    </nav>
  );
}

export default Nav;