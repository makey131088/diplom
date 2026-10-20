
function App() {

  return (
    <div className="main-container">
      <header className="header-container">
        <div className="header-logo">
          <img src="/images/logo.png" alt="Логотип" width={160} height={160}/>
        </div>
        <ul className="header-right">
          <li>
            <search>
              <form action="/search" role="search" method="get" className="search-form">
                <label htmlFor="board-search" className="visually-hidden"></label>
                <input className="search-form-input" type="search" id="board-search" name="q" placeholder="Поиск..." autoComplete="off" required/>
                <button type="submit" aria-label="Найти" className="header-button">
                  <img src="/images/search.png" alt="Поиск" width={40} height={40}/>
                </button>
              </form>
            </search>
          </li>
          <li>
            <button type="button" className="header-button" title="Избранное">
              <img src="/images/izbranoe.png" alt="" aria-hidden="true" width={40} height={40}/>
            </button>
          </li>
          <li>
            <button type="button" className="header-button" title="Вход/Зарегистрироваться">
              <img src="/images/inter.png" alt="" aria-hidden="true" width={40} height={40}/>
            </button>
          </li>
          <li>
            <button type="button" className="header-button" title="Корзина">
              <img src="/images/card.png" alt="" aria-hidden="true" width={50} height={50}/>
            </button>
          </li>
        </ul>
      </header>
      
      <main className="main-content">
        {/* баннер */}
        <section className="banner">
          <div className="info">
            <img src="/images/logo.png" alt="" width={160} height={160} />
              <div className="brands">
                <span className="brand-capita">CAPiTA</span>
                <span className="divider">×</span>
                <span className="brand-union">UNION</span>
              </div>
            <h1 className="title">
              Специализируемся на сноубордах <br />
              Capita и креплениях Union
            </h1>

            <ul className="features">
              <li>
                <img src="/images/shield.png" alt="" aria-hidden="true" />
                <span>Оригинальное оборудование</span>
              </li>
              <li>
                <img src="/images/truck.png" alt="" aria-hidden="true" />
                <span>Доставка по России</span>
              </li>
            </ul>
          </div>
        </section>
        
        {/* {карточки сноубордов и креплений} */}
        <section className="catalog-preview">
          <div className="preview-grid">
            {/* Карточка Сноуборды */}
            <div className="preview-card card-snowboards">
              <div className="preview-content">
                <h3 className="preview-title">Сноуборды</h3>
                <p className="preview-text">
                  Лучшие модели<br />
                  для каждого стиля катания
                </p>
              </div>
            </div>

            {/* Карточка Крепления */}
            <div className="preview-card card-bindings">
              <div className="preview-content">
                <h3 className="preview-title">Крепления</h3>
                <p className="preview-text">
                  Надежность и контроль<br />
                  в каждом спуске
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App
