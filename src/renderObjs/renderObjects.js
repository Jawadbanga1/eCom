import React, {SetState} from "react"
import './cssObjsComp.css'
import apple from '../apple.jpeg'
import Obj from './Obj'
// import aventusImg from 'https://fimgs.net/mdimg/perfume/375x500.46066.jpg'

const arrObjs = [{name:'Apple', price: 2, gerne: 'fruit', image: 'https://fimgs.net/mdimg/perfume/375x500.46066.jpg'}, {name: 'Aventus', price: 300, gerne: 'fragrance', sex: 'male', tags: ['pineapple', 'ambroxin', 'musk'], image: 'https://image.s5a.com/is/image/saks/0400094449501_NOCOLOR_A1?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0'}, {name:'monster leaf', gerne: 'plant', tags: ['man eating', 'green'], image:'https://arbordayblog.org/wp-content/uploads/2018/06/oak-tree-sunset-iStock-477164218.jpg'}]
const arrObjs1 = [{name:'apple', price: 2, gerne: 'fruit', image: 'https://mypizzacorner.com/wp-content/uploads/2020/12/neapolitan-pizza-authentic.jpg?ezimgfmt=ng:webp/ngcb13'}, {name: 'Aventus', price: 300, gerne: 'fragrance', sex: 'male', tags: ['pineapple', 'ambroxin', 'musk'], image: 'https://image.s5a.com/is/image/saks/0400094449501_NOCOLOR_A1?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0'}, {name:'monster leaf', gerne: 'plant', tags: ['man eating', 'green'], image:'https://arbordayblog.org/wp-content/uploads/2018/06/oak-tree-sunset-iStock-477164218.jpg'}]
const arrObjs2 = [{name:'apple', price: 2, gerne: 'fruit', image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'}, {name: 'Aventus', price: 300, gerne: 'fragrance', sex: 'male', tags: ['pineapple', 'ambroxin', 'musk'], image: 'https://image.s5a.com/is/image/saks/0400094449501_NOCOLOR_A1?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0'}, {name:'monster leaf', gerne: 'plant', tags: ['man eating', 'green'], image:'https://arbordayblog.org/wp-content/uploads/2018/06/oak-tree-sunset-iStock-477164218.jpg'}]
const arrObjs3 = [{name:'apple', price: 2, gerne: 'fruit', image: 'https://fimgs.net/mdimg/perfume/375x500.46066.jpg'}, {name: 'Aventus', price: 300, gerne: 'fragrance', sex: 'male', tags: ['pineapple', 'ambroxin', 'musk'], image: 'https://image.s5a.com/is/image/saks/0400094449501_NOCOLOR_A1?wid=984&hei=1312&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0'}, {name:'monster leaf', gerne: 'plant', tags: ['man eating', 'green'], image:'https://arbordayblog.org/wp-content/uploads/2018/06/oak-tree-sunset-iStock-477164218.jpg'}]
var arrTotal = arrObjs.concat(arrObjs1, arrObjs2, arrObjs3)

function RenderObjs () {
    return (
        <div className='objs-container'>
            {
                arrTotal.map((item,index) => {
                    return (
                        <Obj item={item}/>
                    )
                })

            }
        </div>
    )
}

export default RenderObjs;