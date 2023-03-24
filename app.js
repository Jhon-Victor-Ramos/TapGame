const cookie = document.querySelector('.cookie')
const quantidadeDeMoedas = document.querySelector('.quantidadeDeMoedas')
const valorDasMoedas = document.createTextNode('+100')
var quantasMoedas = 0

var quantasMoedasTenhoVer = document.querySelector('.qntCoin')

console.log(quantasMoedas)

cookie.addEventListener('click',()=>{
    
    quantasMoedas += 100
    cookie.style.transform = 'scale(95%)'
    const tempo = new Date()
    const tempo1 = tempo.getMilliseconds()
    let tempo2 = tempo1+10


    setTimeout(() => {
        if (tempo2 > tempo1) {
            cookie.style.transform = 'scale(103%)'

            quantidadeDeMoedas.style.color = "#fdff74"
            quantidadeDeMoedas.style.fontSize = "2.3vh"
            quantidadeDeMoedas.style.textAlign = "center"

            let txtQuantidadeDeMoeda = document.createElement('p')
            txtQuantidadeDeMoeda.appendChild(valorDasMoedas)
            quantidadeDeMoedas.appendChild(txtQuantidadeDeMoeda)
            
        }
    }, 150);
    let moedas = document.createElement('p')
            quantasMoedasTenhoVer.appendChild(moedas)
            console.log(quantasMoedasTenhoVer)
            moedas.appendChild(valorDasMoedas)
            quantasMoedasTenhoVer.innerHTML = quantasMoedas
    setTimeout(() => {
        if (tempo2 > tempo1) {
            cookie.style.transform = 'scale(100%)'
            
            quantidadeDeMoedas.style.transition = ".3s ease"
            quantidadeDeMoedas.style.fontSize = "0"
            
            
        }
    }, 900);

    
})

cookie.style.transform = 'scale(100%)'