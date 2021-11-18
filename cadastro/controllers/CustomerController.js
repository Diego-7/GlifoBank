class CustomerController{

    constructor(formId, tableId){

        this.formEl = document.getElementById(formId);
        this.tableEl = document.getElementById(tableId);

        this.onSubmit();

    }

    onSubmit(){

        this.formEl.addEventListener("submit", event =>{

            event.preventDefault();

            this.getValues();

            this.formEl.reset();

        });
    }

    getValues(){

        let customer = {};
        

        [...this.formEl.elements].forEach(function(field, index){


            if (field.name === "gender") {
                
                if (field.checked) {
                    customer[field.name] = field.value;
                }
            } else{
                customer[field.name] = field.value;
            }

           
        
        });

        console.log(customer);
        

        return new Customer(
            customer.name, 
            customer.birth, 
            customer.gender, 
            customer.cpf, 
            customer.rg, 
            customer.address, 
            customer.neighborhood, 
            customer.complement, 
            customer.cep, 
            customer.state, 
            customer.city, 
            customer.telephone, 
            customer.cellphone, 
            customer.email
            ); 
            
    }

}