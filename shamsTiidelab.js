for(let i = 1; i <= 200; i++) {
    let output = i % 48 === 0 ? "ShamsTIIDELab"
                : i % 8 === 0 ? "TIIDELab"
                : i % 6 === 0 ? "Shams"
                : i;
    console.log(output)
}