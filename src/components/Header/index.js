import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { searchShows } from '../../store/actions/naruto';
import "./index.css";

const Header = () => {

    const [searchText, setSearchText] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();

    const searchClickHandler = async () => {
        

        setError('');
        console.log('--clicked--')
        try {
            if(searchText.length === 0) {
                setError('Enter some text to search...');
                return;
            }
            console.log(searchText)

            await dispatch(searchShows(searchText));
        } catch (error) {
            setError('Something went wrong with search Query!')
        }
        setSearchText('');
    }

    const onChangeHandler = (e) => {
        setError('');
        setSearchText(e.target.value);
    }
    const handleKeypress = (e) => {
        if (e.keyCode === 13 || e.which === 13) {
            searchClickHandler();
        }
    };

    return ( 
        <div className='outerWrapper'>
            <div className='searchBarWrapper'>
                <input type='text' value={searchText} onKeyPress={handleKeypress} onChange={onChangeHandler} className='searchBox'/>
                <div className='seperator'> </div>
                <button type='submit' className="button" onKeyPress={searchClickHandler} onClick={searchClickHandler} >
                    Go
                </button>
            </div>
            {
                (error.length !== 0) && 
                <div className="errorWrapper">{error}</div>
            }
        </div>
    );
}
 
export default Header;
