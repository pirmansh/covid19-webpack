class ArticleData extends HTMLElement{

    connectedCallback(){
        this.render();
    }
    render(){
        this.innerHTML = `
        <article id="data" class="data-covid">
        <h3>Data terkini COVID-19 di Indonesia</h3>
        <div class="form-data">
             <div class="data data-confirm">
                 <div id="output"></div>
                 <div class="data-content">
                     <i class="fas fa-clipboard-list fa-2x"></i>
                     <p>Total Konfirmasi</p>
                 </div>
             </div>
             <div class="data data-activecare">
                 <div id="activeCare"></div>
                 <div class="data-content">
                     <i class="fas fa-first-aid fa-2x"></i>
                     <p>Dalam Perawatan</p>
                 </div>
             </div>
             <div class="data data-recovered">
                 <div id="recovered"></div>
                 <div class="data-content">
                     <i class="fas fa-smile-beam fa-2x"></i>
                     <p>Sembuh</p>
                 </div>
             </div>
             <div class="data data-deaths">
                 <div id="deaths"></div>
                 <div class="data-content">
                     <i class="fas fa-frown fa-2x"></i>
                     <p>Meninggal</p>
                 </div>
             </div>
        </div>
        </article>
        `;
    }
}

customElements.define('article-data', ArticleData);