// Icons
import eventIcon from './assets/svg/event.svg';
import financeIcon from './assets/svg/finance.svg';
import cafeIcon from './assets/svg/cafe.svg';
import giftIcon from './assets/svg/gift.svg';
import petsIcon from './assets/svg/pets.svg';
import locationIcon from './assets/svg/location.svg';

function App() {
  return (
    <div className="App">
      <div className="App__content">
        <div className="App__content__header">
          <button>
            <span>
              <img src={eventIcon} alt="event icon" title='event icon' />
            </span>
          </button>
          <button>
            <span>
              <img src={financeIcon} alt="finance icon" title='finance icon' />
            </span>
          </button>
          <button className='selected'>
            <span>
              <img src={cafeIcon} alt="cafe icon" title='cafe icon' />
            </span>
          </button>
          <button>
            <span>
              <img src={giftIcon} alt="gift icon" title='gift icon' />
            </span>
          </button>
          <button>
            <span>
              <img src={petsIcon} alt="pets icon" title='pets icon' />
            </span>
          </button>
        </div>
        <div className="App__content__main">
          <div className="App__content__main__header">
            <div className="App__content__main__header__background" />
            <div className='App__content__main__header__text'>
              <h1>Food</h1>
              <p>
                <span>
                  <img src={locationIcon} alt="location icon" title='location icon' />
                </span>
                Madrid
              </p>
            </div>
          </div>
          <ul className="App__content__main__list">
            <li className="App__content__main__list__item">
              <p>Pizza</p>
              <p>17</p>
            </li>
            <li className="App__content__main__list__item">
              <p>Sushi</p>
              <p>9</p>
            </li>
            <li className="App__content__main__list__item">
              <p>Gourmet</p>
              <p>22</p>
            </li>
            <li className="App__content__main__list__item">
              <p>Burger</p>
              <p>14</p>
            </li>
          </ul>
        </div>
      </div>
    </div >
  )
}

export default App
