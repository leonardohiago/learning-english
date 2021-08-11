export class Coracao {

  constructor(
    public cheio: boolean,
    public urlCoracaoCheio = '/assets/coracao-cheio.png',
    public urlCoracaoVazio = '/assets/coracao-vazio.png',
  ) { }

  public exibeCoracao(): string {
    if (this.cheio) {
      return this.urlCoracaoCheio;
    } else {
      return this.urlCoracaoVazio;
    }
  }
}
