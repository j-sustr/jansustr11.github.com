
//myFunction();


const TYP_SLOUPCE = {
    PRVEK: 'Prvek',
    KOLEKCE_PRVKU: 'KolekcePrvku',
    KOLEKCE_POLI_PRVKU: 'KolekcePoliPrvku',
};

const barvy = [
    'rgba(93, 164, 214, 0.8)',
    'rgba(255, 144, 14, 0.8)',
    'rgba(44, 160, 101, 0.8)',
    'rgba(255, 65, 54, 0.8)',
    'rgba(207, 114, 255, 0.8)',
    'rgba(127, 96, 0, 0.8)',
    'rgba(255, 140, 184, 0.8)',
    'rgba(79, 90, 117, 0.8)',
    'rgba(222, 223, 0, 0.8)'
];

// const tabulkaNazev = document.getElementById('tabulka-nazev');
// const tabulkaPopis = document.getElementById('tabulka-popis');
// const tabulkaData = document.getElementById('tabulka-data');

const vysledkyTestuEl = document.getElementById('vysledky-testu');

getJSON('https://jansustr11.github.io/vysledky-testu-komprimace.json', function (status, data) {

    // zobrazTabulku(data);
    zobrazVysledkyTestu(data, vysledkyTestuEl);
});

function zobrazVysledkyTestu(vysledky, el) {
    const nazevVT = el.getElementsByClassName('nazev')[0];
    const popisVT = el.getElementsByClassName('popis')[0];
    //const parametryVT = el.getElementsByClassName('parametry')[0];
    const tabulkaVT = el.getElementsByClassName('tabulka')[0];

    nazevVT.innerHTML = vysledky.nazev + nazevVT.innerHTML;
    popisVT.innerHTML = vysledky.popis;

    // vysledky.parametry.forEach(function (parametr) {
    //     const radek = parametryVT.insertRow(parametryVT.length);
    //     radek.insertCell(0).innerHTML = parametr.nazev;
    //     radek.insertCell(1).innerHTML = parametr.hodnota;
    // }, this);

    if (vysledky.tabulka.jedenSloupec) zobrazJedenSloupec(vysledky.tabulka, tabulkaVT)
    else zobrazTabulku(vysledky.tabulka, tabulkaVT);
}

function zobrazTabulku(tabulka, el) {

    let plotId = 0;

    const tableEl = el;
    //tableEl.style.width = '100%';
    // tbl.setAttribute('border', '1');
    const thead = document.createElement('thead');
    tableEl.appendChild(thead);
    const tr = document.createElement('tr');
    thead.appendChild(tr);
    const th = document.createElement('th');
    tr.appendChild(th);

    for (let i = 0, len = tabulka.nazvySloupcu.length; i < len; i++) {
        const th = document.createElement('th');
        th.innerHTML = tabulka.nazvySloupcu[i];
        tr.appendChild(th);
    }

    const tbody = document.createElement('tbody');
    tableEl.appendChild(tbody);

    for (let i = 0, len = tabulka.radky.length; i < len; i++) {
        const tr = document.createElement('tr');
        tbody.appendChild(tr);
        const th = document.createElement('th');
        tr.appendChild(th);
        th.appendChild(document.createTextNode(tabulka.radky[i].nazev));

        posledniRadek = tabulka.radky[i];
        for (let j = 0, len2 = posledniRadek.bunky.length; j < len2; j++) {
            const td = document.createElement('td');
            tr.appendChild(td);

            switch (tabulka.typySloupcu[j]) {
                case TYP_SLOUPCE.PRVEK:
                    break;
                case TYP_SLOUPCE.KOLEKCE_PRVKU:
                    break;
                case TYP_SLOUPCE.KOLEKCE_POLI_PRVKU:
                    const plotDiv = document.createElement('div');
                    td.appendChild(plotDiv);
                    zobrazBoxPlot(posledniRadek.bunky[j], tabulka.nazvySloupcu[j], plotId++, plotDiv);
                    break;
            }

            //i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;

        }

    }
}

function zobrazJedenSloupec(tabulka, el) {
    let plotId = 0;

    const tableEl = el;
    //tableEl.style.width = '100%';
    // tbl.setAttribute('border', '1');
    // const thead = document.createElement('thead');
    // tableEl.appendChild(thead);
    // const tr = document.createElement('tr');
    // thead.appendChild(tr);
    // const th = document.createElement('th');
    // tr.appendChild(th);
    // th.innerHTML = '1 sloupec';

    const tbody = document.createElement('tbody');
    tableEl.appendChild(tbody);

    for (let i = 0, len = tabulka.radky.length; i < len; i++) {
        const tr = document.createElement('tr');
        tbody.appendChild(tr);
        // const th = document.createElement('th');
        // tr.appendChild(th);
        // th.appendChild(document.createTextNode(tabulka.radky[i].nazev));

        const td = document.createElement('td');
        tr.appendChild(td);

        posledniRadek = tabulka.radky[i];

        switch (tabulka.typyRadku[i]) {
            case TYP_SLOUPCE.PRVEK:
                break;
            case TYP_SLOUPCE.KOLEKCE_PRVKU:
                break;
            case TYP_SLOUPCE.KOLEKCE_POLI_PRVKU:
                const nadpis = document.createElement('h1');
                td.appendChild(nadpis);
                nadpis.innerHTML = posledniRadek.nazev;
                const plotDiv = document.createElement('div');
                td.appendChild(plotDiv);
                zobrazBoxPlot(posledniRadek.bunky[0], posledniRadek.nazev, plotId++, plotDiv);
                break;
        }
    }
}

function zobrazBoxPlot(kolekce, titulek, plotId, plotDiv) {
    const nazvyK = kolekce.nazvyPoli;
    const delkyK = kolekce.delkyPoli;
    const dataK = kolekce.data;

    plotDivId = `plot-${plotId}`; //'plot' + plotId;
    plotDiv.setAttribute('id', plotDivId);

    let maxPocetKolekci = 3;


    //plotDiv.style.width = (100 + 300 * delkyM.length) + 'px';
    //plotDiv.style.backgroundColor = "red";

    //plotDiv.style.width = '1000px';

    const traces = [];

    let poziceDataK = 0;

    for (let i = 0, len = delkyK.length; i < len; i++) {

        const pole = [];

        for (let j = 0, len2 = delkyK[i]; j < len2; j++) {
            pole.push(dataK[poziceDataK++]);
        }


        // const newTrace = {
        //     y: mnozina,
        //     type: 'box',
        //     name: nazvyM[i],
        //     marker: {
        //         color: barvy[i]
        //     },
        //     boxpoints: 'Outliers'
        // };

        const newTrace = {
            type: 'box',
            y: pole,
            name: nazvyK[i],
            boxpoints: 'all',
            jitter: 0.5,
            whiskerwidth: 0.2,
            fillcolor: 'cls',
            marker: {
                size: 2
            },
            line: {
                width: 2
            }
        }

        traces.push(newTrace);
    }

    let emptyName = '';
    while (traces.length <= maxPocetKolekci) {
        traces.push({ y: [], type: 'box', name: emptyName });
        emptyName += ' ';
    }

    //var data = [trace1, trace2, trace3, trace4];

    const layout = {
        // title: titulek,
        autosize: true,
        width: traces.length * 100,
        height: 800,

        font: {
            size: 14,
            color: '#000'
        },

        // yaxis: {
        //     autorange: true,
        //     showgrid: true,
        //     zeroline: true,
        //     dtick: 5,
        //     gridcolor: 'rgb(255, 255, 255)',
        //     gridwidth: 1,
        //     zerolinecolor: 'rgb(255, 255, 255)',
        //     zerolinewidth: 2
        // },
        xaxis: {
            showgrid: false,
            zeroline: true,
            showline: true,
            gridcolor: '#bdbdbd',
            gridwidth: 2,
            zerolinecolor: '#969696',
            zerolinewidth: 2,
            linecolor: '#636363',
            linewidth: 2
        },
        yaxis: {
            // title: titulek,
            showgrid: true,
            zeroline: true,
            showline: true,
            gridcolor: '#bdbdbd',
            gridwidth: 2,
            zerolinecolor: '#969696',
            zerolinewidth: 3,
            linecolor: '#636363',
            linewidth: 2,
            tickfont: {
                size: 18,
            },
        },
        margin: {
            l: 150,
            r: 200,
            b: 200,
            t: 50
        },
        paper_bgcolor: 'rgb(240, 240, 240)',
        plot_bgcolor: 'rgb(240, 240, 240)',//'rgb(243, 243, 243)',
        showlegend: false
    };


    Plotly.newPlot(plotDivId, traces, layout);

}

function getJSON(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        var status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send();
};