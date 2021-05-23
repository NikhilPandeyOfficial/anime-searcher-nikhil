import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import _ from 'lodash';

import Header from './components/Header';
import Card from './components/Card';

import { fetchDefaultShows } from './store/actions/naruto';

import './App.css';

function App() {
  
  const [error, setError] = useState('Error');
  const showArr = useSelector((state) => state.shows);
  const dispatch = useDispatch();

  useEffect(() => {
    const dataLoader = async () => {
      setError('');
      try {
        await dispatch(fetchDefaultShows());
      } catch (error) {
        setError("Error occured in loading data");
      }
    }

    dataLoader();
  }, [dispatch])

  return (
      <div className="App">
        <Header />
        <div className="container">
          {
            (showArr.length !== 0) &&
            _.map(showArr, (show) => (
              <Card key={show["mal_id"]} show={show} />
            ))
          }
          {
            (showArr.length === 0) && 
            <div className="errorWrapper">{error}</div>
          }
        </div>
      </div>
  );
}
 
export default App;
