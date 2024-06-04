
import React from "react";
import '../styles/CrearCuenta.css';
import imagen from "../Images/MediaHive_icon.png";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

function CrearCuenta() {
  //localStorage.clear();
  const { register, handleSubmit, formState: { errors }} = useForm();
  console.log(errors);
  const navigate = useNavigate();
  const onSubmit = handleSubmit(data => {
    console.log(data)
    if (Object.keys(errors).length === 0) {
      // Si no hay errores, redireccionamos a /Inicio y guardamos el nombre de usuario en localStorage
      const Users = JSON.parse(localStorage.getItem('users')) || [];
      const isUserRegistered = Users.some(user => user.email === data.correoElectronico);
      if (isUserRegistered) {
        return alert('El correo electrónico ya está registrado');
      }

      Users.push({username: data.nombreUsuario, email: data.correoElectronico, password: data.contrasena, profileImage: ''});
      localStorage.setItem('users', JSON.stringify(Users));
      alert('Usuario creado correctamente');

      localStorage.setItem('username', data.nombreUsuario);
      localStorage.setItem('email', data.correoElectronico);
      localStorage.setItem('password', data.contrasena);
      localStorage.setItem('profileImage', '');

      navigate(`/Inicio/${data.nombreUsuario}`);
      
    }
  })

  return (
    <div className="content-crear-cuenta">
      <link href='https://fonts.googleapis.com/css?family=Livvic' rel='stylesheet'></link>
      <div className="crear-cuenta-container">
        <h1 style={{fontWeight: 'bold'}}>Crear cuenta nueva</h1>
          <form onSubmit={ onSubmit } className="form-container">
            <div class="info-crearcuenta">
              <label htmlFor="nombreUsuario" className="label-crear-cuenta">Nombre de usuario</label>
              <span class="info-crearcuenta">(Entre 4 y 30 caracteres)</span>
            </div>
            <input
              type="text"
              name="nombreUsuario"
              {...register("nombreUsuario", { 
                required: {
                  value: true, 
                  message: 'Nombre de usuario obligatorio'
                },
                maxLength: {
                  value: 30,
                  message: 'Nombre de usuario demasiado largo'
                },
                minLength: {
                  value: 4,
                  message: 'Nombre de usuario demasiado corto'
                }
              })}
              className="input-crear-cuenta"
            />
            {
              errors.nombreUsuario && <span className='span-crearcuenta'>{errors.nombreUsuario.message}</span>
            }
            <label htmlFor="correoElectronico" className="label-crear-cuenta">Correo electrónico</  label>
            <input
              type="email"
              name="correoElectronico"
              {...register("correoElectronico", { 
                required: {
                  value: true,
                  message: 'Correo electrónico obligatorio'
                },
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: 'Correo no válido'
                }
              })}
              className="input-crear-cuenta"
            />
            {
              errors.correoElectronico && <span className='span-crearcuenta'>{errors.correoElectronico.message}</span>
            }
            <div class="inline-crearcuenta">
              <label htmlFor="contrasena" className="label-contraseña">Contraseña</label>
              <span class="info-crearcuenta">(Entre 4 y 30 caracteres)</span>
            </div>
            <input
              type="password"
              name="contrasena"
              {...register("contrasena", { 
                required: {
                  value: true, 
                  message: 'Contraseña obligatoria'
               },
               minLength: {
                 value: 4,
                 message: 'Contraseña debe tener al menos 4 caracteres'
               },
               maxLength: {
                  value: 30,
                  message: 'Contraseña debe tener menos de 30 caracteres'
               }
              })}
              className="input-crear-cuenta"
            />
            {
              errors.contrasena && <span className='span-crearcuenta'>{errors.contrasena.message}</span>
            }
            
              <button
                type="submit"
                to="/Inicio"
                className="boton-aceptar">
                Aceptar
              </button>
          </form>
      </div>
    </div>
  );
}

export default CrearCuenta;
