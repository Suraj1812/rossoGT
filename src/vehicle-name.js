const names=[
 {brand:'FERRARI',model:'458',trim:'SPIDER',id:'ferrari',label:'Ferrari 458'},
 {brand:'BMW',model:'M4',trim:'COMPETITION',id:'bmw',label:'BMW M4 Competition'},
 {brand:'LAMBORGHINI',model:'AVENTADOR',trim:'SVJ',id:'lamborghini',label:'Lamborghini Aventador SVJ'},
 {brand:'BUGATTI',model:'CHIRON',trim:'',id:'bugatti',label:'Bugatti Chiron'}
];
export function styleVehicleName(element,index) {
 const car=names[index];if(!car)return;
 element.classList.add('vehicle-name');element.dataset.vehicle=car.id;
 element.setAttribute('aria-label',car.label);
 element.innerHTML='<small>'+car.brand+'</small><strong>'+(index===1?'<i class="m-stripes" aria-hidden="true"><b></b><b></b><b></b></i>':'')+car.model+'</strong>'+(car.trim?'<em>'+car.trim+'</em>':'');
}
