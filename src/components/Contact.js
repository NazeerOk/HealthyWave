import React from 'react'

const Contact = () => {
    return (
        
            <div className="contact">
                <form action="">
                    <input required  type="text" placeholder='Name'/>
                    <input required type="text" placeholder='Email'/>
                    <textarea required placeholder='Write your Message'/>
                    <button type="button" className="btn btn-secondary">Send</button>
                </form>
            </div>
        
    )
}

export default Contact
