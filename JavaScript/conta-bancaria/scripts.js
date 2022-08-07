class ContaBancaria {
  constructor(agencia, numero, tipo, saldo) {
    this.agencia = agencia
    this.numero = numero
    this.tipo = tipo
    this.saldo = saldo
  }

  get saldo() {
    return this._saldo
  }

  set saldo(valor) {
    this._saldo = valor
  }

  sacar(valor) {
    if (valor > this._saldo) {
      return 'Operação negada'
    }
    this._saldo = this.saldo - valor

    return this._saldo
  }

  depositar(valor) {
    this._saldo = this._saldo + valor

    return this._saldo
  }
}

class ContaCorrent extends ContaBancaria {
  constructor(agencia, numero, saldo, cartaoCredito) {
    super(agencia, numero, saldo)
    this.tipo = 'corrente'
    this._cartaoCredito = cartaoCredito
  }

  get cartaoCredito() {
    return this._cartaoCredito
  }

  set cartaoCredito(valor) {
    this._cartaoCredito = valor
  }
}

class ContaPoupanca extends ContaBancaria {
  constructor(agencia, numero, saldo) {
    super(agencia, numero, saldo)
    this.tipo = 'poupança'
  }
}

class Universitaria extends ContaBancaria {
  constructor(agencia, numero, saldo) {
    super(agencia, numero, saldo)
    this.tipo = 'Universitária'
  }

  sacar(valor) {
    if (valor > 500) {
      return 'Operação negada!'
    }

    this._saldo = this._saldo
  }
}
