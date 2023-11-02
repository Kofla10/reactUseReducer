import React, {useState} from 'react'
import { useForm } from './useForm'

export const TodoAdd = ({handleNewtodo}) => {
    
    const {description, handleInputChange, handleResetForm } = useForm({
        description: ''
    })
    


    const handleSubmit = (event) => {
        //evitamos la actualización cuando se envia un dato del formulario
        event.preventDefault(); 

        //realizamos la validación para el 
        if(description.length <= 3) return; 
        
        const newTodo = {
            id: new Date().getTime()  ,
            description: description,
            done: false    
        }

        handleNewtodo(newTodo);

        handleResetForm();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                    type="text"
                    placeholder='Que hay que hacer?'
                    className='form-control'
                    name='description'
                    value = {description}
                    onChange={handleInputChange}
                    
                    
            />
            <button
                type='submit'
                className='btn btn-outline-primary mt-1'>
                    Add
            </button>
        </form>
    )
}
