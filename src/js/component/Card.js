import React from "react";

const Card = (props) => {
    return (
        <div class="col-sm-12 col-md-6 col-lg-3">
            <div class="card h-100">
                <img src={props.image} class="card-img-top" alt="Mercedes AMG F1" />
                <div class="card-body pb-5 pt-4">
                    <h4 class="text-center"><b>{props.title}</b></h4>
                    <p class="card-text text-center my-3">{props.description}</p>
                </div>
                <div class="d-flex card-footer justify-content-center">
                    <a href="#" class="btn btn-outline-info">Find Out More!</a>
                </div>
            </div>
        </div>
    )
}

export default Card