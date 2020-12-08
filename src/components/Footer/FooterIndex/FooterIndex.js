import React from 'react';
import BottomFooter from '../BottomFooter/BottomFooter';
import TopFooter from '../TopFooter/TopFooter';
import './FooterIndex.css'

const FooterIndex = () => {
    return (
        <div  style={{backgroundColor: 'black', color: 'white', marginBottom : '0px'}}>
            <TopFooter></TopFooter>
            <BottomFooter></BottomFooter>
            
        </div>
    );
};

export default FooterIndex;