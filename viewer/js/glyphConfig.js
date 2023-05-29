

function glyphSettings()
{
    var out = [

         //{gene: 'Aldoc',         color: '#0000FF',           glyphSymbol: '+',  glyphName: 'plus'},
         //{gene: 'Arpp21',        color: '#0000FF',           glyphSymbol: '.',  glyphName: 'point'},
         {gene: 'Calb1',         color: '#0000FF',           glyphSymbol: 's',  glyphName: 'square'},
         {gene: 'Calb2',      color: '#0000FF',           glyphSymbol: '^',  glyphName: 'triangleUp'},
         {gene: 'Camk2n1',         color: '#0000FF',           glyphSymbol: '>',  glyphName: 'triangleRight'},
         {gene: 'Car4',        color: '#0000FF',           glyphSymbol: '<',  glyphName: 'triangleLeft'},
         {gene: 'Cartpt',         color: '#0000FF',           glyphSymbol: 'p',  glyphName: 'star5'},
         {gene: 'Cck',       color: '#0000FF',           glyphSymbol: 'h',  glyphName: 'star6'},
         {gene: 'Cd24a',           color: '#00B3FF',           glyphSymbol: '+',  glyphName: 'plus'},
         {gene: 'Cdh13',        color: '#00B3FF',           glyphSymbol: 'o',  glyphName: 'circle'},
         {gene: 'Cdh9',          color: '#00B3FF',           glyphSymbol: '*',  glyphName: 'asterisk'},
         {gene: 'Chgb',          color: '#00B3FF',           glyphSymbol: '.',  glyphName: 'point'},
         {gene: 'Cnr1',        color: '#00B3FF',           glyphSymbol: 'x',  glyphName: 'cross'},
         {gene: 'Cox6a2',        color: '#00B3FF',           glyphSymbol: 's',  glyphName: 'square'},
         {gene: 'Cplx1',         color: '#00B3FF',           glyphSymbol: 'd',  glyphName: 'diamond'},
         {gene: 'Cplx3',         color: '#00B3FF',           glyphSymbol: '^',  glyphName: 'triangleUp'},
         {gene: 'Cpne6',     color: '#00B3FF',           glyphSymbol: '<',  glyphName: 'triangleLeft'},
         {gene: 'Crh',        color: '#00B3FF',           glyphSymbol: '>',  glyphName: 'triangleRight'},
         {gene: 'Crhbp',       color: '#00B3FF',           glyphSymbol: 'p',  glyphName: 'star5'},
         {gene: 'Crtac1',         color: '#5C33FF',           glyphSymbol: 'o',  glyphName: 'circle'},
         {gene: 'Crym',        color: '#5C33FF',           glyphSymbol: '*',  glyphName: 'asterisk'},
         {gene: 'Ctgf',        color: '#5C33FF',           glyphSymbol: 's',  glyphName: 'square'},
         {gene: 'Cxcl12',       color: '#5C33FF',           glyphSymbol: 'd',  glyphName: 'diamond'},
         {gene: 'Cxcl14',       color: '#5C33FF',           glyphSymbol: 'v',  glyphName: 'triangleDown'},
         {gene: 'Dgkb',        color: '#5C33FF',           glyphSymbol: 'p',  glyphName: 'star5'},
         {gene: 'Enpp2',          color: '#FF00E6',           glyphSymbol: '+',  glyphName: 'plus'},
         {gene: 'Fam19a1',       color: '#FF00E6',           glyphSymbol: 'o',  glyphName: 'circle'},
         {gene: 'Fxyd6',        color: '#FF00E6',           glyphSymbol: '*',  glyphName: 'asterisk'},
         {gene: 'Gad1',        color: '#FF00E6',           glyphSymbol: 'x',  glyphName: 'cross'},
         {gene: 'Gap43',          color: '#FF00E6',           glyphSymbol: 's',  glyphName: 'square'},
         {gene: 'Gpx3',         color: '#FF00E6',           glyphSymbol: 'd',  glyphName: 'diamond'},
         {gene: 'Hpcal1',         color: '#FF00E6',           glyphSymbol: '^',  glyphName: 'triangleUp'},
         {gene: 'Id2',        color: '#FF00E6',           glyphSymbol: '>',  glyphName: 'triangleRight'},
         {gene: 'Igfbp4',         color: '#FF00E6',           glyphSymbol: 'h',  glyphName: 'star6'},
         {gene: 'Kcnab1',       color: '#995C00',           glyphSymbol: 'o',  glyphName: 'circle'},
         {gene: 'Kcnc2',       color: '#995C00',           glyphSymbol: '*',  glyphName: 'asterisk'},
         {gene: 'Kcnip1',        color: '#995C00',           glyphSymbol: 's',  glyphName: 'square'},
         {gene: 'Kcnip4',        color: '#995C00',           glyphSymbol: 'd',  glyphName: 'diamond'},
         {gene: 'Lamp5',        color: '#995C00',           glyphSymbol: 'h',  glyphName: 'star6'},
         {gene: 'Luzp2',         color: '#FF0000',           glyphSymbol: 'o',  glyphName: 'circle'},
         {gene: 'Lypd1',         color: '#FF0000',           glyphSymbol: '*',  glyphName: 'asterisk'},
         {gene: 'Lypd6',          color: '#FF0000',           glyphSymbol: '.',  glyphName: 'point'},
         {gene: 'Matn2',     color: '#FF0000',           glyphSymbol: 'x',  glyphName: 'cross'},
         {gene: 'Mt1',       color: '#FF0000',           glyphSymbol: 's',  glyphName: 'square'},
         {gene: 'Myl4',         color: '#FF0000',           glyphSymbol: '^',  glyphName: 'triangleUp'},
         {gene: 'Ndnf',       color: '#FF0000',           glyphSymbol: 'v',  glyphName: 'triangleDown'},
         {gene: 'Necab1',        color: '#FF0000',           glyphSymbol: '>',  glyphName: 'triangleRight'},
         {gene: 'Necab2',          color: '#FF0000',           glyphSymbol: '<',  glyphName: 'triangleLeft'},
         {gene: 'Nefl',       color: '#FF0000',           glyphSymbol: 'p',  glyphName: 'star5'},
         {gene: 'Nnat',      color: '#FF0000',           glyphSymbol: 'h',  glyphName: 'star6'},
         {gene: 'Nos1',         color: '#FFC700',           glyphSymbol: '+',  glyphName: 'plus'},
         {gene: 'Nov',        color: '#FFC700',           glyphSymbol: 'o',  glyphName: 'circle'},
         {gene: 'Npy',        color: '#FFC700',           glyphSymbol: '*',  glyphName: 'asterisk'},
         {gene: 'Nr4a2',        color: '#FFC700',           glyphSymbol: '.',  glyphName: 'point'},
         {gene: 'Nrip3',       color: '#FFC700',           glyphSymbol: 'x',  glyphName: 'cross'},
         {gene: 'Nrn1',         color: '#FFC700',           glyphSymbol: 's',  glyphName: 'square'},
         {gene: 'Nxph1',        color: '#FFC700',           glyphSymbol: '^',  glyphName: 'triangleUp'},
         {gene: 'Pak1',          color: '#FFC700',           glyphSymbol: 'v',  glyphName: 'triangleDown'},
         {gene: 'Pcdh8',          color: '#FFC700',           glyphSymbol: '>',  glyphName: 'triangleRight'},
         {gene: 'Pcp4',        color: '#FFC700',           glyphSymbol: 'p',  glyphName: 'star5'},
         {gene: 'Pcp4l1',      color: '#96B38F',           glyphSymbol: '+',  glyphName: 'plus'},
         {gene: 'Pde1a',        color: '#96B38F',           glyphSymbol: '*',  glyphName: 'asterisk'},
         {gene: 'Pdyn',        color: '#96B38F',           glyphSymbol: '.',  glyphName: 'point'},
         {gene: 'Penk',       color: '#96B38F',           glyphSymbol: 'd',  glyphName: 'diamond'},
         {gene: 'Prdx5',         color: '#96B38F',           glyphSymbol: 'v',  glyphName: 'triangleDown'},
         {gene: 'Pthlh',        color: '#96B38F',           glyphSymbol: '^',  glyphName: 'triangleUp'},
         {gene: 'Ptn',      color: '#96B38F',          glyphSymbol: '<',  glyphName: 'triangleLeft'},
         {gene: 'Pvalb',         color: '#96B38F',           glyphSymbol: '>',  glyphName: 'triangleRight'},
         {gene: 'Rab3b',        color: '#96B38F',           glyphSymbol: 'p',  glyphName: 'star5'},
         {gene: 'Rbp4',        color: '#96B38F',           glyphSymbol: 'h',  glyphName: 'star6'},
         {gene: 'Rgs4',          color: '#407F59',           glyphSymbol: '+',  glyphName: 'plus'},
         {gene: 'Rrad',       color: '#407F59',           glyphSymbol: 'o',  glyphName: 'circle'},
         {gene: 'Serpine2',      color: '#407F59',           glyphSymbol: '.',  glyphName: 'point'},
         {gene: 'Slc1a2',        color: '#407F59',           glyphSymbol: 'x',  glyphName: 'cross'},
         {gene: 'Spock3',       color: '#407F59',           glyphSymbol: 'x',  glyphName: 'cross'},
         {gene: 'Spon1',         color: '#407F59',           glyphSymbol: 's',  glyphName: 'square'},
         {gene: 'Sst',        color: '#407F59',           glyphSymbol: 'd',  glyphName: 'diamond'},
         {gene: 'Synpr',        color: '#407F59',           glyphSymbol: '^',  glyphName: 'triangleUp'},
         {gene: 'Tac2',       color: '#407F59',           glyphSymbol: 'v',  glyphName: 'triangleDown'},
         {gene: 'Th',        color: '#407F59',           glyphSymbol: '<',  glyphName: 'triangleLeft'},
         {gene: 'Vip',        color: '#407F59',           glyphSymbol: '>',  glyphName: 'triangleRight'},
         {gene: 'Vstm2a',       color: '#407F59',           glyphSymbol: 'h',  glyphName: 'star6'},
         {gene: 'Zcchc12',         color: '#00FF00',           glyphSymbol: '*',  glyphName: 'asterisk'},
 

        {gene: 'Generic',       taxonomy: 'generic',     glyphSymbol: 'o',  glyphName: 'circle'}

        ];

    return out
}
