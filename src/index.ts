type Desk = NormalCard[];

type CardColor = "♥" | "♠" | "♣" | "♦"
type NormalCard = {
    color: CardColor,
    number: number|string
}

function createDesk(): Desk {
    const desk: Desk = []

    for (let i = 0; i <= 13; i++) {
        if (i <= 10) {
            desk.push({
                number: i,
                color: '♥'
            }, {
                number: i,
                color: "♠"
            }, {
                number: i,
                color: "♣"
            }, {
                number: i,
                color: "♦"
            })
        }
        if (i === 11) {
            desk.push({
                number: 'J',
                color: '♥'
            }, {
                number: "J",
                color: "♠"
            }, {
                number:  "J",
                color: "♣"
            }, {
                number:  "J",
                color: "♦"
            })
        }
        if (i === 12) {
            desk.push({
                number: 'Q',
                color: '♥'
            }, {
                number: "Q",
                color: "♠"
            }, {
                number:  "Q",
                color: "♣"
            }, {
                number:  "Q",
                color: "♦"
            })
        }
        if (i === 13) {
            desk.push({
                number: 'K',
                color: '♥'
            }, {
                number: "K",
                color: "♠"
            }, {
                number:  "K",
                color: "♣"
            }, {
                number:  "K",
                color: "♦"
            })
        }
    }
    return desk
}

const desk = createDesk();
console.log(desk)