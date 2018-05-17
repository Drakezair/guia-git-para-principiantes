import React, { Component } from 'react';
import './App.css';
import Typist from 'react-typist';
import {Button,Icon, Label} from 'semantic-ui-react';

import logo from './asset/logo.png';


class App extends Component {

  Descargar(url){
    window.open(url);
  }

  render() {

    const WindowsDowload = "https://git-scm.com/download/win"
    const MacDowload = "https://git-scm.com/download/mac"
    const LinuxDowload = "https://git-scm.com/download/linux"
    const Github = "https://www.github.com/drakezair"

    return (
      <div className="App">
        <Label onClick={()=>this.Descargar(Github)} style={{position:"fixed"}} corner='right' size='huge' color='black' >
          <Icon name="github"  />
        </Label>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Typist>
            <h1 className="App-title">Guia basica de git en español</h1>
            <h1 className="App-title" >by CrxwnStudio.</h1>
          </Typist>
        </header>
        <div className="App-quees">
          <h1 style={{fontSize:60}} >¿Que es git?</h1>
          <p style={{fontSize: 40,}} >
            Git es un software de control de versiones diseñado por
            Linus Torvalds, pensando en la eficiencia y la confiabilidad
            del mantenimiento de versiones de aplicaciones cuando éstas tienen
            un gran número de archivos de código fuente.
            <br/>
            <br/>

            Git es una herramienta util, ya que su primordial funcion es permitirnos
            tener una gestion sobre la versiones de nuestro codigo de manera sencilla.
            <br/>
            <fn style={{fontSize:20}}>"es como una maquina del tiempo."</fn>
          </p>
        </div>

        <div className="App-descargar">

          <h1 style={{fontSize: 60}} >Descargar</h1>

          <div style={{marginTop:100}} >
            <Button circular inverted size='massive' onClick={()=>this.Descargar(WindowsDowload)} ><Icon name='windows' />Windows</Button>
            <Button circular inverted size='massive' onClick={()=>this.Descargar(MacDowload)} ><Icon name='apple' />Mac OS X</Button>
            <Button circular inverted size='massive' onClick={()=>this.Descargar(LinuxDowload)} ><Icon name='linux' />Linux</Button>
          </div>

        </div>

        <div className='App-primera'>

          <h1 style={{fontSize:60}} >Primeras configuraciones.</h1>

          <p style={{fontSize: 40,}} >
            Lo primero que debemos hacer la primera vez con git es configurar tu identidad.

            <br/>
            <br/>

            asignaremos nuestro nombre con el comando:

            <br/>

            <code style={{backgroundColor:'#000',color:"lightgreen",fontSize:30}} >$ git config --global user.name "Firulais"</code>

            <br/>
            <br/>

            Luego asignamos nuestro email con el comando:

            <br/>

            <code style={{backgroundColor:'#000',color:"lightgreen",fontSize:30}} >$ git config --global user.email "Firulais@ejemplo.com"</code>

            <br/>

            <fn style={{fontSize:20}}>Ahorira Git sabe quien eres (^_^)</fn>


          </p>

        </div>

        <div className="App-repositorio">

          <h1 style={{fontSize:60}} >Repositorios.</h1>

          <p style={{fontSize: 20,}} >
            Un repositorio es un fichero el cual almacenara las
            versiones de tu codigo.

            <br/>
            <br/>

            - Para iniciar un repositorio ocupamos el comando

            <br/>
            <br/>
            <br/>

            <code style={{backgroundColor:'#000000',color:'lightgreen'}} >$ git init</code>


            <br/>
            <br/>
            <br/>

            Esto generara un fichero listo para almacenar las versiones de nuestro codigo,
            aunque aun esta vacio, aun debemos guardar las versiones de nuestro codigo.

          </p>


        </div>

        <div className="App-commit">

          <h1 style={{fontSize:60}} >Commit.</h1>

          <p style={{fontSize: 20,}} >
            Commit es la confirmacion de un estado, los cuales seran los puntos a los que podremos volver.

            <br/>
            <br/>

            - Para iniciar un repositorio ocupamos el comando

            <br/>
            <br/>
            <br/>

            <code style={{backgroundColor:'#000000',color:'lightgreen'}} >$ git add .</code>


            <br/>
            <br/>
            <br/>

            Este comando añadira todos los cambios realizados al "Staging area".

            <br/>
            <br/>
            <br/>


            <code style={{backgroundColor:'#000000',color:'lightgreen'}} >$ git commit -m "Mi Primer Commit"</code>


            <br/>
            <br/>
            <br/>

            Este comando realizara el commit y lo enviara al repositorio.


            <br/>
            <br/>
            <br/>


            <code style={{backgroundColor:'#000000',color:'lightgreen'}} >$ git log</code>


            <br/>
            <br/>
            <br/>

            Con este ultimo veremos todo los commit en el repositorio.

          </p>


        </div>

        <div className="App-workin">

          <h1 style={{fontSize:60}} >Working areas</h1>


          <p style={{fontSize: 20,}} >
            Por ultimo una breve explicacion del working area, el cual es los diferentes estado por que pasan los archivos para llegar al repositorio.
          </p>
          <br/>
          <br/>
          <br/>

          <img style={{width: '50%',margin: 100}} src={require('./asset/working.png')} />

          <br/>
          <br/>
          <br/>

          <p style={{fontSize: 20,color:"#fbfe7f"}} >
            "Enciende los motores Mc'fly."
          </p>

        </div>

      </div>
    );
  }
}


export default App;
