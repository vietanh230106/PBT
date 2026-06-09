searchInput.addEventListener(
"input",
e=>{

const keyword=
e.target.value.toLowerCase();

const filtered=
products.filter(
p=>
p.name.toLowerCase()
.includes(keyword)
);

renderProducts(filtered);

});