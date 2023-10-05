// import { Button } from 'react-bootstrap'; // TODO: COMMENT IN FOR AUTH
// import { signOut } from '../utils/auth'; // TODO: COMMENT IN FOR AUTH
// import { useAuth } from '../utils/context/authContext'; // TODO: COMMENT IN FOR AUTH
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function Home() {
  // const { user } = useAuth(); // TODO: COMMENT IN FOR AUTH
  const [value, setValue] = useState(0);

  const handleClick = (action) => {
    switch (action) {
      case 'Increment':
        setValue((prevState) => prevState + 1);
        break;
      case 'Decrement':
        setValue((prevState) => prevState - 1);
        break;
      case 'Reset':
        setValue(0);
        break;
      default:
        break;
    }
  };

  const user = { displayName: 'Ryan' }; // TODO: COMMENT OUT FOR AUTH
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1 id="greeting">Hello {user.displayName}! </h1>
      <h1 id="mainText">Count Your Goblin Loot!</h1>
      <h2 id="counterText"><span id="emoji">💰</span> {value}</h2>
      <Button type="button" variant="danger" onClick={() => handleClick('Increment')}>Increment</Button>{' '}
      <Button type="button" variant="danger" onClick={() => handleClick('Decrement')}>Decrement</Button>
      <Button type="button" variant="danger" onClick={() => handleClick('Reset')}>Reset</Button>
    </div>
  );
}

export default Home;
