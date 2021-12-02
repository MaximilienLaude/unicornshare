import React from "react";
import './Form.css'
import NativeSelects from './Select'

const Form = props => {
    return (
        <form >
            <input className="title" placeholder="Titre"/>
            <NativeSelects/>
            <textarea  id="" cols="30" rows="10" placeholder="Descprition"></textarea>
            <input className="" type="file" className="choose"/>
            <input className="" type="submit" value="upload" />
        </form>
    )
}

export default Form;