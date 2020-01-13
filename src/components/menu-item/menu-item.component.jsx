import React from 'react';

import { withRouter} from 'react-router-dom';

import '../menu-item/menu-item.styles.scss';


const MenuItem = ({title, imageUrl , size , linkUrl,match, history })=>(

    
    <div className={`${size} menu-item`} 
    onClick={()=> history.push(`${match.url}${linkUrl}`)}
     >
    <div 
    className='background-image'
    style={{
        backgroundImage: `url(${imageUrl})`
    }}
    ></div>
    
    <div className='content'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <span className='subtitle'>shop now</span>
    </div>
    
    
    </div>
    
    
    /*
    <div style={{
        backgroundImage:`url(${imageUrl})`
        
    }}className={`${size} menu-item`}>
    <div className='background-image' style={{backgroundImage:`url(${imageUrl})` }} ></div>
    <div className='content'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <span className='subtitle'>shop now</span>
    </div>
    </div>
    */
    
    
    );
    
    export default withRouter(MenuItem);
    
    /*
    <div className={`${size} menu-item`} >
    <div 
    className='background-image'
    style={{
        backgroundImage: `url(${imageUrl})`
    }}
    ></div>
    
    <div className='content'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <span className='subtitle'>shop now</span>
    </div>
    
    
    </div>
    */