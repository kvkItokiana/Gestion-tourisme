import React,{Component} from "react";
import axios from "axios";
import "./assets/css/sb-admin.css";
import "./assets/css/sb-admin.min.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";

import {Link} from "react-router-dom";


class Visiteur extends Component{
    constructor(props) {
        super(props);
        this.state = {
            element: [],
            idVisiteur: "",
            nomVisiteur: "",
      }
      this.lire();
    }
    ChangeID=(event)=>{
        const idVisiteur = event.currentTarget.value;
        console.log(idVisiteur)
        this.setState({idVisiteur:idVisiteur}) 
       
    }
    ChangeNom=(event)=>{
        const nomVisiteur = event.currentTarget.value;
        console.log(nomVisiteur)
        this.setState({nomVisiteur:nomVisiteur}) 
    }
    ChangeDate1=(event)=>{
        const date1 = event.currentTarget.value;
        console.log(date1)
        this.setState({date1:date1}) 
       
    }
    ChangeDate2=(event)=>{
        const date2 = event.currentTarget.value;
        console.log(date2)
        this.setState({date2:date2}) 
       
    }
    refle =()=>{
      window.location.reload(true);
    }
    ajouter =(event)=>{
        event.preventDefault();
        const data = {
            idVisiteur : this.state.idVisiteur,
            nomVisiteur : this.state.nomVisiteur
        }
        axios.post(`http://localhost:8090/ajoutervisiteur/${data.idVisiteur}/${data.nomVisiteur}`,data).then(res=>
        {
            
            let donne = [...this.state.element];
            donne.push(data)
            this.setState({element: donne})
            console.log(donne.data)
        }
        )
    
       
    }
    ajouter1 =(event)=>{
      event.preventDefault();
      const data = {
          
          nomVisiteur : this.state.nomVisiteur
      }
      axios.post(`http://localhost:8090/modifvisiteur/${data.nomVisiteur}`,data).then(res=>
      {
          
          let donne = [...this.state.element];
          donne.push(data)
          this.setState({element: donne})
          console.log(donne.data)
      }
      )
      
  }
    lire=()=>{
    
        axios.get("http://localhost:8090/affichevisiteur").then(res => {
            const element = res.data;
            this.setState({element });
            console.log(element)
          }).catch(error=>console.error(error))
      }
      sup=(id)=>{
        
        axios.post(`http://localhost:8090/supvisiteur/${id}`).then(res => {
            const element = res.data;
            const sup = this.state.element.filter(item=>item.id!==id);
            this.setState({element });
            console.log(sup)
          }).catch(error=>console.error(error))
      }
    render(){
        const data = this.state.element;
        const donne = data.map((ty)=><p key={ty.id} >{ty.nom}</p>)
        const sup=(id)=>{
            
            axios.get(`http://localhost:8090/supvisiteur/${id}`).then(res => {
                const element = res.data;
                const sup = this.state.element.filter(item=>item.id!==id);
                this.setState({element: sup });
                console.log(id)
              }).catch(error=>console.error(error))
              window.location.reload(true);
              
          }
          const modif=(id)=>{
           const data = {
              nomVisiteur : this.state.nomVisiteur
            }
            axios.post(`http://localhost:8090/modifvisiteur/${id}`,data).then(res => {
                const element = res.data;
                const sup = this.state.element.filter(item=>item.id!==id);
                this.setState({element: sup });
                console.log(id)
              }).catch(error=>console.error(error))
              
          }
    
return(
<div>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
    <a class="navbar-brand" href="index.html">Start Bootstrap</a>
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav navbar-sidenav" id="exampleAccordion">
        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
          <Link class="nav-link" to="/visiteur">
            <i class="fa fa-fw fa-dashboard"></i>
            <span class="nav-link-text">Visiteur</span>
          </Link>
        </li>
        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Charts">
          <Link class="nav-link" to="/site">
            <i class="fa fa-fw fa-area-chart"></i>
            <span class="nav-link-text">Site</span>
          </Link>
        </li>
        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Tables">
          <Link class="nav-link" to="/visiter">
            <i class="fa fa-fw fa-table"></i>
            <span class="nav-link-text">Visiter</span>
          </Link>
        </li>
        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
          <Link class="nav-link" to="/date">
            <i class="fa fa-fw fa-dashboard"></i>
            <span class="nav-link-text">Date</span>
          </Link>
        </li>
       
      </ul>
      <ul class="navbar-nav sidenav-toggler">
        <li class="nav-item">
          <a class="nav-link text-center" id="sidenavToggler">
            <i class="fa fa-fw fa-angle-left"></i>
          </a>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle mr-lg-2" id="messagesDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fa fa-fw fa-envelope"></i>
            <span class="d-lg-none">Messages
              <span class="badge badge-pill badge-primary">12 New</span>
            </span>
            <span class="indicator text-primary d-none d-lg-block">
              <i class="fa fa-fw fa-circle"></i>
            </span>
          </a>
          <div class="dropdown-menu" aria-labelledby="messagesDropdown">
            <h6 class="dropdown-header">New Messages:</h6>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">
              <strong>David Miller</strong>
              <span class="small float-right text-muted">11:21 AM</span>
              <div class="dropdown-message small">Hey there! This new version of SB Admin is pretty awesome! These messages clip off when they reach the end of the box so they don't overflow over to the sides!</div>
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">
              <strong>Jane Smith</strong>
              <span class="small float-right text-muted">11:21 AM</span>
              <div class="dropdown-message small">I was wondering if you could meet for an appointment at 3:00 instead of 4:00. Thanks!</div>
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">
              <strong>John Doe</strong>
              <span class="small float-right text-muted">11:21 AM</span>
              <div class="dropdown-message small">I've sent the final files over to you for review. When you're able to sign off of them let me know and we can discuss distribution.</div>
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item small" href="#">View all messages</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle mr-lg-2" id="alertsDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fa fa-fw fa-bell"></i>
            <span class="d-lg-none">Alerts
              <span class="badge badge-pill badge-warning">6 New</span>
            </span>
            <span class="indicator text-warning d-none d-lg-block">
              <i class="fa fa-fw fa-circle"></i>
            </span>
          </a>
          <div class="dropdown-menu" aria-labelledby="alertsDropdown">
            <h6 class="dropdown-header">New Alerts:</h6>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">
              <span class="text-success">
                <strong>
                  <i class="fa fa-long-arrow-up fa-fw"></i>Status Update</strong>
              </span>
              <span class="small float-right text-muted">11:21 AM</span>
              <div class="dropdown-message small">This is an automated server response message. All systems are online.</div>
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">
              <span class="text-danger">
                <strong>
                  <i class="fa fa-long-arrow-down fa-fw"></i>Status Update</strong>
              </span>
              <span class="small float-right text-muted">11:21 AM</span>
              <div class="dropdown-message small">This is an automated server response message. All systems are online.</div>
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">
              <span class="text-success">
                <strong>
                  <i class="fa fa-long-arrow-up fa-fw"></i>Status Update</strong>
              </span>
              <span class="small float-right text-muted">11:21 AM</span>
              <div class="dropdown-message small">This is an automated server response message. All systems are online.</div>
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item small" href="#">View all alerts</a>
          </div>
        </li>
        <li class="nav-item">
          <form class="form-inline my-2 my-lg-0 mr-lg-2">
            <div class="input-group">
              <input class="form-control" type="text" placeholder="Search for..."/>
              <span class="input-group-btn">
                <button class="btn btn-primary" type="button">
                  <i class="fa fa-search"></i>
                </button>
              </span>
            </div>
          </form>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="modal" data-target="#exampleModal">
            <i class="fa fa-fw fa-sign-out"></i>Logout</a>
        </li>
      </ul>
    </div>
  </nav>

  <div className="content-wrapper">
    <div className="container-fluid">
    
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="#">Dashboard</a>
        </li>
        <li className="breadcrumb-item active">Tables</li>
      </ol>
      

<button type="button" class="btn btn-dark" data-toggle="modal" data-target="#myModal">
  Ajouter
</button>

<div class="modal" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">


      <div class="modal-header">
        <h4 class="modal-title">Ajouter</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>

      <form className="col-lg-12" onSubmit={this.ajouter} >  
      
      Entrer  l'id: 
      <input type="text" class="form-control" name="id" onChange={this.ChangeID} /> <br/>
      Entrer  le nom: 
      <input type="text" class="form-control" name="nom" onChange={this.ChangeNom} /> <br/>
        <button class="btn btn-primary"  >Envoyer</button> <br/>
        <p> </p>
      </form>
    

    </div>
  </div>
</div>

<div class="modal" id="myModal1">
      <div class="modal-dialog">
        <div class="modal-content">
    
    
          <div class="modal-header">
            <h4 class="modal-title">Modifier</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>
    
          <form className="col-lg-12" onSubmit={this.ajouter1} >  
      Entrer  le nom: 
      <input type="text" class="form-control" name="nom" onChange={this.ChangeNom} value={this.state.nomVisiteur} /> <br/>
      <button class="btn btn-primary"  >Envoyer</button>
          </form>
        
    
        </div>
      </div>
    </div>

      <div className="card mb-3">
        <div className="card-header">
          <i className="fa fa-table"></i> Data Table Example</div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nom</th>
                  <th>Sup</th>
                  <th>Modif</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                <th>ID</th>
                  <th>Nom</th>
                  <th>Sup</th>
                  <th>Modif</th>
                </tr>
              </tfoot>
              <tbody>
              {this.state.element.map(function(data){
        return(<tr>
            <td>{data.idVisiteur}</td>
            <td>{data.nomVisiteur}</td>
            <td><button class="btn btn-danger"   onClick={()=> sup(data.idVisiteur)} >sup</button></td>
            <td><a class="btn btn-warning" onClick={()=> modif(data.idVisiteur)} data-toggle="modal" data-target="#myModal1" >modif</a></td>
          </tr>)
    })}
                
              </tbody>
            </table>
          </div>
        </div>
        <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
      </div>
    </div>

    <footer className="sticky-footer">
      <div className="container">
        <div className="text-center">
          <small>Copyright © Your Website 2017</small>
        </div>
      </div>
    </footer>

    <a className="scroll-to-top rounded" href="#page-top">
      <i className="fa fa-angle-up"></i>
    </a>

    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
          <div className="modal-footer">
            <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
            <a className="btn btn-primary" href="login.html">Logout</a>
          </div>
        </div>
      </div>
    </div>
    

  </div>
</div>)
    }
}
export default Visiteur;