function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => { 
        this.capturaCliques();
        this.capturaEnter();
    }

    this.capturaEnter = () => {
        document.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                this.realizaConta();
            }
            
        });
    };


    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target;
            if(el.classList.contains('btn-num')) this.addNumDisplay(el);
            if(el.classList.contains('btn-clear')) this.clear();
            if(el.classList.contains('btn-del')) this.del(el);
            if(el.classList.contains('btn-eq')) this.realizaConta(el);
        });
    };

    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value); 

            if(!conta) {
                this.display.value = 'conta inválida';
                return;
            }

            this.display.value = conta;
        } catch(e) {
            this.display.value = 'conta inválida';
            return;
        };
    };
    
    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    };

    this.del = () => this.display.value = this.display.value.slice(0, -1);
    this.clear = (el) => this.display.value = '';
    
}

const calculadora = new Calculadora();
calculadora.inicia();