import svg_author from '../../img/author.svg';
import svg_dic from '../../img/dicoding.svg';

class ArticleOthers extends HTMLElement{
    connectedCallback(){
        this.render();
    }
    render(){
        this.innerHTML = `
        <!--  -->
        <div class="tentang">
         <h2>Tentang Website Ini</h2>
        </div>
        <div class="form-profile">
            <div id="profile" class="profile">
                 <div class="text-profile">
                     <h3>Author</h3>
                 </div>
                 <div id="author" class="author">
                     <div class="pirman">
                         <div class="image">
                             <img src="${svg_author}" alt="svg image">
                         </div>
                         <div class="bio">
                             <p>Pirmansyah</p>
                         </div>
                     </div>
                 </div>
            </div>
            <div class="dts-banner">
                <img src="${svg_dic}" alt="svg image" title="svg from undraw.co">
            </div>
        </div>
        `;
    }
}

customElements.define('article-others', ArticleOthers);