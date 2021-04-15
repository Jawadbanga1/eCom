import React, {SetState} from "react"
import './renderObjs.css'
import apple from '../apple.jpeg'
// import aventusImg from 'https://media.istockphoto.com/photos/red-apple-picture-id184276818?s=612x612'

const arrObjs = [{name:'apple', price: 2, gerne: 'fruit', image: 'https://media.istockphoto.com/photos/red-apple-picture-id184276818?s=612x612'}, {name: 'Aventus', price: 300, gerne: 'fragrance', sex: 'male', tags: ['pineapple', 'ambroxin', 'musk'], image: 'https://image.s5a.com/is/image/saks/0400094449501_NOCOLOR_A1?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0'}, {name:'monster leaf', gerne: 'plant', tags: ['man eating', 'green'], image:'https://arbordayblog.org/wp-content/uploads/2018/06/oak-tree-sunset-iStock-477164218.jpg'}]
const arrObjs1 = [{name:'apple', price: 2, gerne: 'fruit', image: 'https://media.istockphoto.com/photos/red-apple-picture-id184276818?s=612x612'}, {name: 'Aventus', price: 300, gerne: 'fragrance', sex: 'male', tags: ['pineapple', 'ambroxin', 'musk'], image: 'https://image.s5a.com/is/image/saks/0400094449501_NOCOLOR_A1?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0'}, {name:'monster leaf', gerne: 'plant', tags: ['man eating', 'green'], image:'https://arbordayblog.org/wp-content/uploads/2018/06/oak-tree-sunset-iStock-477164218.jpg'}]
const arrObjs2 = [{name:'apple', price: 2, gerne: 'fruit', image: 'https://media.istockphoto.com/photos/red-apple-picture-id184276818?s=612x612'}, {name: 'Aventus', price: 300, gerne: 'fragrance', sex: 'male', tags: ['pineapple', 'ambroxin', 'musk'], image: 'https://image.s5a.com/is/image/saks/0400094449501_NOCOLOR_A1?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0'}, {name:'monster leaf', gerne: 'plant', tags: ['man eating', 'green'], image:'https://arbordayblog.org/wp-content/uploads/2018/06/oak-tree-sunset-iStock-477164218.jpg'}]
const arrObjs3 = [{name:'apple', price: 2, gerne: 'fruit', image: 'https://media.istockphoto.com/photos/red-apple-picture-id184276818?s=612x612'}, {name: 'Aventus', price: 300, gerne: 'fragrance', sex: 'male', tags: ['pineapple', 'ambroxin', 'musk'], image: 'https://image.s5a.com/is/image/saks/0400094449501_NOCOLOR_A1?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0'}, {name:'monster leaf', gerne: 'plant', tags: ['man eating', 'green'], image:'https://arbordayblog.org/wp-content/uploads/2018/06/oak-tree-sunset-iStock-477164218.jpg'}]
var arrTotal = arrObjs.concat(arrObjs1, arrObjs2, arrObjs3)

function RenderObjs () {
    return (
        <div className='div-container'>
            <ul className='container'>
                {
                    arrTotal.map((item)=> {
                        return (
                            <li className='li-class'>
                                <div className='obj-div' className='container-item'>
                                    <img className='img-logo' src={item.image} />
                                    {item.name}
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default RenderObjs;