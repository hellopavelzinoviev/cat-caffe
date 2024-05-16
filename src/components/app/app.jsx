import { GlobalStyle } from "./styles";
import PageWrapper from '../layouts/page-wrapper/page-wrapper';
import starList from "../../mocks/starList";
import gallery from "../../mocks/gallery";

function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper stars={starList} gallery={gallery} />
    </>
  )
}

export default App;
