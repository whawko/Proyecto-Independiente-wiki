import React from "react";
import Boton from "../atom/Boton";
import { Button } from "react-bootstrap";

interface InfoCardProps {
    titulo: string;
    descripcion: string;
    botonText: string;
    botonTo?: string;
    onBotonClick?: () => void;
}

function InfoCard({titulo,descripcion,botonText,botonTo,onBotonClick}: InfoCardProps) {
    return(
        <div className="card shadow-sm mb-3">
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">{descripcion}</p>

                <Boton
                text={botonText}
                to={botonTo}
                onClick={onBotonClick}
                variant="primary"
                />


            </div>
        </div>
    );



}
export default InfoCard;