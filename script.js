var data = document.getElementById('nascimento')
var fsex = document.getElementsByName('radsex')
var btn = document.getElementById('btn_verificar')
var res = document.getElementById('res')
var img = document.createElement('img')
img.setAttribute('id', 'foto')



btn.addEventListener('click', verificador)

 
function verificador(){
     var date = new Date();
     var ano = date.getFullYear()
     idade = ano - parseInt(data.value) 
    if(parseInt(data.value) > 2021){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
          var genero = ''
          if(fsex[0].checked){
               genero = 'Homem'
               if(idade >= 0 && idade < 10){
                    img.setAttribute('src', 'imagens/crianca-homem.png')
               }else if(idade >= 10 && idade < 21){
                    img.setAttribute('src', 'imagens/jovem-homem.png')
               }else if(idade < 50){
                    img.setAttribute('src', 'imagens/adulto-homem.png')
               }else{
                    img.setAttribute('src', 'imagens/idoso-homem.png')
               }
          }else if(fsex[1].checked){
               genero = 'Mulher'
               if(idade >= 0 && idade < 10){
                    img.setAttribute('src', 'imagens/crianca-mulher.png')
               }else if(idade >= 10 && idade < 21){
                    img.setAttribute('src', 'imagens/jovem-mulher.png')
               }else if(idade < 50){
                    img.setAttribute('src', 'imagens/adulto-mulher.png')
               }else{
                    img.setAttribute('src', 'imagens/idoso-mulher.png')
               }
          }
                    
          res.style.textAlign = 'center'
          res.innerHTML = `Detectamos ${genero} com ${idade} anos`
          res.appendChild(img)
    }
    
}