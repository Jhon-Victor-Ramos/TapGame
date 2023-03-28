const cookie = document.querySelector('.cookie')
const quantidadeDeMoedas = document.querySelector('.quantidadeDeMoedas')
var valorDasMoedas = document.createTextNode('+10')
const precoUpgrade = document.querySelectorAll('.precoUpgrade')
var quantasMoedasTenhoVer = document.querySelector('.qntCoin')

// POPUPs
    // Upgrade
    const upgradeButton = document.querySelector('.upgradeBtn')
    const upgradeModal = document.querySelector('.upgradeModal')
    const closeModal = document.querySelector('.closeBtn')
    const upgradeContain = document.querySelector('.upgrades')
    const botaoParaComprarUpgrade = document.querySelectorAll('.botaoParaComprarUpgrade')
    
    // Erro
    
    const popup = document.querySelector('.popUpError');
    const closePopupError = document.querySelector('.error')
    
    


var moedasGanhas = 10

var quantasMoedas = 1000

function clickAnimation(objeto, escala) {
    objeto.addEventListener('click', () => {
        objeto.style.transform = `scale(${escala}%)`
        objeto.style.borderBottom = 'none'
        setTimeout(() => {
            objeto.style.transform = 'scale(100%)'
            objeto.style.borderBottom = '.2vh solid #191720'
        }, 150);
    });
}



const tempo = new Date()
const tempo1 = tempo.getMilliseconds()
let tempo2 = tempo1+10

cookie.addEventListener('click',()=>{
    
    quantasMoedas += moedasGanhas
    cookie.style.transform = 'scale(95%)'

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
    }, 100);
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
    }, 550);

    
})

cookie.style.transform = 'scale(100%)'

upgradeButton.style.transition = ".1ms ease-in-out"

upgradeButton.onclick = ()=>{
    upgradeButton.style.transform = 'scale(95%)'
    

    cookie.style.display = 'none'
    setTimeout(() => {
        upgradeButton.style.transform = 'scale(100%)'
    }, 150);
    upgradeModal.show()
    upgradeModal.style.zIndex = '-1'
}
closeModal.addEventListener('click', ()=>{
    upgradeModal.close()
    cookie.style.display = 'block'
})

for (let i = 0; i < botaoParaComprarUpgrade.length; i++) {
    botaoParaComprarUpgrade[i].addEventListener('click', () => {
      var valorDoBotao = botaoParaComprarUpgrade[i].value;
      let quantasMoedasAntes = quantasMoedas
      let result1 = quantasMoedas -= valorDoBotao
      let result2 = result1

      if (result2 < 0) {

        cookie.style.display = 'none'
        upgradeContain.style.display = 'none'
        
        popup.style.display = 'block'
        
        closePopupError.addEventListener('click', ()=>{
            popup.style.display = 'none'
            cookie.style.display = 'block'
            upgradeContain.style.display = 'block'
        })
        
        
        upgradeModal.close()
    
        if (quantasMoedas < valorDoBotao) {
            cookie.style.display = 'none'
            upgradeContain.style.display = 'none'
            popup.style.display = 'block'
        }
        
        quantasMoedas = quantasMoedasAntes
        } else {
            console.log(`Você acabou de gastar R$${valorDoBotao}.`);
            quantasMoedasTenhoVer.innerHTML = quantasMoedas
        // }
            
            // ver qual dos botões foi apertado
            
            switch (i) {
                case 0:
                    console.log(`console.log(valorDoBotao) == ${valorDoBotao}`)
                    moedasGanhas += 25

                    valorDasMoedas.nodeValue = `+${moedasGanhas}`
                    
                    // txtQuantidadeDeMoeda.textContent = ''
                    // valorDasMoedas.nodeValue =  ''

                    console.log(`Parabéns, você agora está ganhando R$${moedasGanhas} por clique!`)
                    valorDoBotao += valorDoBotao
                    break;
                    
                    default:
                    break;
            }

      }




    });
}


botaoParaComprarUpgrade.forEach(botao => {
    clickAnimation(botao,90);
});



quantasMoedasTenhoVer.innerHTML = quantasMoedas