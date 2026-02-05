export interface CreateRequestPayload {
    address: string;
    landmark: string;
    description: string;
    imagemUrl?: string;
  }
  
  export interface ListRequestPayload {
    id: number;
    address: string;
    landmark: string;
    problem: string;
    status: string;
    dateRequest: string | null;
    dateRequestConcluded: string | null;
    applicant: {
      name: string | null;
      cpf: string | null;
      phone: string | null;
    };
    imagemUrl: string;
  }
  