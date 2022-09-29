import React from 'react';
import {Input} from "antd";

const FormElement = ({handleSubmit, name, setName}) => (
    <form onSubmit={handleSubmit}>
        <div className="form-group">
            <Input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange= {(e) => setName(e.target.value)}
                style={{ width: "50%" }}
                autoFocus
                required
            />
            <br />
            <div className=''>
                <button className="btn text-primary fw-bold mt-2 me-3">SUBMIT</button>
                <button className="btn text-danger fw-bold mt-2" onClick={() => setName("")}>CANCEL</button>
            </div>
            
        </div>
    </form>
);

export default FormElement;