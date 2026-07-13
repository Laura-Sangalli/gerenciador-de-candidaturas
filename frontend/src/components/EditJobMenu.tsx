import React from "react";
import '../index.css'

function EditJobMenu(){

    return(
        <div className="editJobMenu">
            <a>
                <button>Editar candidatura</button>
                <button>Excluir candidatura</button>
            </a>
        </div>
    );
}

export default EditJobMenu;