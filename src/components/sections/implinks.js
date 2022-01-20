import React from 'react';

export default function Implinks() {
    return (
        <div className='container'>
            <ol class='list-group list-group-numbered' >
                <li class='list-group-item d-flex justify-content-between align-items-start' style={{backgroundColor:'#ffc9bf', border:'1px solid red',borderRadius:'10px'}}>
                    <div class='ms-2 me-auto'>
                        <div class='fw-bold'>
                            <a href='https://mahadbtmahait.gov.in'>MahaDBT</a>
                        </div>
                        https://mahadbtmahait.gov.in
                    </div>
                    <span class='badge bg-primary rounded-pill'>4</span>
                </li>
                <li class='list-group-item d-flex justify-content-between align-items-start'style={{backgroundColor:'#ffc9bf', border:'1px solid red',borderRadius:'10px'}}>
                    <div class='ms-2 me-auto'>
                        <div class='fw-bold'>
                            <a href='https://examform.unipune.ac.in/'>
                                Exam Forms
                            </a>
                        </div>
                        https://examform.unipune.ac.in
                    </div>
                    <span class='badge bg-primary rounded-pill'>3</span>
                </li>
                <li class='list-group-item d-flex justify-content-between align-items-start'style={{backgroundColor:'#ffc9bf', border:'1px solid red',borderRadius:'10px'}}>
                    <div class='ms-2 me-auto'>
                        <div class='fw-bold'>
                            <a href='https://www.onlinesbi.com/sbicollect/icollecthome.htm'>
                               SBI Collect
                            </a>
                        </div>
                        https://www.onlinesbi.com/sbicollect/icollecthome.htm
                    </div>
                    <span class='badge bg-primary rounded-pill'>3</span>
                </li>
            </ol>
        </div>
    );
}
// master on imp links