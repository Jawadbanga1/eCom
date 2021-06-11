import {useState} from 'react'


export default function DropDown () {
    const [typeAdd, setTypeAdd] = useState()

    function dropDownHandler (event) {

    }

    return (
        <form onSubmit={(e) => dropDownHandler(e)}>
            <select >
                {
                    
                }
                <option>bbbb</option>
                <option>Stream</option>
            </select>
            <input type='submit'></input>
        </form>
    )
}