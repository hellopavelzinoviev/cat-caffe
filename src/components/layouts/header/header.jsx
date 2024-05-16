import Logo from '../../ui/logo/logo';
import Nav from "../../layouts/nav/nav";
import { StyledSection } from "./styles";

// шапка сайта
function Header({
  pageUrl // урл страницы
}) {
  return (
    <StyledSection as="header">
      <Logo />
      <Nav pageUrl={pageUrl} />
    </StyledSection>
  );
}

export default Header;
