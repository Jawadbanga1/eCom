import React, {SetState} from "react"
import './renderObjs.css'
import apple from '../apple.jpeg'
import {useSelector} from 'react-redux'
// import aventusImg from 'https://media.istockphoto.com/photos/red-apple-picture-id184276818?s=612x612'

const arrObjs = [{name:'apple', price: 2, gerne: 'fruit', image: 'https://fimgs.net/mdimg/perfume/375x500.46066.jpg'}, {name: 'Aventus', price: 300, gerne: 'fragrance', sex: 'male', tags: ['pineapple', 'ambroxin', 'musk'], image: 'https://image.s5a.com/is/image/saks/0400094449501_NOCOLOR_A1?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0'}, {name:'monster leaf', gerne: 'plant', tags: ['man eating', 'green'], image:'https://arbordayblog.org/wp-content/uploads/2018/06/oak-tree-sunset-iStock-477164218.jpg'}]
const arrObjs1 = [{name:'apple', price: 2, gerne: 'fruit', image: 'https://mypizzacorner.com/wp-content/uploads/2020/12/neapolitan-pizza-authentic.jpg?ezimgfmt=ng:webp/ngcb13'}, {name: 'Aventus', price: 300, gerne: 'fragrance', sex: 'male', tags: ['pineapple', 'ambroxin', 'musk'], image: 'https://image.s5a.com/is/image/saks/0400094449501_NOCOLOR_A1?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0'}, {name:'monster leaf', gerne: 'plant', tags: ['man eating', 'green'], image:'https://arbordayblog.org/wp-content/uploads/2018/06/oak-tree-sunset-iStock-477164218.jpg'}]
const arrObjs2 = [{name:'apple', price: 2, gerne: 'fruit', image: 'https://fimgs.net/mdimg/perfume/375x500.46066.jpg'}, {name: 'Aventus', price: 300, gerne: 'fragrance', sex: 'male', tags: ['pineapple', 'ambroxin', 'musk'], image: 'https://image.s5a.com/is/image/saks/0400094449501_NOCOLOR_A1?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0'}, {name:'monster leaf', gerne: 'plant', tags: ['man eating', 'green'], image:'https://arbordayblog.org/wp-content/uploads/2018/06/oak-tree-sunset-iStock-477164218.jpg'}]
const arrObjs3 = [{name:'apple', price: 2, gerne: 'fruit', image: 'https://fimgs.net/mdimg/perfume/375x500.46066.jpg'}, {name: 'Aventus', price: 300, gerne: 'fragrance', sex: 'male', tags: ['pineapple', 'ambroxin', 'musk'], image: 'https://image.s5a.com/is/image/saks/0400094449501_NOCOLOR_A1?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0'}, {name:'monster leaf', gerne: 'plant', tags: ['man eating', 'green'], image:'https://arbordayblog.org/wp-content/uploads/2018/06/oak-tree-sunset-iStock-477164218.jpg'}]
var arrTotal = arrObjs.concat(arrObjs1, arrObjs2, arrObjs3)

function RenderObjs () {

    const objsArray = useSelector((state) => state.objsArray)
    console.log(objsArray, 'renderObjs')
    return (
        <div className='div-container'>
            {
                // <div className='div-container'>

                // <ul className='container'>
                //     {
                //         // arrTotal.map((item)=> {
                //         //     return (
                //         //         <div className='li-class' >
                //         //             <li className='container-item'>
                //         //                 <div className='obj-div' >
                //         //                     <img className='img-logo' src={item.image} />
                //         //                 </div>
                //         //                     <span className='span-name'>{item.name}</span>
                //         //             </li>
                //         //             <div id='hexagon'></div>
                //         //         </div>
                //         //     )
                //         // })
                //     }
                // </ul>
            }
                <div className='container-grid'>

                {
                    arrTotal.map((item)=> {
                        return (
                                <div className='container-item'>
                                    <div className='obj-div' >
                                        <img className='img-logo' src={item.image} />
                                    </div>
                                        <span className='span-name'>{item.name}</span>
                                </div>
                        )
                    })
                }

                {
                    objsArray.map((item)=> {
                        return (
                                <div className='container-item'>
                                    <div className='obj-div' >
                                        <img className='img-logo' src={item.image} />
                                    </div>
                                        <span className='span-name'>{item.name}</span>
                                </div>
                        )
                    })
                }   
                </div>
        </div>
    )
}

export default RenderObjs;