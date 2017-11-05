
const nazvyVysledku = [
    'test-komprimace-napeti',
    'test-komprimace-proudu',
];

const urlVysledky = 'https://jansustr11.github.io/projekt-komprimace/';

const TYP_SLOUPCE = {
    PRVEK: 'Prvek',
    KOLEKCE_PRVKU: 'KolekcePrvku',
    KOLEKCE_POLI_PRVKU: 'KolekcePoliPrvku',
};

const barvy = [
    { r: 41, g: 54, b: 202 },
    { r: 255, g: 144, b: 14 },
    { r: 44, g: 160, b: 101 },
    { r: 255, g: 65, b: 54 },
    { r: 207, g: 114, b: 255 },
    { r: 93, g: 164, b: 214 },
    { r: 127, g: 96, b: 0 },
    { r: 255, g: 140, b: 184 },
    { r: 79, g: 90, b: 117 },
    { r: 187, g: 150, b: 0 },
    { r: 57, g: 151, b: 19 },
    { r: 255, g: 0, b: 055 },
    { r: 10, g: 10, b: 10 },
    { r: 0, g: 83, b: 4 },
    { r: 182, g: 112, b: 0 },
];

const vysledkyTestuEl = document.getElementById('vysledky-testu');



(function nastavVysledkySelect() {
    const vysledkySelect = document.getElementById('vyber-vysledku-select');

    for (let i = 0; i < nazvyVysledku.length; i++) {
        const newOption = document.createElement('option');
        vysledkySelect.appendChild(newOption);
        newOption.innerHTML = nazvyVysledku[i];
        newOption.setAttribute('value', i);
    }

    vysledkySelect.onchange = (evt) => {
        console.log(evt.target.value);
        const indexNazvu = parseInt(evt.target.value);
        console.log(nazvyVysledku[indexNazvu]);
        nactiVysledkyTestu(nazvyVysledku[indexNazvu]);
    }

})();

function nactiVysledkyTestu(nazev) {
    getJSON(urlVysledky + nazev + '.json', function (status, data) {
        zobrazVysledkyTestu(data, vysledkyTestuEl);
    });

}


getJSON('https://jansustr11.github.io/vysledky-testu-komprimace.json', function (status, data) {

    // zobrazTabulku(data);
    zobrazVysledkyTestu(data, vysledkyTestuEl);
});

function zobrazVysledkyTestu(vysledky, el) {
    const nazevVT = el.getElementsByClassName('nazev')[0];
    const popisVT = el.getElementsByClassName('popis')[0];
    //const parametryVT = el.getElementsByClassName('parametry')[0];
    const tabulkaVT = el.getElementsByClassName('tabulka')[0];

    nazevVT.innerHTML = vysledky.nazev;
    popisVT.innerHTML = vysledky.popis;

    // vysledky.parametry.forEach(function (parametr) {
    //     const radek = parametryVT.insertRow(parametryVT.length);
    //     radek.insertCell(0).innerHTML = parametr.nazev;
    //     radek.insertCell(1).innerHTML = parametr.hodnota;
    // }, this);
    tabulkaVT.innerHTML = '';

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
        // th.appendChild(document.createTextNode(tabulka.radky[i].nazev));
        th.innerHTML = tabulka.radky[i].nazev;

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
        const barva = barvy[i % barvy.length];

        const newTrace = {
            type: 'box',
            y: pole,
            name: nazvyK[i],
            boxpoints: 'all',
            jitter: 0.3,
            whiskerwidth: 0.2,//0.2,
            fillcolor: `rgba(${barva.r},${barva.g},${barva.b},0.5)`,//'cls',
            marker: {
                color: `rgba(${barva.r},${barva.g},${barva.b},1)`,
                size: 4
            },
            line: {
                width: 4
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
        // width: traces.length * 100,
        //height: 700,

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
