import React from 'react';

export const Counters = () => {
    return (
        <><div class='container'>
            <div className='counter-section' style={{backgroundColor:'cyan', border:'1px solid red',borderRadius:'10px'}}>
                <div className='counter-up'>
                    <div className='content'>
                        <div className ='box'>
                            <div className='icon'>
                                <i className ='fas fa-history'></i>
                            </div>
                            <div className='counter'>5000</div>
                            <div className='text'>STUDENTS</div>
                        </div>
                        <div className='box'>
                            <div className='icon'>
                                <i className ='fas fa-gift'></i>
                            </div>
                            <div className='counter'>500</div>
                            <div className='text'>FACULTY</div>
                        </div>
                        <div className='box'>
                            <div className='icon'>
                                <i className ='fas fa-users'></i>
                            </div>
                            <div className='counter'>400</div>
                            <div className='text'>STAFF</div>
                        </div>
                        <div className='box'>
                            <div className='icon'>
                                <i className ='fas fa-award'></i>
                            </div>
                            <div className='counter'>100</div>
                            <div className='text'>Awards Received</div>
                        </div>
                    </div>
                </div>
            </div></div>
        </>
    );
};
