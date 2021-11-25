import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES;
  public instrucao = 'Traduza a frase:';
  public resposta = '';
  public tentativas = 3;

  public rodada = 0;
  public rodadaFrase: Frase;

  public progresso = 0;

  @Output() public encerrarJogo = new EventEmitter<string>();

  constructor() {
    this.atualizaRodada();
  }

  ngOnInit(): void {
  }

  atualizaResposta(resposta: string): void {
    this.resposta = resposta;
  }

  atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada];
    this.limparResposta();
  }

  verificaResposta(): void {
    if (this.resposta.toUpperCase() === this.rodadaFrase.frasePtBr.toUpperCase()) {
      alert('Parabéns! A tradução está correta. :)');
      this.rodada++;
      this.progresso += 100 / this.frases.length;

      if (this.rodada === 4) {
        this.encerrarJogo.emit('vitoria');
      }

      this.atualizaRodada();
    } else {
      this.tentativas--;
      this.limparResposta();

      if (this.tentativas === -1) {
        // alert('Você perdeu todas as tentativas :(');
        this.encerrarJogo.emit('derrota');
      } else {
        this.tentativas > 0 ?
          alert(`Tente novamente! A tradução está incorreta. Você tem ${this.tentativas} ${this.tentativas > 1 ? 'tentativas' : 'tentativa'}!`) :
          alert('Tente novamente! Essa é a última tentativa disponível.');
      }
    }
  }

  limparResposta(): void {
    this.resposta = '';
  }

}
