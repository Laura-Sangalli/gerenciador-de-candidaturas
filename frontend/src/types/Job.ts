
export type Situacao =
  | "Inscrito"
  | "Teste de lógica concluído"
  | "Teste de idiomas concluído"
  | "Entrevista realizada"
  | "Dinâmica realizada"
  | "Documentos Enviados"
  | "Vaga salva"
  | "Vaga finalizada";

export interface Job{
    id: number;
    title: string;
    company: string;
    url: string;
    situacao:Situacao;    
;
}