

const valueButton = (e) => {
    let count = document.getElementById("input").value += e
}

const clearValue = () => {
    let count = document.getElementById("input").value = ""
}

const resultValue = () => {
    let input = document.getElementById("input").value
    if (input == "") {
        alert("Terjadi Kesalahan")
    } else {
        let valueInput = eval(input)
        document.getElementById("input").value = valueInput
    }
}