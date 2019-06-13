import React from 'react';

const SearchBar = props => {

    return (
        <div className='searchBar'>
            <div className='topLeft'>
                <p className='igLogo'>📷</p>

                <p className='ig'>Instagram</p>
            </div>


            <input

                onChange={props.filterSearch}
                className='search'
                name='search'
                value={props.search}


            >
            </input>



            <div className='icons'>
                <a href='#' className='compass'>◯</a>
                <a href='#' className='hearts'>♡</a>
                <a href='#' className='account'>^_^</a>
            </div>





        </div>
    )


}

export default SearchBar
