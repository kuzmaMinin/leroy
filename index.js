let data = {
    "displayedName": {
        "displayedName": {
            "value": [
                "Профиль маячковый ПВХ 10 мм L3м"
            ],
            "description": "Полное наименование товара для клиента"
        }
    },
    "stock": {
        "stocks": {
            "34": {
                "2": "35",
                "3": "42",
                "4": "58",
                "5": "57",
                "6": "112",
                "20": "51",
                "22": "78",
                "26": "34",
                "32": "22",
                "35": "358",
                "40": "28",
                "43": "68",
                "45": "58",
                "49": "31",
                "51": "29",
                "56": "42",
                "62": "26",
                "64": "0",
                "65": "57",
                "86": "15",
                "114": "41",
                "117": "46",
                "143": "46",
                "162": "4",
                "171": "0",
                "176": "12"
            }
        }
    }
}

function getItemName(data) {

    return data.displayedName.displayedName.value[0]

}

function getStoreNumbers(data) {
    let stocks = data.stock.stocks[34]

    let availObj = Object.entries(stocks)
        .filter((value) => value[1] > 0)
        .map((item) => item[0])

    return availObj

}

function getMaxItemsCount(data) {
    let stocks = data.stock.stocks[34]

    let maxCountItem = Object.entries(stocks).sort((a, b) => b[1] - a[1])[0].join(': ')

    return maxCountItem

}
