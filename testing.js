
class Priorityqueue{

    constructor(arr) {
        this.arr = arr;
        this.size = arr.length;
        this.build()
    }

    build() {
        for( var i = parseInt( (this.size / 2) -  1 ); i >= 0; i --){
            this.heapify(i);
        }
    }

    heapify(i){
        if( ( ( i * 2 ) + 1 ) < this.size){
            if( this.arr[2 * i + 1] < this.arr[i]){
                this.swap(2 * i + 1, i);
                this.heapify(2 * i + 1);
            }

        }
        if( ( ( i * 2 ) + 2) < this.size){
            if( this.arr[2 * i + 2] < this.arr[i]){
                this.swap(2 * i + 2, i);
                this.heapify(2 * i + 2);
            }
        }
    }

    swap(i, j){
        var aux = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = aux;
    }

    extraer(){
        if(this.size > 0){
            var aux = this.arr[0];
            this.swap(0, this.size - 1);
            this.arr.slice(this.arr[this.size - 1], 1);
            this.size -= 1;
            this.heapify(0);
            document.write("elemento a extraer:" + aux);
            return aux;
        }

    }

    show(){
        document.write("<br>"+ this.arr);
    }
}

function pq() {
    var array = [3,1,9,4,8,4,12,5,2,7,2];
    var pq = new Priorityqueue(array);

    pq.show();
    pq.extraer();
    pq.show();
    document.write("<br>" + pq.size);


}