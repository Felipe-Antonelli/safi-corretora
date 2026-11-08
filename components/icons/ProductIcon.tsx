import {
  Car,
  Motorbike,
  Truck,
  House,
  Building2,
  HeartPulse,
  Stethoscope,
  Plane,
  PawPrint,
  KeyRound,
  CarFront,
  Wrench,
  type LucideProps,
} from "lucide-react";

/**
 * Mapa de ícones lineares dos produtos.
 * Em /data/seguros.ts e /data/consorcios.ts usamos só a "chave"
 * (ex.: "auto"), assim os dados continuam simples de editar.
 */
const icones = {
  auto: Car,
  moto: Motorbike,
  caminhao: Truck,
  residencial: House,
  empresarial: Building2,
  vida: HeartPulse,
  saude: Stethoscope,
  viagem: Plane,
  pet: PawPrint,
  imovel: KeyRound,
  veiculo: CarFront,
  servicos: Wrench,
} as const;

export type IconeProduto = keyof typeof icones;

export function ProductIcon({ nome, ...props }: { nome: IconeProduto } & LucideProps) {
  const Icone = icones[nome];
  return <Icone aria-hidden="true" strokeWidth={1.75} {...props} />;
}
