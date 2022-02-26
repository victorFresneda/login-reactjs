


import React, { useState } from 'react'
import { Input } from './components/Input/Input';
import { Label } from './components/Label/Label';
import { Title } from './components/Title/Title';

import'./Login.css'


export const Login = () => {

      const [user, setUser] = useState('');
      const [password, setPassword] = useState('');
      const [passwordError, setpassWordError] = useState(false);
      const [isLogin, setIsLogin] = useState(false);
      const [hasError, setHasError] = useState(false);

      function handleChange(name, value){
          if(name === 'usuario'){

              setUser(value);
              setHasError(false);

          }else{
              if(value.length < 6){
                setpassWordError(true);
                setHasError(false);
              }else{
                setpassWordError(false)
                setPassword(value);
                setHasError(false);
              }
          }
      }

      function ifMatch( param ){
        if(param.user.length > 0 && param.password.length > 0 ){
          if(param.user === 'Victor' && param.password === '1234567'){
            const {user, password} = param;
            let ac = {user, password};
            let account = JSON.stringify(ac);
            localStorage.setItem('account', account )
            setIsLogin(true);
          }else{
            setIsLogin(false);
            setHasError(true);
          }
        }else{
          setIsLogin(false);
          setHasError(true);
        }


      }

      function handleSubmit(){
        let account = {user, password }
        if(account){
          ifMatch(account);
        }
      }

      
  return (
    
    <div className='login-container'>
        { isLogin ?

          <div className='home-container'>
              <h1>¡Hola, {user}! </h1>
              <label> Felicitaciones estas loguedo </label>
          </div>
            
          :
        <div className='login-content'>
             <Title text='¡Bienvenido!' />

             {hasError &&
               <label
               className='label-alert'>
                 Su contraseña o usuario son incorrectas o no existen en nuestra plataforma
               </label>
             }


             <Label text='Usuario'/>
             <Input 
             attribute={{
               id: 'usuario',
               name: 'usuario',
               type: 'text',
               placeholder: 'Ingrese su usuario'
             }}
               handleChange={handleChange}
             />
             <Label text='Contraseña'/>
             <Input 
             attribute={{
               id: 'contraseña',
               name: 'contraseña',
               type: 'password',
               placeholder: 'Ingrese su contraseña'
             }}
               handleChange={handleChange}
               param={passwordError}
             />

             { passwordError &&
                 <label className='label-error'>
                 Contraseña invalidad o incompleta
                 </label>
             }

              <button
              className='submit-button' 
              onClick={handleSubmit}>
                Ingresar
              </button>
        </div>
        }
           
    </div>
        
  )
};
