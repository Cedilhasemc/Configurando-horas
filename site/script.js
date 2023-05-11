//Retornando a Hora
let horas= new Date()
document.write(horas.getHours());
document.write(":")

//Retornando os Minutos
let minutos = new Date()
document.write(minutos.getMinutes());
document.write(":")

//Retornando os Segundos
let segundos = new Date()
document.write(segundos.getSeconds());
document.write(":")

//Retornando os Milissegundos
let milissegundos = new Date()
document.write(milissegundos.getMilliseconds());
document.write("<br><br>")

//Setando a hora
let horas1 = new Date()
horas1.setHours(horas1.getHours()+3)
document.write(horas1.getHours());
document.write("<br><br>")
document.write(horas1.toLocaleString());

//usando setTimeout
function BemVindo(){
    alert("Olá, tudo bem?")
}
setTimeout(BemVindo,1000)
