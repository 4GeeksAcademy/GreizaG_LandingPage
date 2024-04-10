import React from "react";

const Card = () => {
    return (
        <div class="col">
            <div class="card">
                <img src="https://e00-especiales-marca.uecdn.es/motor/images/formula1/seo/seo-especial2023-mercedes.jpg" class="card-img-top" alt="Mercedes AMG F1" />
                <div class="card-body pb-5 pt-4">
                    <h4 class="text-center"><b>Mercedes AMG F1 Petronas</b></h4>
                    <p class="card-text text-center my-3">Equipo de origen alemán con sedes en Brackley y Brixworth, en Gran Bretaña.</p>
                </div>
                <div class="d-flex card-footer justify-content-center">
                    <a href="#" class="btn btn-outline-info">Find Out More!</a>
                </div>
            </div>
        </div>
    )
}

export default Card