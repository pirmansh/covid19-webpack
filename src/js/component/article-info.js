class ArticleInfo extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }
    connectedCallback(){
        this.render();
    }
    render(){
        this.shadowDOM.innerHTML = `
        <style>
        article.text{
            padding: 40px 0;
            display: flex;
            border-top: 1px solid rgb(243, 243, 243);
        }

        .box {
            transition: box-shadow .5s;
            border-radius:10px;
          }
          .box:hover {
            box-shadow: 0 0 11px rgba(33,33,33,.2); 
          }
        section{
            padding: 20px;
            margin: 10px;
        }
        .header-text{
            font-size: 25px;
            margin-bottom: 13px;
            color: #2c3e50;
        }
        
        section p{
            color: #787D86;
            font-size: 15px;
            line-height: 22px;
        }
        @media screen and (max-width: 768px){
            article.text{
                padding: 20px 0;
            }
            section p{
                font-size: 13px;
            }
        
            /* --- */
            .container{
                padding: 0;
            }
            article.text{
                flex-direction: column;
            }
            .header-text{
                font-size: 20px;
                margin-bottom: 13px;
                color: #2c3e50;
            }
          }
        </style>

        <article id="tentang" class="text">
        <section class="box" title="information from WHO">
             <p class="header-text">Apa itu coronavirus?</p>
             <p>Coronavirus adalah suatu kelompok virus yang dapat menyebabkan penyakit pada hewan atau manusia. Beberapa jenis coronavirus diketahui menyebabkan infeksi saluran nafas pada manusia mulai dari batuk pilek hingga yang lebih serius seperti Middle East Respiratory Syndrome (MERS) dan Severe Acute Respiratory Syndrome (SARS). Coronavirus jenis baru yang ditemukan menyebabkan penyakit COVID-19.</p>
        </section>
        <section class="box" title="information from WHO">
            <p class="header-text">Apa itu COVID-19?</p>
            <p>COVID-19 adalah penyakit menular yang disebabkan oleh jenis coronavirus yang baru ditemukan. Ini merupakan virus baru dan penyakit yang sebelumnya tidak dikenal sebelum terjadi wabah di Wuhan, Tiongkok, bulan Desember 2019.</p>
        </section>
        </article>
        <article>
            <section class="box" title="information from WHO">
                <p class="header-text">Apa saja gejala COVID-19?</p>
                <p>Gejala-gejala COVID-19 yang paling umum adalah demam, rasa lelah, dan batuk kering. Beberapa pasien mungkin mengalami rasa nyeri dan sakit, hidung tersumbat, pilek, sakit tenggorokan atau diare, Gejala-gejala yang dialami biasanya bersifat ringan dan muncul secara bertahap. Beberapa orang yang terinfeksi tidak menunjukkan gejala apa pun dan tetap merasa sehat. Sebagian besar (sekitar 80%) orang yang terinfeksi berhasil pulih tanpa perlu perawatan khusus. Sekitar 1 dari 6 orang yang terjangkit COVID-19 menderita sakit parah dan kesulitan bernapas. Orang-orang lanjut usia (lansia) dan orang-orang dengan kondisi medis yang sudah ada sebelumnya seperti tekanan darah tinggi, gangguan jantung atau diabetes, punya kemungkinan lebih besar mengalami sakit lebih serius. Mereka yang mengalami demam, batuk dan kesulitan bernapas sebaiknya mencari pertolongan medis.</p><br>
            </section>
        </article>
        `
    }
}

customElements.define('article-info', ArticleInfo);