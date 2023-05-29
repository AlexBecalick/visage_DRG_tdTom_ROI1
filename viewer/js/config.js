function config() {
    return {
            roi: {"x0": 0, "x1": 9263, "y0": 0, "y1": 9239 },
            zoomLevels: 10, // maximum zoom levels. Leave that at 10.
            tiles: 'https://storage.googleapis.com/ca1-data/img/262144px/{z}/{y}/{x}.jpg_ZZZ',
            cellData: [{mediaLink: 'https://media.githubusercontent.com/media/AlexBecalick/visage_DRG_tdTom_ROI1/main/viewer/data/cellData.tsv?token=ARINDHJGFRGMV6M7TGS4RKTEOVEA4', size: "539686"}],
            geneData: [{mediaLink: 'https://media.githubusercontent.com/media/AlexBecalick/visage_DRG_tdTom_ROI1/main/viewer/data/geneData.tsv?token=ARINDHLUZCTJS5MUWNUMHJTEOVECG', size: "18907205"}],
            cellBoundaries: [{mediaLink: 'https://media.githubusercontent.com/media/AlexBecalick/visage_DRG_tdTom_ROI1/main/viewer/data/cellBoundaries.tsv?token=ARINDHNM3PLEWT5ZAL7WUPDEOVDY2', size: "818103"}],
            }
        }
        