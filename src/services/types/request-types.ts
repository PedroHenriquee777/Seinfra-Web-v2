export interface CreateRequestPayload {
    endereco: string;
    pontoReferencia: string;
    descricao: string;
    imagemUrl?: string;
  }
  
  export interface ListSolicitationPayload {
    id: number;
    endereco: string;
    referencia: string;
    problema: string;
    status: string;
    dataSolicitacao: string | null;
    dataConclusao: string | null;
    solicitante: {
      nome: string | null;
      cpf: string | null;
      telefone: string | null;
    };
    imagemUrl: string;
  }
  