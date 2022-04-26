import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import '../css/Certifications.css';
import {
    Link
} from "react-router-dom";
import Button from '@mui/material/Button';
import { saveAs } from "file-saver";

const Certifications = () => {

    const saveFileVocational = () => {saveAs("/downloads/VocationalTraining.pdf","VocationalDegree.pdf");};
    const saveFileDegree = () => {saveAs("/downloads/degree.pdf","degree.pdf");};
    const saveFileCIW = () => {saveAs("/downloads/CIW.pdf","CIW.pdf");};



    return <div className='parent1 expand-cert'>
        <h1 className='blur-cert'>Certifications</h1>
        <div className='d-flex '>

            <div className="card bg-light mb-3 mt-4 me-4 blur-cert" style={{ maxWidth: "15rem" }}>
                <div className="card-header ">Coding Dojo certificate</div>
                <div className="card-body">
                    <h5 className="card-title fw-bold">Software Development</h5>
                    <p className="card-text m-0"><span className=' fw-bold'>Academy:</span> Coding Dojo</p>
                    <p className="card-text"><span className=' fw-bold'>Location:</span> Online</p>
                    <Button variant="contained" size="small">Download</Button>
                </div>
            </div>

            <div className="card bg-light mb-3 mt-4 me-4 blur-cert" style={{ maxWidth: "15rem" }}>
                <div className="card-header ">CIW certificate</div>
                <div className="card-body">
                    <h5 className="card-title fw-bold blur-cert">HTML5 & CSS3 Specialist</h5>
                    <p className="card-text m-0"><span className=' fw-bold'>Online Cert:</span> CIW</p>
                    <p className="card-text"><span className=' fw-bold'>Location:</span> Online</p>
                    <Button variant="contained" onClick={saveFileCIW} size="small">Download</Button>
                </div>
            </div>

            <div className="card bg-light mb-3 mt-4 me-4 blur-cert" style={{ maxWidth: "15rem" }}>
                <div className="card-header ">Associate's degree</div>
                <div className="card-body">
                    <h5 className="card-title fw-bold">Computer Technician (IT)</h5>
                    <p className="card-text m-0"><span className=' fw-bold'>Univercity:</span>  IEK AKMI</p>
                    <p className="card-text"><span className=' fw-bold'>Location:</span> Thessaloniki Greece</p>
                    <Button variant="contained" onClick={saveFileVocational} size="small">Download</Button>
                </div>
            </div>

        </div>
        
        <div className="card bg-light mb-3 mt-4 blur-cert" style={{ maxWidth: "15rem" }}>
                <div className="card-header ">Technical degree</div>
                <div className="card-body">
                    <h5 className="card-title fw-bold">Computer Technician (IT)</h5>
                    <p className="card-text m-0"><span className=' fw-bold'>School:</span> Second EPAL </p>
                    <p className="card-text"><span className=' fw-bold'>Location:</span> Corfu Greece</p>
                    <Button variant="contained" onClick={saveFileDegree} size="small">Download</Button>
                </div>
            </div>

    </div>

}
export default Certifications


