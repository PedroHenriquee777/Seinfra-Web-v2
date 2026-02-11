import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function TermsDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <span className="underline cursor-pointer text-seinfra-yellow-500 font-medium">
          Termos de privacidade e uso do SeInfra
        </span>
      </DialogTrigger>

      <DialogContent
        className="w-[90vw] sm:max-w-2xl rounded-3xl border-transparent 
                   p-4 sm:p-6 md:p-6 lg:p-6"
      >
        <DialogHeader>
          <DialogTitle className="flex justify-center font-bold text-seinfra-blue-light-400 text-lg sm:text-xl">
            Termos de Privacidade e Serviço
          </DialogTitle>
        </DialogHeader>

        <div
          className="max-h-[60vh] sm:max-h-[60vh] overflow-y-auto 
                        px-2 sm:px-4 md:px-4 text-sm sm:text-sm space-y-4 text-seinfra-blue-light-500"
        >
          <h2 className="font-semibold">Termos de Privacidade - Seinfra</h2>
          <p>
            <strong>1- Coleta de dados</strong>
            <br /> Coletamos apenas os dados pessoais estritamente necessários
            para a prestação do serviço de registro, identificação do usuário e
            retorno das informações ao próprio titular dos dados, em
            conformidade com a LGPD.
          </p>
          <p>
            <strong>2- Uso e compartilhamento de dados</strong>
            <br /> Em hipótese alguma o seinfra.com.br compartilha seus dados
            com terceiros para fins comerciais e publicitários.
          </p>
          <p>
            <strong>3- Diretório</strong>
            <br /> Os dados pessoais são armazenados em banco de dados seguro,
            com acesso restrito e medidas técnicas adequadas para garantir a
            confidencialidade e integridade das informações.
          </p>
          <h2 className="font-semibold mt-4">TERMO DE SERVIÇO</h2>
          <p>
            <strong>1. Aceitação dos Termos</strong>
            <br /> Ao acessar, cadastrar-se ou utilizar o Sistema de Registro de
            Ordens de Serviço (“SeInfra.com.br”), o usuário declara que leu,
            compreendeu e concorda integralmente com os presentes Termos de
            Serviço.
          </p>
          <p>
            <strong>2. Vinculação Institucional</strong>
            <br /> O Sistema é de responsabilidade da Secretaria Municipal de
            Infraestrutura, vinculada à Prefeitura Municipal de Nova Russas.
          </p>
          <p>
            <strong>3. Finalidade do SeInfra</strong>
            <br /> Permitir o registro, acompanhamento e consulta de Ordens de
            Serviço relacionadas à infraestrutura urbana e rural.
          </p>
          <p>
            <strong>4. Cadastro e Responsabilidade do Usuário</strong>
            <br /> O usuário deverá fornecer informações verdadeiras e é
            responsável pela confidencialidade de seus dados.
          </p>
          <p>
            <strong>5. Uso Adequado do Sistema</strong>
            <br /> É vedado registrar informações falsas, utilizar o sistema
            para fins ilegais ou comprometer sua segurança.
          </p>
          <p>
            <strong>6. Ordens de Serviço</strong>
            <br /> O usuário é responsável pelas informações inseridas. O
            sistema não garante prazos específicos de atendimento.
          </p>
          <p>
            <strong>7. Comunicação com a Secretaria</strong>
            <br /> Pode ocorrer por canais institucionais ou plataformas
            externas como WhatsApp.
          </p>
          <p>
            <strong>8. Disponibilidade do Sistema</strong>
            <br /> O sistema pode sofrer interrupções para manutenção ou
            atualizações.
          </p>
          <p>
            <strong>9. Suspensão ou Cancelamento</strong>
            <br /> O acesso poderá ser suspenso em caso de descumprimento dos
            termos.
          </p>
          <p>
            <strong>10. Limitação de Responsabilidade</strong>
            <br /> A Secretaria não se responsabiliza por informações
            incorretas, uso indevido ou falhas técnicas externas.
          </p>
          <p>
            <strong>11. Alterações dos Termos</strong>
            <br /> Este Termo poderá ser alterado a qualquer momento.
          </p>
          <p>
            <strong>12. Disposições Finais</strong>
            <br /> Regido pelas leis da República Federativa do Brasil.
          </p>
        </div>

        <div className="flex justify-center mt-6">
          <DialogClose asChild>
            <Button
              className="bg-seinfra-blue-light-300 !w-70 xl:!w-full text-background rounded-2xl px-2 sm:px-6 md:px-8 text-sm sm:text-base">
              Fechar
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
