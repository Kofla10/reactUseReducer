// import React, {useState} from 'react'

export const TodoAdd = ({handleNewtodo}) => {
    const [data, setData] = useState({
        mision: ''
    })
    return (
        <form>
            <input
                    type="text"
                    placeholder='Que hay que hacer?'
                    className='form-control'
                    name='mision'
            />
            <button
                onClick={handleNewtodo}
                type='submit'
                className='btn btn-outline-primary mt-1'>
                    Add
            </button>
        </form>
    )
}
