import React, {Component} from "react";

import Projetos from './pages/AreaProjetos';

// import {Menubar} from 'primereact/menubar';
// import Rotas from './Rotas';
// import { RouterProvider, Link } from 'react-router-dom';


class App extends Component {
  render() {
  //   const menuitems = [
  //     {
  //        label:'Home',
  //        //icon:'pi pi-fw pi-home',
  //        command:() => this.props.history.push('/')
  //     },
  //     {
  //        label:'Sobre',
  //        //icon:'pi pi-fw pi-user',
  //        command:() => this.props.history.push('/sobre')
  //     },
  //     {
  //        label:'Contato',
  //        //icon:'pi pi-fw pi-comment',
  //        command:() => this.props.history.push('/contato')
  //     }
  //  ];
    return (
      <>
        <Projetos/>
      </>
      // <div className="App">
      //   <Menubar model={menuitems}/>
      //   <div id="main">
      //       <main>
      //           <div className="content" id="content">
      //               {this.props.children}
      //           </div>
      //       </main>
      //   </div>
      // </div>
    );
  }
}

export default App;