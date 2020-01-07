import React from 'react';

import './homepage.styles.scss';

const HomePage = () => (
    <React.Fragment>
    <div className='homepage'>
        <div className='directory-meny'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Hats</h1>
                    <span className='subtitle'>shop now</span>
                </div>
            </div>

        </div>
    </div>

<div className='menu-item'>
<div className='content'>
    <h1 className='title'>Jackets</h1>
    <span className='subtitle'>shop now</span>
</div>
</div>

<div className='menu-item'>
<div className='content'>
    <h1 className='title'>Sneakers</h1>
    <span className='subtitle'>shop now</span>
</div>
</div>

<div className='menu-item'>
<div className='content'>
    <h1 className='title'>Womens</h1>
    <span className='subtitle'>shop now</span>
</div>
</div>

<div className='menu-item'>
<div className='content'>
    <h1 className='title'>Men</h1>
    <span className='subtitle'>Shop now</span>
</div>
</div>
</React.Fragment>
);

export default HomePage;