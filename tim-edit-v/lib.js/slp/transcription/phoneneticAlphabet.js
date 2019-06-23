const PAC = 'aábcCčČdďeéfghXiíjklmMnNňoóprřŘsštťuúvzž-E123450'
const ENG = ['a','aa','b','ts','dz','ch','dg','d','dj','e','ee','f','g','h',
      'x','i','ii','y','k','l','m','mg','n','ng','nj','o','oo','p','r',
      'rz','rs','s','sh','t','tj','u','uu','v','z','zh','si','swa',
      'n1','n2','n3','n4','n5','n0']

export const PAC_ENG = {};
export const ENG_PAC = {};

PAC.split('').forEach((p, i) => PAC_ENG[p] = ENG[i]);
ENG.forEach((p, i) => ENG_PAC[p] = PAC[i]);