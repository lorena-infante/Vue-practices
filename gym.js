new Vue ({
    el:'#app',
    data:{
        titulo: 'To-do List',
        tareas:[],
        nuevaTarea:''
    },
    methods:{
        agregarTarea(){
            //console.log(this.nuevaTarea)
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            });
            this.nuevaTarea= "";
            localStorage.setItem('gym-vue',JSON.stringify(this.tareas));
        },
        editarTarea(index){
            //console.log("editar ", index)
            //this.tareas[index].estado = true;
            if(this.tareas[index].estado === true){
                this.tareas[index].estado = false;
            }else{
                this.tareas[index].estado = true;
            }
            localStorage.setItem('gym-vue',JSON.stringify(this.tareas));
        },

        quitarTarea(index){
            //console.log(index)
            this.tareas.splice(index,1);
            console.log(index + " c jue");
            localStorage.setItem('gym-vue',JSON.stringify(this.tareas));
        }
    },
    //antes de cargar toda la app se llama este método
    created: function (){
        let datosDB = JSON.parse(localStorage.getItem('gym-vue')); 
        //console.log(datosDB)
        if (datosDB === null){
            this.tareas = [];
        }else{
            this.tareas = datosDB;
        }
    }
})