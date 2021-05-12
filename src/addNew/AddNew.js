import {useState} from 'react'
import './addNew.css'
import Dropdown from './DropDown.js'
// import {useSelector, useDispatch} from 'react-redux'

export default function AddNew () {

    const [uploadedImage, setUploadedImage] = useState(null)
    const [uploadedImageArray, setUploadedImageArray] = []

    // const dispatch = useDispatch()
    // const selector = useSelector((state) => state.objsArray)

    function onChangeUploadImage (event) {
        console.log(event.target.files, 'event img')
        setUploadedImage(URL.createObjectURL(event.target.files[0]))
        // setUploadedImageArray(URL.createObjectURL(event.target))
    }

    return (
        <form className='dialogue' onSubmit=''>
            <Dropdown/>
            <input type='file' multiple accept="image/*" onChange={(e) => onChangeUploadImage(e)} className='center-element'/>
            <img className='img-div' src={uploadedImage}/>
            <input type='text' placeholder='Header' className='text-area'/>
            <textarea id='text-area-dialog' placeholder='Description' className='text-area'></textarea>
            <button className='submit-button'>Submit</button>
        </form>
    )
}