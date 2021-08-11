import { Component, OnInit } from '@angular/core';

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

  public rodada = 0;
  public rodadaFrase: Frase;

  public progresso = 0;

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
    this.resposta = '';
  }

  verificaResposta(): void {
    if (this.resposta.toUpperCase === this.rodadaFrase.frasePtBr.toUpperCase) {
      alert('Parabéns! A tradução está correta. :)');
      this.rodada++;
      this.progresso += 100 / this.frases.length;
      this.atualizaRodada();
    } else {
      alert('Tente novamente! A tradução está incorreta. :(');
    }
  }

}
