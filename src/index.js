import $ from 'jquery'
import './css/index.css'
import logo from './images/img.png'
$(function(){
    $('li:odd').css('background-color','red')
$('li:even').css('background-color','pink')
$('.box').attr('src',logo)
})

function info(target){
    target.info='hhhhhh'
}
@info

class person{}
console.log(person.info)