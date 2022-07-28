

function chessBoard(n) {
    let output = '';
    for(let i = 1; i <= n; i++) {
        
        for (let j = 1; j <= n; j++) {
            output += ((i + j) % 2) ? ' ' : '#';
        }

    output += "\n"  
}
    console.log(output)
}

chessBoard(8)