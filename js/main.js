'use strict';

{
const btn = document.getElementById('btn');

btn.addEventListener('click', () =>{
    const results =['こはる', 'さくら', 'ほのか', '大樹'];
    btn.textContent = results[Math.floor(Math.random() * results.length)];


});
}