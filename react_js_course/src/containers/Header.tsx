import React from 'react';

const Header: React.FC = () => (
    <div>
        <div><b>reactflix</b> roulette</div>
        <div>FIND YOUR MOVIE</div>
        <form action="">
            <input type="text" name="findMovie" value="" placeholder="What do you want to watch?" required></input>
            <input type="submit" value="SEARCH"></input>
        </form>
    </div>
);

export default Header;
