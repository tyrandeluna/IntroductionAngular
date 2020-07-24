import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Coracao } from '../shared/coracao.model'

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {
  public coracaoVazio: string = '/assets/coracao_vazio.png'
  public coracaoCheio: string = '/assets/coracao_cheio.png'

  @Input() public tentativas: number

  public coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ]

  constructor() { }

  ngOnChanges() {
    console.log('tentativas recebidas do painel: ', this.tentativas)
  }

  ngOnInit(): void {
    
  }

}
