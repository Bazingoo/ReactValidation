import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

const App = () =>{

  const [login, setLogin] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loginIn, setLoginIn] = useState(false)
  const [emailIn, setEmailIn] = useState(false)
  const [passwordIn, setPasswordIn] = useState(false)
  
  const [loginError, setLoginError] = useState('Поле не може бути пустим')
  const [emailError, setEmailError] = useState('Поле не може бути пустим')
  const [passwordError, setPasswordError] = useState('Поле не може бути пустим')

  const [formValid, setFormValid] = useState(false)

  useEffect(() => {
    if (loginError || emailError|| passwordError){
      setFormValid(false)
    } else{
      setFormValid(true)
    }

    }, [loginError, emailError, passwordError])

    const loginHandler = (e) =>{
      setLogin(e.target.value)
        if (e.target.value.length < 5 || e.target.value.length>10){
        setLoginError('Некоректний логін')
      }else{
        setLoginError('')
      }
    }

  const emailHandler = (e) =>{
    setEmail(e.target.value)
    const re = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[A-Za-z]/
    if (!re.test(String(e.target.value).toLowerCase())){
      setEmailError('Некоректний емейл')
    }else{
      setEmailError('')
    }
  }

  const passwordHandler = (e) =>{
    setPassword(e.target.value)
      if (e.target.value.length < 3 || e.target.value.length > 5){
      setPasswordError('Некоректний пароль')
    }else{
      setPasswordError('')
    }
  }

  const blurHandler = (e) =>{
    switch (e.target.name) {
      case 'login':
        setLoginIn(true)
        break
        case 'email':
          setEmailIn(true)
          break
          case 'password':
            setPasswordIn(true)
            break
    }
  }

  return (
    
 <div className="container">
 <div className="row main-form">
 <h1>Реєстрація</h1>
 <form className="">
 
 <div className="form-group">
 <label className="cols-sm-2 control-label">Логін:</label>
 <div className="cols-sm-10">
 <div className="input-group">
 {(loginIn && loginError) && <div style = {{color:'orange'}}>{loginError}</div>}
   <input onChange = {e => loginHandler(e)} value = {login} onBlur = {e => blurHandler(e)} className="form-control"name='login' type="text" placeholder='Введіть свій логін'/>
 </div>
 </div>
 </div>

 <div className="form-group">
 <label className="cols-sm-2 control-label">Емейл:</label>
 <div className="cols-sm-10">
 <div className="input-group">
 {(emailIn && emailError)&&<div style={{color:'orange'}}>{emailError}</div>}
 <input onChange = {e => emailHandler(e)} value = {email} onBlur = {e => blurHandler(e)} className="form-control" name='email' type="text" placeholder='Введіть свій мейл'/>
 </div>
 </div>
 </div>

 <div clasName="form-group">
 <label clasName="cols-sm-2 control-label">Пароль:</label>
 <div className="cols-sm-10">
 <div className="input-group">
 {(passwordIn && passwordError)&&<div style={{color:'orange'}}>{passwordError}</div>}
 <input onChange = {e => passwordHandler(e)} value = {password} onBlur = {e => blurHandler(e)} className="form-control" name='password' type="password" placeholder='Введіть свій пароль'/>
 </div>
 </div>
 </div>

 <div className="form-group ">
 <button class="btn btn-primary btn-lg btn-block login-button" disabled ={!formValid} type= 'submit'>Зареєструвати</button>
 </div>
 
 </form>
 </div>
 </div>
  );
};


export default App;
