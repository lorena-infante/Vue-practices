new Vue({
    el: "#app",
    data: {
        title:"Lista de Frutas",
        description:"¡Fruticas Ricas!",
        frutas:[
            {nombre:'🍎 Manzana', cantidad: 3},
            {nombre:'🍐 Pera', cantidad: 2},
            {nombre:'🥭 Mango', cantidad: 5},
            {nombre:'🍌 Banano', cantidad: 18},
            {nombre:'🍒 Cerezas', cantidad: 0}    
        ],
        nuevaFruta:'',
        total:0,
        fondo:'bg-warning',
        color: false
    },
    methods:{
        //este event viene de js vanilla
        //el "this" reemplaza el "data" para acceder al objeto
        changeDescr: function(event){
          this.description = event.target.value;
        },
        agregarFruta (){
            //console.log('hiciste click');
            this.frutas.push({
                nombre: this.nuevaFruta//, cantidad: this.nuevaCantidad
            });
            //console.log(this.frutas.cantidad)
            this.nuevaFruta = "";
            //this.nuevaCantidad = "";
        }
    },
    computed:{
        sumarFrutas(){
            this.total = 0;
            for(fruta of this.frutas){
                this.total = this.total + fruta.cantidad;
            }
            return this.total;

            
        }
    }
  })