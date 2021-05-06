import React, { useEffect, useState } from 'react'


function ChangePage({ currentPage, setCurrentPage, limitPage }) {

    function createSmallMapArray(limitPage){
        let listaMap=[]
        if (limitPage< 11){
            for(let i=0; i<limitPage;i++)
            listaMap.push(i)
            return listaMap 
        }
        else{
            return listaMap=[0,1,2,3,4,5,6,7,8,9,10]
        }

    }
    

    function arrPages(currentPage, limitPage){
        let arrPage=[];
        if(limitPage>11){
            if(currentPage === 1){arrPage = [currentPage+1]}
            else if(currentPage === limitPage){arrPage = [limitPage-1]}
            else{arrPage = [currentPage]}
            for(let i = 0; i < 8; i++){
            if(arrPage[0] > 2 && arrPage[0] > currentPage-4){arrPage.unshift(arrPage[0]-1)}
            else if(arrPage[arrPage.length-1] < limitPage-1){arrPage.push(arrPage[(arrPage.length-1)]+1)}
            else{arrPage.unshift(arrPage[0]-1)}
            }
            arrPage.unshift(1)
            arrPage.push(limitPage)
            return arrPage 
        }
        else{
            let smallArr = createSmallMapArray(limitPage)
            for(let i = 1; i <= smallArr.length; i++){arrPage.push(i)}
            return arrPage
        }
    }


    return (
        <div className="change-page-div">
            <div className='change-page-option-container'>
                <button onClick={() => {setCurrentPage(currentPage - 1)}} className='change-page-option' disabled={currentPage === 1 ? true : false}>Previous</button>



                {createSmallMapArray(limitPage).map((variable) => {
                    return (
                        <div onClick={() => { setCurrentPage(arrPages(currentPage, limitPage)[variable]) }}
                            className={currentPage === arrPages(currentPage, limitPage)[variable] ? 'change-page-option-selected' : 'change-page-option-num'}>
                            {arrPages(currentPage, limitPage)[variable]}
                        </div>
                    )
                })}


                <button onClick={() => { setCurrentPage(currentPage + 1) }} className='change-page-option' disabled={currentPage === limitPage ? true : false}>Next</button>
            </div>
        </div>
    )
}

export default ChangePage




