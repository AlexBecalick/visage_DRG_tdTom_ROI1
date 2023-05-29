function config() {
    return {
            roi: {"x0": 0, "x1": 9263, "y0": 0, "y1": 9239 },
            zoomLevels: 10, // maximum zoom levels. Leave that at 10.
            tiles: 'https://storage.googleapis.com/ca1-data/img/262144px/{z}/{y}/{x}.jpg_ZZZ',
            cellData: [{mediaLink: './data/cellData.tsv', size: "539686"}],
            geneData: [{mediaLink: './data/geneData.tsv', size: "18907205"}],
            cellBoundaries: [{mediaLink: './data/cellBoundaries.tsv', size: "818103"}],
            }
        }
