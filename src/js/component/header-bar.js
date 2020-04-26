import svg from '../../img/medical_research.svg'

class HeaderBar extends HTMLElement{
    connectedCallback(){
        this.render();
    }
    render(){
        this.innerHTML = `
        <header>
        <!-- Navbar-->
        <nav class="navbar">
           <span id="navbar-toggle">
               <i class="fas fa-bars"></i>
           </span>
           <a href="#" id="logo">COVID-19</a>
           <ul id="main-nav">
               <li>
                   <a href="#data" class="nav-links">Data</a>
               </li>
               <li>
                   <a href="#author" class="nav-links">Author</a>
               </li>
           </ul>
        </nav>
        <div class="jumbotron">
           <div class="banner-text">
               <h3> <span>Update</span> <br> COVID-19</h3>
           </div>
            <div class="banner">
                <img src="${svg}" alt="medical" title="svg from undraw.co">
            </div>
        </div>
        </header>
        
        `;
    }
}

customElements.define('header-bar', HeaderBar);