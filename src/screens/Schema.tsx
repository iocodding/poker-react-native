const players = [
    {id: 1, name: 'Ivo', image:'/ivo.png' },
    {id: 2, name: 'Dancho', image:'/dancho.png' },
    {id: 3, name: 'Doichi', image:'/doichi.png' },
    {id: 4, name: 'Hris', image:'/hris.png' }
]

const game = {
        settings: {
            smallBlind: 5,
            bigBlind: 10,
            cards: ['As', 'Ks', 'Qs', 'Js', '10s'],
            potSize: 225,
            winnersIds: [1]
        },
        players: players.map((player) => { return { ...player } }
        // players: [ 
        //     { id: 1, hand: ['Jh', 'Qs'], chips: 100, action: 'Check/Raise/Call', raiseValue: 200, isPlaying: true },
        //     { id: 2, hand: ['10h', '2s'], chips: 200, action: 'Check/Raise/Call', raiseValue: 200, isPlaying: true },
        //     { id: 3, hand: ['5h', '4s'], chips: 350, action: 'Check/Raise/Call', raiseValue: 200, isPlaying: false },
        // ]
    }