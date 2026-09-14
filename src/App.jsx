
function App() {

  return (
    <div className="main-container">
      <header className="header-container">
        <div className="header-logo">
          <img src="/images/logo.png" alt="Логотип" width={150} height={150}/>
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



      </main>
    </div>
  );
}

export default App
