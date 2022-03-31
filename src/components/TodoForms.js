import React, { useEffect, useRef, useState } from 'react';

const TodoForms = (props) => {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {  //২/ (handleChange) function টি যা লিখা হয়েছে তা input নামক state এ সেট করে দিবে এবং তা input field এ দেখাবে।
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })

        setInput('');
    };
    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                    <input

                        placeholder='Update your item'
                        value={input}
                        name='text'
                        className='todo-input edit'
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <button onClick={handleSubmit} className='todo-button edit'>
                        Update
                    </button>
                </>
            ) : (
                <>
                    <input    //১/ WEB PAGE এ প্রবেশ করার সাথে সাথে কিছু input field এ কিছু লিখলে (handleChange) function  টি call হবে।                       
                        placeholder='Add a todo'
                        value={input}
                        name='text'
                        className='todo-input'
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <button onClick={handleSubmit} className='todo-button'>
                        Add todo
                    </button>
                </>
            )}


        </form>
    );
}

export default TodoForms;