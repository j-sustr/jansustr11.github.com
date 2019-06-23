const isin = (a, b) => a.includes(b);
const isSA = (c) => /[aáeéiíoóuú]/.test(c);
const isZPS = (c) => /[bdďgzžvhCČ]/.test(c);
const isNPS = (c) => /[ptťksšfXcč]/.test(c);
const isJS = (c) => /[mnňljrř]/.test(c);
const isSEP = (c) => /[ \.,]/.test(c);

const pZPS = (c) => {
    switch (c) {
        case 'b': return 'p';
        case 'd': return 't';
        case 'ď': return 'ť';
        case 'g': return 'k';
        case 'v': return 'f';
        case 'z': return 's';
        case 'ž': return 'š';
        case 'h': return 'X';
        case 'C': return 'c';
        case 'Č': return 'č';
        default: return;
    }
}

const pNPS = (c) => {
    switch (c) {
        case 'p': return 'b';
        case 't': return 'd';
        case 'ť': return 'ď';
        case 'k': return 'g';
        case 'f': return 'v';
        case 's': return 'z';
        case 'š': return 'ž';
        case 'X': return 'h';
        case 'c': return 'C';
        case 'č': return 'Č';
        default: return;
    }
}

function g2p (g='', sep=false) {
    const p = [];
    g = g.replace(/-/g, '');
    g = g.toLowerCase();
    //g = g.replace(/[^\w\s]/, '');
    g = g.replace(/\s+/g, '');
    g = g.trim();
    g = `  ${g}  `;

    g = g.replace(/cc/g, 'c')
    g = g.replace(/čč/g, 'č')
    g = g.replace(/dd/g, 'd')
    g = g.replace(/jj/g, 'j')
    g = g.replace(/kk/g, 'k')
    g = g.replace(/ll/g, 'l')
    g = g.replace(/nn/g, 'n')
    g = g.replace(/mm/g, 'm')
    g = g.replace(/ss/g, 's')
    g = g.replace(/šš/g, 'š')
    g = g.replace(/tt/g, 't')
    g = g.replace(/zz/g, 'z')

    let i_, _i, a;
    for (let i = 0, I = g.length; i < I;) {
        //if (g[i] === 'ť') {
        //    console.log()
        //}

        if (isSEP(g[i])) {
            if (sep) p.push('_');
            i++;
            continue;
        }

        i_ = i + 1;
        _i = i - 1;
        a = '';

        // VYJIMKY
        if (g[i] === 'e' && g[i_] === 'x' && isSEP(g[_i]) && isSA(g[i_+1]))                          a = 'egz' //19
        else if (isZPS(g[i]) && isSEP(g[i_]) && (isZPS(g[i_+1]) || isJS(g[i_+1])))                   a = g[i]  //25
        else if (g[i] === 'z' && isSEP(g[_i]) && isSEP(g[i_]) && (isZPS(g[i_+1]) || isJS(g[i_+1])))  a = 'z'   //26
        else if (g[i] === 'v' && isSEP(g[_i]) && isSEP(g[i_]) && (isZPS(g[i_+1]) || isJS(g[i_+1])))  a = 'v'   //27
        else if (g[i] === 'k' && isSEP(g[_i]) && isSEP(g[i_]) && (isJS(g[i_+1]) || g[i_+1] === 'v')) a = 'k'   //28
        else if (g[i] === 'v' && isNPS(g[i_]))                                                       a = 'f'   //29
        else if (isNPS(g[i]) && g[i_] === 'v')                                                       a = g[i]  //30

        if (a !== '') {
            p.push(a)
            i++;
            continue;
        }

        // PRAVIDLA
        if (g[i] === 'c' && g[i_] === 'h') { a = 'X'; i++; }
        else if (g[i] === 'ů') a = 'ú'                              //2
        else if (g[i] === 'w') a = 'v'                              //3
        else if (g[i] === 'q') a = 'kv'                             //4
        else if (g[i] === 'y') a = 'i'                              //5
        else if (g[i] === 'ý') a = 'í'                              //6
        else if (g[i] === 'ě' && isin('bpfv', g[_i])) a = 'je'      //7
        else if (g[i] === 'd' && g[i_] === 'ě') { a = 'ďe';  i++; } //8
        else if (g[i] === 't' && g[i_] === 'ě') { a = 'ťe';  i++; } //9
        else if (g[i] === 'n' && g[i_] === 'ě') { a = 'ňe';  i++; } //10
        else if (g[i] === 'ě' && g[_i] === 'm') a = 'ňe'            //11
        else if (g[i] === 'd' && isin('ií', g[i_])) a = 'ď'         //12
        else if (g[i] === 't' && isin('ií', g[i_])) a = 'ť'         //13
        else if (g[i] === 'n' && isin('ií', g[i_])) a = 'ň'         //14
        else if (g[i] === 'x' && (isZPS(g[i_]) || isJS(g[i_]))) a = 'gz'; //15
        else if (g[i] === 'x' && (isNPS(g[i_]) || isSEP(g[i_])))a = 'ks'; //16
        else if (g[i] === 'x' && isSEP(g[_i]) && isSA(g[i_]))   a = 'ks'; //17
        else if (g[i] === 'x' && isSA(g[_i]) && isSA(g[i_]))    a = 'ks'; //18
        else if (isZPS(g[i]) && (isSEP(g[i_]) || isSEP(g[i_]) || isNPS(g[i_]) || (isZPS(g[i_]) && isSEP(g[i_+1])))) a = pZPS(g[i]) //20
        else if (isNPS(g[i]) && isZPS(g[i_])) a = pNPS(g[i])             //21
        //===============================
        else if (isZPS(g[i]) && isSEP(g[i_]) && isZPS(g[i_+1]))                                     a = g[i]        //22
        else if (isZPS(g[i]) && isSEP(g[i_]) && (isNPS(g[i_+1]) || isSA(g[i_+1]) || isJS(g[i_+1]))) a = pZPS(g[i])  //23
        else if (isNPS(g[i]) && isSEP(g[i_]) && (isZPS(g[i_+1]) || g[i_+1] === 'ř'))                a = pNPS(g[i])  //24

        else if (g[i] === 's' && !isSEP(g[i_]) && g[i_+1] === 'h') a = 'z'                                          //31 
        else if (g[i] === 's' && g[i_] === 'h')                    a = 'z'                                          //32
        else if (g[i] === 'h' && g[_i] === 's')                    a = 'X'                                          //33
        else if (g[i] === 'ř' && isZPS(g[i_]))                     a = 'ř'                                          //34
        else if (g[i] === 'ř' && (isSEP(g[i_]) || isNPS(g[i_]) || (isZPS(g[i_]) && isSEP(g[i_+1])))) a = 'Ř'        //35
        else if (g[i] === 'ř' && isZPS(g[_i]))                     a = 'ř'                                          //36
        else if (g[i] === 'ř' && isNPS(g[_i]))                     a = 'Ř'                                          //37
        //----------------------
        else if (g[i] === 'n' && isin('kg', g[i_])) a = 'N'   //38                        //; i++;
        else if (g[i] === 'm' && isin('fv', g[i_])) a = 'M'   //39                        //; i++;
        else if (g[i] === 'n' && isin('ťď', g[i_])) a = 'ť'   //40                        //; i++;
        else if (g[i] === 'd' && g[i_] === 'ň')     a = 'ď'   //41                        //; i++;
        else if (g[i] === 't' && g[i_] === 'ň')     a = 'ť'   //42                        //; i++;
        else if (g[i] === 't' && g[i_] === 's')     a = 'c'   //43                        //; i++;
        else if (g[i] === 't' && g[i_] === 'š')     a = 'č'   //44                        //; i++;
        else if (g[i] === 'd' && g[i_] === 's')     a = 'c'   //45                        //; i++;
        else if (g[i] === 'd' && g[i_] === 'š')     a = 'č'   //46                        //; i++;
        else if (g[i] === 'd' && g[i_] === 'z')     a = 'C'   //47                        //; i++;
        else if (g[i] === 'd' && g[i_] === 'ž')     a = 'Č'   //48                        //; i++;
        else a = g[i];
            
        if (a === '') p.push(g[i]);
        else p.push(a);
        i++;
        
    }
    return p.join('')
}

module.exports = { g2p };

//let w = ["ajťáky", "aki", "aktivity", "amen", "anticeny", "asfalt"];

//console.log(w.map(x => g2p(x, true)))
