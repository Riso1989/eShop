import Service from '@ember/service';
import {inject as service} from '@ember/service';
import {tracked} from "@glimmer/tracking";

export default class ConverterService extends Service {
    
    @service store;

    @tracked
    serviceTotal = this.getTotal();

    setTotal(total) {
        this.serviceTotal = total;
    }

    async getTotal(){
        let promise = this.store.findAll('cart').then(function(cart) {
            return cart.toArray().mapBy('price').reduce((a, b) => a + b, 0);
        });
    return await promise;
    }  
}