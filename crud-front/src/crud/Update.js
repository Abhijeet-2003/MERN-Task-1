import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { updateName, getName } from "./api";
import Loading from "./Loading";
import FormElement from "./Form";
import { useParams, useHistory } from "react-router-dom";

const Update = () => {
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);
    const {id} = useParams();
    const history = useHistory();
    const loadName = () => {
        getName(id).then((d) => setName(d.data.name));
    };

    useEffect(() => {
        loadName();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        updateName(id, { name })
         .then((res) => {
            setLoading(false);
            setName("");
            toast.success(`${res.data.name} is updated`);
            history.push("/");
        })
        .catch((err) => {
            setLoading(false);
            if(err.response.status === 400) toast.error(err.response.data);
        });
    };
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="w-50 mx-auto">
                    {loading ? <Loading /> : <h4>Update Name</h4>}
                    <FormElement 
                     handleSubmit={handleSubmit} 
                     name={name} 
                     setName={setName} 
                    />
                </div>
            </div>
        </div>
    );
};

export default Update;