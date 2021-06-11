import {useState} from 'react'
import './addNew.css'
import Dropdown from './DropDown.js'
import {useSelector, useDispatch} from 'react-redux'
import {addObj} from './actions'
import firebase from "firebase/app"
import 'firebase/firestore'

export default function AddNew () {

    const [uploadedImage, setUploadedImage] = useState(null)
    const [uploadedImageArray, setUploadedImageArray] = []
    const [headerText, setHeaderText] = useState('')
    const [urlPhoto, setUrlPhoto] = useState('')
    const [descriptionText, setdescriptionText] = useState('')
    const [price, setPrice] = useState(null)
    const [toggleType, setToggleType] = useState('Post')

    const dispatch = useDispatch()
    const objsArray = useSelector((state) => state.objsArray)
    console.log(objsArray, 'this array')

    function onChangeUploadImage (event) {
        console.log(event.target.files, 'event img')
        setUploadedImage(URL.createObjectURL(event.target.files[0]))
        // setUploadedImageArray(URL.createObjectURL(event.target))
    }

    function onChangeText (data, type) {
        switch (type) {
            case 'headerText':
                setHeaderText(data.target.value)
                break
            case 'descriptionText':
                setdescriptionText(data.target.value)
                break
            case 'urlPhoto': 
                setUrlPhoto(data.target.value)
            case 'price' : 
                setPrice(data.target.value)
            break
        }
        // setHeaderText({
        //     [type]: data.target.value
        // })
        console.log(headerText, 'headerText', descriptionText, 'descriptionText')
    }

    function selectRadio(e) {
        console.log(e, e.target.value, e.target.id, '>>>>ev')
        // if (e.target.value === selectRadio) 
        setToggleType(e.target.id)
    }

    function onChangeDescription (data) {
        console.log(data.target.value)
    }

    function onSubmitObj (e) {
        e.preventDefault()
        console.log(e, 'onSubmit fired')
        dispatch(addObj({name: headerText, description: descriptionText, image: urlPhoto || uploadedImage}))
        console.log(objsArray, 'after sumbitting obj array')
        // firebase.firestore().collection('Items').doc('toggleType').set({name: headerText, description: descriptionText, id: Math.random()*1000, image: urlPhoto, price: price})
        
        firebase.firestore().collection('Items').doc('toggleType').get().then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
        
        // var db = firebase.firestore()

        // const querySnapshot =  db.collectionGroup('Items').get();
        // querySnapshot.forEach((doc) => {
        // console.log(doc.id, ' => ', doc.data());
        // });

        const db = firebase.firestore();
        // const citiesRef = db.collection('cities');

            
            //  citiesRef.doc('SF').collection('landmarks').doc().set({
            //   name: 'Golden Gate Bridge',
            //   type: 'bridge'
            // });
            //  citiesRef.doc('SF').collection('landmarks').doc().set({
            //   name: 'Legion of Honor',
            //   type: 'museum'
            // });
            //  citiesRef.doc('LA').collection('landmarks').doc().set({
            //   name: 'Griffith Park',
            //   type: 'park'
            // });
            //  citiesRef.doc('LA').collection('landmarks').doc().set({
            //   name: 'The Getty',
            //   type: 'museum'
            // });
            //  citiesRef.doc('DC').collection('landmarks').doc().set({
            //   name: 'Lincoln Memorial',
            //   type: 'memorial'
            // });
            //  citiesRef.doc('DC').collection('landmarks').doc().set({
            //   name: 'National Air and Space Museum',
            //   type: 'museum'
            // });
            //  citiesRef.doc('TOK').collection('landmarks').doc().set({
            //   name: 'Ueno Park',
            //   type: 'park'
            // });
            //  citiesRef.doc('TOK').collection('landmarks').doc().set({
            //   name: 'National Museum of Nature and Science',
            //   type: 'museum'
            // });
            //  citiesRef.doc('BJ').collection('landmarks').doc().set({
            //   name: 'Jingshan Park',
            //   type: 'park'
            // });
            //  citiesRef.doc('BJ').collection('landmarks').doc().set({ 
            //   name: 'Beijing Ancient Observatory',
            //   type: 'museum'
            // });

            
            var items = db.collectionGroup('Items');
            items.get().then((querySnapshot) => {
                // console.log(querySnapshot[0].data(), 'snapshot')
                let tempArr = []
                querySnapshot.forEach((doc) => {
                    console.log(doc.id, ' => ', doc.data());
                    tempArr.push(doc.data())
                })
                return tempArr;
            }).then((resp) => {
                console.log(resp, 'resp p')
            })

//     var docRef = db.collection("cities");

// docRef.get().then((doc) => {
//     if (doc.exists) {
//         console.log("Document data:", doc.data());
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }).catch((error) => {
//     console.log("Error getting document:", error);
// });
        // async getMarker() {
        //     const snapshot = await firebase.firestore().collection('Items').get()
        //     return snapshot.docs.map(doc => console.log(doc.data()), 'doc dat');
        // }
        // getMarker()
    }

    return (
        <div >
            <div className='background-behind-dialogue' />
            <form className='dialogue' onSubmit={onSubmitObj}>
                <div class="switch-toggle switch-holo">
                    <input id="Post" name="state-d" type="radio" onClick={(e) => selectRadio(e)} />
                    <label for="Post" onclick="">Post</label>

                    <input id="Sale" name="state-d" type="radio" onClick={(e) => selectRadio(e)} />
                    <label for="Sale" class="disabled" >Sale</label>

                    <input id="Article" name="state-d" type="radio" onClick={(e) => selectRadio(e)} />
                    <label for="Article" onclick="">Article</label>

                <a></a>
                </div>
                {
                    // <Dropdown/>
                        // <label for="file-submit" class="file-button">
                        //     Import Image
                        //     <input type='file' multiple accept="image/*" onChange={(e) => onChangeUploadImage(e)} id='file-submit' className='center-element'/>
                        // </label>
                }
                {
                    (uploadedImage || urlPhoto) ? <img className='img-div' src={uploadedImage || urlPhoto}/> : null
                    
                }
                <input type='text' placeholder='URL for picture' className='text-area header-text' onChange={(event) => onChangeText(event, 'urlPhoto')} />
                <input type='text' placeholder='Header' className='text-area header-text' onChange={(event) => onChangeText(event, 'headerText')} />
                <textarea placeholder='Description' id='description' className='text-area text-area-dialog' onChange={(event) => onChangeText(event, 'descriptionText')}></textarea>
                {
                    toggleType === 'Sale' ? <input type='number' placeholder='Price' className='text-area header-text' onChange={(event) => onChangeText(event, 'price')} /> : null
                }
                <button className='submit-button'>Submit</button>
                
                <link href="https://cdn.jsdelivr.net/css-toggle-switch/latest/toggle-switch.css" rel="stylesheet" />





            </form>      
        </div>
    )
}