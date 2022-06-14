import React, {useState} from 'react';

export default function Contact() {
    // state variable
    const [data, setData] = useState({
        name:' ',
        email:' ',
        number:' ',
        msg:' '
    })

    const eventhandle = (event) => {
        const {name, value} = event.target;
        setData((previousValue)=>{
            return({
                ...previousValue,
                [name]: value
            })
        })

    }

    const submithandle = (event) => {
        // To prevent the page reload
        event.preventDefault();
        alert(`Your name is ${data.name}, email is ${data.email}, number is ${data.number}, msg is ${data.msg}`);


    }

    return (
        <>
            <div className='contact'>
                <div className="container">
                    <div className="row p-5">
                        <div className="col-12">
                            <h1 className="display-4 text-center text-white">Contact</h1>
                            <hr style={{ color: "#fff" }} />
                        </div>
                    </div>
                    <form className="row g-3 p-5" onSubmit={submithandle}>
                        <div className="col-md-6">
                            <label htmlFor="name" className="form-label text-white" onChange={eventhandle} value={data.name}>Name</label>
                            <input type="text" name="name" className="form-control" id="name" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="email" className="form-label text-white" onChange={eventhandle} value={data.email}>Email</label>
                            <input type="email" name="email" className="form-control" id="email" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="number" className="form-label text-white" onChange={eventhandle} value={data.number}>Phone #</label>
                            <input type="text" name="number" className="form-control" id="number" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="message" className="form-label text-white" onChange={eventhandle} value={data.msg}>Message</label>
                            <textarea name="msg" id="message" cols="30" className="form-control" rows="5"></textarea>
                            
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-outline-light border border-light rounded-pill d-block mx-auto mt-3" >SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
