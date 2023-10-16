import css from './Home.module.css';

const Home = () => {
  return (
    <div className={`container ${css.homePage}`}>
      <h1>Welcome to the phonebook APP</h1>
    </div>
  );
};

export default Home;
