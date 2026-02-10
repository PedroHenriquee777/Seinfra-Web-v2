export interface CreateRequestPayload {
    address: string;
    reference: string;
    description: string;
  }
  
  export interface ListRequestPayload {
    id: number;
    address: string;
    reference: string;
    problem: string;
    status: string;
    dateRequest: string | null;
    dateRequestConcluded: string | null;
    applicant: {
      name: string | null;
      cpf: string | null;
      phone: string | null;
    };
  }
  