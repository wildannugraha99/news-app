import { createContext, useState } from "react";
import { BackTop } from "antd";
import { BrowserRouter } from "react-router-dom";
import RadioComponentNegara from "./shared/components/radio/radio-list-negara";
import Accordion from "./shared/components/accordion/accordion";
import Header from "./shared/components/header/header";

import { LIST_NEGARA, LIST_KATEGORI } from "./assets/constants/filter.const";
import News from "./pages/components/news/news";
import RadioComponentKategori from "shared/components/radio/radio-list-kategori";
import Footer from "shared/components/footer/footer";

import "assets/style/App.scss";

export const myContext = createContext(null);

function App() {
  const [theme, setTheme] = useState(false);

  return (
    <BrowserRouter>
      <myContext.Provider value={{ theme, setTheme }}>
        <div className={theme ? "darkmode" : "App"}>
          <Header
            title="Portal Berita"
            subtitle="Baca berita dari berbagai sumber"
            back={false}
          />
          <div className="main-content">
            <div className="accordion-wrapper">
              <Accordion title="Negara">
                <RadioComponentNegara dataNegara={LIST_NEGARA} />
              </Accordion>

              <Accordion title="Kategori">
                <RadioComponentKategori dataKategori={LIST_KATEGORI} />
              </Accordion>
            </div>

            <div className="news-wrapper">
              <News />
            </div>
          </div>
          <BackTop />
          <Footer />
        </div>
      </myContext.Provider>
    </BrowserRouter>
  );
}

export default App;
