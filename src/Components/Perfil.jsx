import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import "../styles/Perfil.css";

function Perfil() {
    const { handleSubmit, formState: { errors }, register, setValue } = useForm();
    const navigate = useNavigate();

    const storedUsername = localStorage.getItem('username') || '';
    const storedProfileImage = localStorage.getItem('profileImage') || '';
    
    const [nombreUsuarioTemp, setNombreUsuarioTemp] = useState(storedUsername);
    const [perfilURLTemp, setPerfilURLTemp] = useState(storedProfileImage);

    useEffect(() => {
        setValue('nombreUsuario', storedUsername);
    }, [storedUsername, setValue]);

    const onSubmit = handleSubmit(data => {
        if (Object.keys(errors).length === 0) {
            localStorage.setItem('username', data.nombreUsuario);
            localStorage.setItem('profileImage', perfilURLTemp);
            navigate(`/Inicio/${data.nombreUsuario}`);
        }
    });

    const handleChange = (e) => {
        const file = e.target.files[0];
        const imageURL = URL.createObjectURL(file);
        setPerfilURLTemp(imageURL);
    };

    const handleDeleteProfileImage = () => {
        setPerfilURLTemp('');
    };

    const handleLogout = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('username');
        localStorage.removeItem('username');
        navigate('/Inicio');
    };

    return (
        <div className="seccionPerfil-container">
            <link href='https://fonts.googleapis.com/css?family=Livvic' rel='stylesheet'></link>

            <div className="form-seccionPerfil-container">
                <h1 className="h1-perfil">Perfil de {storedUsername}</h1>

                <form onSubmit={onSubmit} className="form-perfil">

                    {perfilURLTemp !== '' ? <img src={perfilURLTemp} alt="Foto de perfil" className="perfil-image" /> : <AccountBoxIcon style={{ fill: "white" }} class="perfil-image"/>}
                    <div className="inline-group">
                        <label htmlFor="profile-image" className="label-perfil">Seleccionar nueva imagen de perfil:</label>
                        <input type="file" onChange={handleChange} className="seleccionar-imagen-perfil"/>
                    </div>

                    <div className="inline-group">
                        <button type="button" onClick={handleDeleteProfileImage} className="boton-eliminarImagen-perfil">Eliminar imagen de perfil</button>
                    </div>

                    <div className="inline-group">
                        <label htmlFor="username" className="label-perfil">Cambiar nombre de usuario:</label>
                        <input
                            type="text"
                            id="username"
                            {...register("nombreUsuario", {
                                required: {
                                    value: true,
                                    message: 'Nombre de usuario obligatorio'
                                },
                                maxLength: {
                                    value: 20,
                                    message: 'Nombre de usuario demasiado largo'
                                },
                                minLength: {
                                    value: 4,
                                    message: 'Nombre de usuario demasiado corto'
                                }
                            })}
                            className="input-perfil"
                        />
                        {
                            errors.nombreUsuario && <span className='span-crearcuenta'>{errors.nombreUsuario.message}</span>
                        }
                    </div>

                    <div className="inline-button">
                        <button type="button" onClick={handleLogout} className="boton-cerrar-sesion-perfil">Cerrar sesión</button>
                        <button type="submit" className="boton-guardar-perfil">Guardar cambios</button>
                        
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Perfil;