import Header from '../../layouts/header/header';
import Footer from '../../layouts/footer/footer';
import MainPage from "../../pages/main-page/main-page";
import BuyPage from "../../pages/buy-page/buy-page";
import { Main } from "./styles";

// Обёртка для контента страниц
function PageWrapper({ children, ...prop }) {
  return (
    <>
      <Header />
      <Main>
        {/* <MainPage {...prop} /> */}
        <BuyPage {...prop} />
      </Main>
      <Footer />
    </>
  );
}

export default PageWrapper;